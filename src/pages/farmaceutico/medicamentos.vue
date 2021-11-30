<template>
  <q-page padding>
    <!-- content -->
    <q-breadcrumbs style="margin: 1em">
      <q-breadcrumbs-el icon="home" to="/farmaceutico" />
      <q-breadcrumbs-el label="Dados do Produto" icon="widgets" />
    </q-breadcrumbs>
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
            Dados sobre o produto
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
              
              <q-select 
                class="col-4"
                color="black"
                dense 
                outlined 
                rounded
                v-model="medicamento" 
                :options="medicamentos" 
                label="Nome do Medicamento*" 
                
              />

              <div class="row">
                <q-input
                  rounded
                  dense
                  outlined
                  style="width: 30vh"
                  color="black"
                  type="number"
                  v-model="Preco"
                  label=" Preço* "
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Adiciona a Área',
                  ]"
                />
                <i style="margin-left: 1rem"
                  ><q-option-group
                    dense
                    v-model="group"
                    :options="options"
                    color="teal"
                  />
                </i>
              </div>
              <q-input
          color="black"
          rounded
          dense
          outlined
          v-model="data.validade"
          label="Data de validade do Medicamento"
          mask="####-##-##"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="datePopup"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  v-model="data.validade"
                  color="teal"
                  @input="closeDatePopup()"
                  mask="YYYY-MM-DD"
                >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
              <q-select
                class="col-4" 
                color="black"
                dense 
                outlined
                rounded 
                v-model="farmacia" 
                :options="farmacias" 
                label="Nome da farmácia*" 
              />

              <q-select 
                class="col-4"
                color="black"
                dense 
                outlined 
                rounded
                v-model="categoria" 
                :options="categorias" 
                label="Categoria do Medicamento*" 
                
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
        
        
          <div class="title-font text-h6">Foto do Medicamento</div>
          <div

            @dragover.prevent="dragOver"
            @dragleave.prevent="dragLeave"
            @drop.prevent="drop($event)"
            style=""
          >
            <div class="drop" v-show="dropped == 2"></div>
            <!-- Error Message -->
            <div v-show="error" class="error">
              {{ error }}
            </div>
            <!-- To inform user how to upload image -->
            <div v-show="Imgs.length == 0" class="beforeUpload">
              <input
                type="file"
                style="z-index: 1"
                accept="image/*"
                ref="uploadInput"
                @change="previewImgs"
                multiple
              />
              <svg
                class="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>Upload Image</title>
                <g id="Upload_Image" data-name="Upload Image">
                  <g id="_Group_" data-name="&lt;Group&gt;">
                    <g id="_Group_2" data-name="&lt;Group&gt;">
                      <g id="_Group_3" data-name="&lt;Group&gt;">
                        <circle
                          id="_Path_"
                          data-name="&lt;Path&gt;"
                          cx="18.5"
                          cy="16.5"
                          r="5"
                          style="
                            fill: none;
                            stroke: #303c42;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                          "
                        />
                      </g>
                      <polyline
                        id="_Path_2"
                        data-name="&lt;Path&gt;"
                        points="16.5 15.5 18.5 13.5 20.5 15.5"
                        style="
                          fill: none;
                          stroke: #303c42;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                        "
                      />
                      <line
                        id="_Path_3"
                        data-name="&lt;Path&gt;"
                        x1="18.5"
                        y1="13.5"
                        x2="18.5"
                        y2="19.5"
                        style="
                          fill: none;
                          stroke: #303c42;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                        "
                      />
                    </g>
                    <g id="_Group_4" data-name="&lt;Group&gt;">
                      <polyline
                        id="_Path_4"
                        data-name="&lt;Path&gt;"
                        points="0.6 15.42 6 10.02 8.98 13"
                        style="
                          fill: none;
                          stroke: #303c42;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                        "
                      />
                      <polyline
                        id="_Path_5"
                        data-name="&lt;Path&gt;"
                        points="17.16 11.68 12.5 7.02 7.77 11.79"
                        style="
                          fill: none;
                          stroke: #303c42;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                        "
                      />
                      <circle
                        id="_Path_6"
                        data-name="&lt;Path&gt;"
                        cx="8"
                        cy="6.02"
                        r="1.5"
                        style="
                          fill: none;
                          stroke: #303c42;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                        "
                      />
                      <path
                        id="_Path_7"
                        data-name="&lt;Path&gt;"
                        d="M19.5,11.6V4A1.5,1.5,0,0,0,18,2.5H2A1.5,1.5,0,0,0,.5,4V15A1.5,1.5,0,0,0,2,16.5H13.5"
                        style="
                          fill: none;
                          stroke: #303c42;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                        "
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <p class="mainMessage">
                <i>
                  {{
                    uploadMsg
                      ? uploadMsg
                      : "Clique aqui para adicionar a foto do medicamento!"
                  }}</i
                >
              </p>
              
            </div>
            <div class="imgsPreview" v-show="Imgs.length > 0">
              <div class="imageHolder" v-for="(img, i) in Imgs" :key="i">
                <img :src="img" />
                <span
                  class="delete"
                  style="color: white"
                  @click="deleteImg(--i)"
                >
                  <svg
                    class="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </span>
                <div class="plus" @click="append" v-if="++i == Imgs.length">
                  <q-icon name="add" />
                </div>
                
              </div>
            </div>
          </div>
          
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
      
      <div class="row q-gutter-x-md" style="float: right">

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
      categoria: [],
      medicamento: [],
      farmacia: [],
      successDatas: false,
      dadosTerreno: {
        area: null,
        dimenssoes: null,
        finalidade: null,
        area_logradouro: null,
        link_planta_topografica: null,
        aprovacao_vereacao: true,
        localizacao: {
          quarteirão: null,
          casa: null,
          longitude: null,
          latitude: null,
        },
        proprietario: null,
        vereador: null,
        termo_entrega: null,
        termo_compromisso: null,
      },
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
      
    
      group: "MZN",
      options: [
        {
          label: "MZN",
          value: "MZN",
        },
        
      ],
      farmacias: [
        'Casa do Povo', 'Orquidia', 'Only One'
      ],
      medicamentos: [
        'Acarboze', 'Amicacina', 'Benzocaina', 'Betaina', 'Cantaridina', 'Paracetamol'
      ],
      categorias: [
        'Antialérgicos', 'Dor, Febre e contusão', 'Fitness', 'Gravidez e amamentação', 'Gripes e Resfriados'
      ],

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
    closeDatePopup() {
      // this.data.data_nascimento = this.data.data_nascimento.replace("/", "-")
      this.$refs.datePopup.hide()
    },
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
    
    onSubmit() {
      
      this.panelPosition++
      this.panel = this.listPanel[this.panelPosition]
    },

    getLocalidades() {
      const url = `http://simbo-api.herokuapp.com/localizacao/localidades/`
      axios
        .get(url, {
          headers: {
            Authorization: `token ${this.userGetter.token}`,
          },
        })
        .then((response) => {
          let tempData = []
          response.data.forEach((localidade) => {
            tempData.push({ value: localidade.id, label: localidade.nome })
          })
          this.localidades = tempData
          console.log(response.data)
        })
    },
    getBairros(idLocalidade){
      const url = `http://simbo-api.herokuapp.com/localizacao/bairros/localidade/${idLocalidade}/`
      axios
        .get(url, {
          headers: {
            Authorization: `token ${this.userGetter.token}`,
          },
        })
        .then((response) => {
          let tempData = []
          response.data.forEach((bairro) => {
            tempData.push({ value: bairro.id, label: bairro.nome })
          })
          this.bairros = tempData
        })
    },
    addLocalizacao() {
      const url = "https://simbo-api.herokuapp.com/localizacao/post/"
      console.log(this.dadosTerreno.localizacao)
      this.dadosTerreno.localizacao.bairro = this.bairro.value
      axios
        .post(url, this.dadosTerreno.localizacao, {
          headers: {
            Authorization: `token ${this.userGetter.token}`,
          },
        })
        .then((response) => {
          console.log(response.data)
          console.log("Done!")
          this.addTerreno(response.data.id)
        })
        .catch((error) => {
          console.log(error)
          this.$q.loading.hide()
        })
    },

    addTerreno(localizacao) {
      const url = "https://simbo-api.herokuapp.com/terreno/post/"
      this.dadosTerreno.localizacao = localizacao
      this.dadosTerreno.link_planta_topografica = this.picture
      axios
        .post(url, this.dadosTerreno, {
          headers: {
            Authorization: `token ${this.userGetter.token}`,
          },
        })
        .then((response) => {
          console.log(response.data)
          this.enviarDados(response.data.id)
          console.log("Done!")
          this.$q.loading.hide()
        })
        .catch((error) => {
          console.log(error)
          this.$q.loading.hide()
        })
    },
    getRegularizacao() {
      const url = `https://simbo-api.herokuapp.com/regularizacao/${this.$route.params.idRegularizacao}/`
      console.log(this.$route.params.idRegularizacao)
      
      axios
        .get(url, {
          headers: {
            Authorization: `token ${this.userGetter.token}`,
          },
        })
        .then((response) => {
          console.log(response.data)
          this.regularizacao = response.data
        })
        .catch((error) => {
          console.log(error)
          this.$q.loading.hide()
        })
    },

    updateRegularizacao(idTerreno) {
      this.$q.loading.show()

      const url = `https://simbo-api.herokuapp.com/regularizacao/${this.$route.params.idRegularizacao}/`
      this.regularizacao.terreno = idTerreno
      axios
        .put(url, this.regularizacao, {
          headers: {
            Authorization: `token ${this.userGetter.token}`,
          },
        })
        .then((response) => {
          this.successDatas = true
          console.log(response.data)
          console.log("Done!")
          this.$q.loading.hide()
        })
        .catch((error) => {
          console.log(error)
          this.$q.loading.hide()
        })
    },

   
    aprovar() {
      this.$q.loading.show()
      const url = `https://simbo-api.herokuapp.com/regularizacao/${this.regularizacao.id}/`
      let data = this.regularizacao
      data.tecnico_dados = true
      
      console.log(data)
      axios
        .put(url, data, {
          headers: { Authorization: `token ${this.userGetter.token}` },
        })
        .then((response) => {
          console.log("done")
          this.$q.loading.hide()
          console.log(response.data)
          this.successDatas = true
          
        })
        .catch((error) => {
          console.log(error)
          this.$q.loading.hide()
        })
    },

    onReset() {
      this.accept = false
      this.area = null
      this.finalidade = null
      this.bairro = null
      this.localidade = null
      this.group = "m²"
    },
  },
  mounted() {
    this.$q.loading.hide()
    this.getRegularizacao()
    this.getLocalidades()
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
