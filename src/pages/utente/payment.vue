<template>
  <q-page padding>
    <q-breadcrumbs style="margin: 1em">
      <q-breadcrumbs-el icon="home" to="/municipe" />
      <q-breadcrumbs-el label="Pagamentos" icon="widgets" />
    </q-breadcrumbs>
    <!-- content -->
    <div class="row justify-center title-font text-h5 q-mb-lg">
      Pagamento refere a {{ getPagamentoPara }}
    </div>

    <div class="row justify-center title-font text-h5">
      <div>ou</div>
    </div>
    <div class="row">
      <div class="col-6 q-pl-xl q-pr-xl">
        <div class="text-body1">
          Clique no cartão para carregar comprovativo
        </div>
        <q-card
          v-if="!fileProcessed"
          class="flex flex-center bg-grey cursor-pointer"
          style="height: 300px"
          v-ripple
          @click="processFile()"
        >
          <q-icon name="upload_file" color="white" size="100px" />
        </q-card>
        <q-card
          v-else
          class="flex flex-center cursor-pointer"
          style="height: 300px"
          v-ripple
          @click="processFile()"
        >
          <q-img :src="fileProcessed" />
        </q-card>
        <div class="row justify-end q-pt-md">
          <q-btn
            color="white"
            text-color="black"
            label="Enviar comprovativo"
            @click="enviarComprovativo()"
            rounded
          />
        </div>
      </div>
      <q-separator vertical size="1px" color="grey" />
      <div class="col-5 q-pl-md">
        <div class="text-body1">Pagar por um dos meios na plataforma</div>
        <div class="row">
          <div class="col-6 q-pa-xs">
            <q-btn
              rounded
              class="full-width"
              @click="paymentDialog = !paymentDialog"
            >
              <div class="row">
                <q-img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/03/M-pesa-logo.png"
                  spinner-color="white"
                  width="65px"
                />
              </div>
            </q-btn>
          </div>
          <div class="col-6 q-pa-xs">
            <q-btn
              rounded
              class="full-width"
              label="Gerar referência para pagar"
              @click="gerarReferencia()"
            />
          </div>
        </div>
      </div>
    </div>
    <form>
      <input
        type="file"
        hidden
        ref="file"
        @change="onChangeFile"
        accept="image/*"
      />
    </form>
    <div>
      <q-dialog v-model="dialogComprovativo">
        <q-card>
          <q-card-section>
            <div class="title-font text-h6">
              Pagamento referente a {{ getPagamentoPara }}
            </div>
          </q-card-section>
          <q-card-section>
            Comprovativo de pagamento enviado com sucesso. Aguarde pela
            confirmação do pagamento.
          </q-card-section>
          <q-card-actions align="right">
            <q-btn rounded label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="referenciaDialog">
        <q-card style="width: 80vw">
          <q-card-section>
            <div class="text-h6">Referência para pagamento</div>
          </q-card-section>
          <q-card-section>
            <div class="">
              <div>
                <div class="text-bold">Codigo de Entidade:</div>
                888444555
              </div>
              <div>
                <div class="text-bold">Referência:</div>
                552214566
              </div>
            </div></q-card-section
          >
          <q-card-actions align="right">
            <q-btn rounded label="OK" color="green-9" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="paymentDialog">
        <q-card style="width: 80vw">
          <q-card-section>
            <div class="text-h6">Efetuar pagamento.</div>
          </q-card-section>
          <q-card-section>
            <div>
              <q-form @submit="submitPayment()" class="q-gutter-md">
                <q-input
                  outlined
                  rounded
                  color="green-9"
                  v-model="payment.number"
                  label="Numero de telefone"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Introduza o teu número',
                  ]"
                />
                <div>
                  <q-btn
                    flat
                    rounded
                    label="Cancelar"
                    color="green-9"
                    v-close-popup
                  />
                  <q-btn rounded label="Pagar" type="submit" color="green-9" />
                </div>
              </q-form>
            </div>
          </q-card-section>
          <q-card-actions align="right"> </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex"
import axios from "axios"
export default {
  // name: 'PageName',
  props: ["value"],
  data() {
    return {
      referenciaDialog: false,
      file: null,
      fileProcessed: null,
      dialogComprovativo: false,
      paymentDialog: false,
      payment: {
        userData: {},
        service: "",
        installments: 1,
        value: null,
        status: false,
        number: "",
        image_link: "",
        method: 1,
      },
    }
  },
  

  methods: {
    processFile() {
      this.$refs.file.click()
    },
    gerarReferencia() {
      const vm = this
      this.$q.loading.show({ message: "Gerando referência" })
      setTimeout(() => {
        vm.$q.loading.hide()
        vm.referenciaDialog = true
      }, 1000)
    },
    
    onChangeFile(event) {
      const files = event.target.files
      let filename = files[0].name
      let file = files[0]
      if (!(file && file["type"].split("/")[0] === "image")) {
        return (this.errorFileDialog = true)
      }
      const fileReader = new FileReader()
      fileReader.addEventListener("load", () => {
        this.fileProcessed = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.file = files[0]
    },
    enviarComprovativo() {
      this.$q.loading.show({ message: "Enviando Comprovativo" })
      const vm = this
      setTimeout(() => {
        vm.$q.loading.hide()
        vm.dialogComprovativo = true
      }, 2000)
    },
  },
  mounted() {
    // this.$q.loading.hide()
    this.payment.value = this.value
  },
}
</script>