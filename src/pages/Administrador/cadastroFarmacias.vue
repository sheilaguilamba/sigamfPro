<template>
  <q-page padding>
    <!-- content -->
    
    <div
      class="text-black title-font text-h3 flex flex-center"
      style="margin-bottom: 1em"
    >
     
    </div>
    <div class="row justify-center">
      <q-tab-panels
        v-model="panel"
        animated
        class="shadow-2 rounded-borders col-10"
      >
        <q-tab-panel name="terreno">
          <q-card-section class="row justify-center">
            <img
              src="../../statics/logo1.png"
              alt="Logo Image"
              class="imagem text-font"
            />
          </q-card-section>
          <div class="title-font row justify-center text-h6">
            Cadrastro das Farmácias
          </div>
          <q-card-section>
            <q-form
              action="https://console.firebase.google.com/project/undefined/firestore/data/documentos"
              method="post"
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-y-sm q-pb-xl"
              autocorrect="off"
              autocapitalize="off"
              autocomplete="off"
              spellcheck="false"
            >
              
              <q-input 
                class="col-4"
                dense 
                outlined 
                rounded
                v-model="farmacia" 
                color="black"
                label="Nome das Farmácias*" 
                
              />

              
              <q-input
                class="col-4"
                color="black" 
                dense 
                outlined
                rounded 
                v-model="localizacao" 
                 
                label="Localização da farmácia*" 
              />
              
                <q-input
                  class="col-4"
                  rounded
                  dense
                  outlined
                  style="width: 30vh"
                  color="black"
                  
                  v-model="contacto"
                  label=" Contacto* "
                  
                  
                />
                
              
              
              <div class="row flex flex-center" style="float: right">
                <q-btn
                  rounded
                  icon-right="delete"
                  flat
                  label="Limpar"
                  type="reset"
                  color="red"
                />
                
              </div>
            </q-form>
          </q-card-section>
        
        
          
        </q-tab-panel>
        
      </q-tab-panels>
      
    </div>
    
    <div>

      <q-dialog v-model="alert">
        <q-card>
          <q-card-section>
            <div class="text-h6">{{ imageName }}</div>
          </q-card-section>
          <q-card-actions>
            <q-btn label="Fechar" color="primary" @click="alert = false" />
          </q-card-actions>

          <q-separator />

          <q-card-section
            style="height: 50%; max-height: 100%; width: 40rem; max-width: 100%"
          >
            <q-img v-if="imageData != null" class="preview" :src="picture" />
          </q-card-section>

          <q-separator />
          <q-card-action> </q-card-action>
        </q-card>
      </q-dialog>
      
      <div class="row q-gutter-x-md" style="float: right; margin-top: 5rem">

        <q-btn
          
          rounded
          type="submit"
          label="Enviar"
          color="white"
          text-color="black"
          icon-right="check"
          @click="onUpload()"
        />
      </div>
    
      <q-dialog v-model="successDatas" persistent>
        <q-card>
          <q-card-section>
            <div class="text-h6">Dados do terreno adicionados com sucesso.</div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              rounded
              label="OK"
              to="/tecnico/visita-regularizacao"
              color="green-9"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
    <div :hidden="progressHide" style="margin-left: 20rem">
      <p>
        Progress: {{ uploadValue.toFixed() + "%" }}
        <progress id="progress" :value="uploadValue" max="100"></progress>
      </p>
    </div>
    
  </q-page>
</template>

<script>

import { mapGetters } from "vuex"
import axios from "axios"

export default {
  // name: 'PageName',
  data() {
    return {
      
      farmacias: [],
      localizacao: [],  
      area: "",
      accept: false,
      dia: "",
      finalidade: "",
      error: "",
      files: [],
      uploadValue: 0,
      picture: null,

      dropped: 0,
      progressHide: true,
      Imgs: [],

      alert: false,
      submitHide: true,
      imageSize: 0,
      imageName: null,
      imageData: null, 
      model: null,

      zoomFile: false,
      fileProcessed: null,
      file: null,
      panel: "terreno",
      panelPosition: 0,
      listPanel: ["terreno", "plantaTopografica"],
      data: {
        area: "",
      },
      regularizacao: null,
    }
  },
  props: {
    max: Number,
    uploadMsg: String,
    maxError: String,
    fileError: String,
  },
  
  computed: {
    ...mapGetters("account", ["userGetter", "tecnicoVereacaoGetter"]),
  },
  methods: {
    dragOver() {
      this.dropped = 2
    },
    progressHideFunc() {
      progressHide = false
    },
    dragLeave() {},
    drop(e) {
      let status = true
      e.dataTransfer.files.forEach((file) => {
        if (file.type.startsWith("image") === false) status = false
      })
      if (status == true) {
        if (
          this.$props.max &&
          e.dataTransfer.files.length + this.files.length > this.$props.max
        ) {
          this.error = this.$props.maxError
            ? this.$props.maxError
            : `O número máximo é de` + this.$props.max
        } else {
          this.files.push(...e.dataTransfer.files)
          this.previewImgs()
        }
      } else {
        this.error = this.$props.fileError
          ? this.$props.fileError
          : `Formato não suportados`
      }
      this.dropped = 0
      this.uploadValue = files.length
    },
    append() {
      this.$refs.uploadInput.click()
    },
    readAsDataURL(file) {
      return new Promise(function (resolve, reject) {
        let fr = new FileReader()
        fr.onload = function () {
          resolve(fr.result)
        }
        fr.onerror = function () {
          reject(fr)
        }
        fr.readAsDataURL(file)
      })
    },
    deleteImg(index) {
      this.Imgs.splice(index, 1)
      this.files.splice(index, 1)
      this.$emit("change", this.files)
      this.$refs.uploadInput.value = null
    },
    previewImgs(event) {
      if (
        this.$props.max &&
        event &&
        event.currentTarget.files.length + this.files.length > this.$props.max
      ) {
        this.error = this.$props.maxError
          ? this.$props.maxError
          : `Maximum files is` + this.$props.max
        return
      }
      if (this.dropped == 0) this.files.push(...event.currentTarget.files)
      this.error = ""
      this.$emit("change", this.files)
      let readers = []
      if (!this.files.length) return
      for (let i = 0; i < this.files.length; i++) {
        readers.push(this.readAsDataURL(this.files[i]))
      }
      Promise.all(readers).then((values) => {
        this.Imgs = values
      })
    },
    
    nextPanel() {
      this.panelPosition++
      this.panel = this.listPanel[this.panelPosition]
    },
    backPanel() {
      this.panelPosition--
      this.panel = this.listPanel[this.panelPosition]
    },
    deleteFile() {
      this.imageData = null
      this.uploadValue = 0
      this.progressHide = true
    },
    previewImage(event) {
      this.uploadValue = 0
      this.picture = null
      this.imageData = event.target.files[0]
      this.imageName = this.imageData.name
      this.imageSize = this.imageData.size / 1000
    },
    enviarDados(idTerreno) {
      this.$q.loading.show({ message: "Enviando o seu Pedido" })

      const url = `https://simbo-api.herokuapp.com/regularizacao/${this.$route.params.idRegularizacao}/`
      let data = this.regularizacao
      data.terreno = idTerreno
      console.log(data)

      axios
      .put( url, data, {
            headers: {
              Authorization: `token ${this.userGetter.token}`,
            },
          })
        .then((response) => {
          console.log(response.data)
          console.log("Doneeeeeeeeeeeeeeeeeeee!")
          this.$q.loading.hide()
          this.aprovar(response.data)
          
        })
        .catch((error) => {
          console.log(error)
        })

    },
    //Inicio Firebase
    onUpload() {
      this.picture = null;
      const storageRef = firebaseStorage
        .ref(`regularizacao/${this.files[0].name}`)
        .put(this.files[0]);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 0.5;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url;
            this.addLocalizacao()
          });
        }
      );
      
    },
    //fim
    
    
    
    
    

    
    

    

    
  },
  
}
</script>
​
<style scoped="">
img.preview {
  width: 100%;
}
.progress {
  margin-left: 40%;
}
.imagem {
  width: 12vh;
}
.upload {
  background: #72bd70;
}

.flex-container {
  display: flex;
  flex-direction: column;
  margin: auto;
}
.imagecard {
  max-width: 120vh;
  max-height: 50vh;
  width: 60.6vh;
  height: 30.6vh;
  margin: auto;
  position: relative;
  border: 2px dotted #1c9d3a;
}
.container {
  width: 100%;
  height: 90%;
  background: #f2f4fa;
  border: 0.5px solid #a3a8b1;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  margin: auto;
}
.drop {
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 10px;
  position: absolute;
  background-color: #f4f6ff;
  left: 0;
  border: 3px dashed #a3a8b1;
}
.error {
  text-align: center;
  color: red;
  font-size: 15px;
}
.beforeUpload {
  position: relative;
  text-align: center;
}
.beforeUpload input {
  width: 100%;
  margin: auto;
  height: 100%;
  opacity: 0;
  position: absolute;
  background: red;
  display: block;
}
.beforeUpload input:hover {
  cursor: pointer;
}
.beforeUpload .icon {
  width: 150px;
  margin: auto;
  display: block;
}
.imgsPreview .imageHolder {
  width: 150px;
  height: 150px;
  background: #fff;
  position: relative;
  border-radius: 10px;
  margin: 5px 5px;
  display: inline-block;
}
.imgsPreview .imageHolder img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.imgsPreview .imageHolder .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 29px;
  height: 29px;
  color: #fff;
  background: red;
  border-radius: 50%;
}
.imgsPreview .imageHolder .delete:hover {
  cursor: pointer;
}
.imgsPreview .imageHolder .delete .icon {
  width: 66%;
  height: 66%;
  display: block;
  margin: 4px auto;
}
.imgsPreview .imageHolder .plus {
  color: #e4ecfa;
  background: #6e6c6c;
  border-radius: 50%;
  font-size: 21pt;
  height: 30px;
  width: 30px;
  text-align: center;
  border: 1px dashed;
  line-height: 23px;
  position: absolute;
  right: -42px;
  bottom: 43%;
}
.plus:hover {
  cursor: pointer;
}
</style>
