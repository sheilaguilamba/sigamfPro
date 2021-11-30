<template>
  <div class="row justify-center" style="width: 100vw; margin-top: 15rem">
    <q-card class="col-12 col-md-3 text-center q-pa-md q-gutter-y-md">
      <q-img src="../../statics/logo1.png" spinner-color="white" width="100px" />
      <div class="title-font text-center text-h4 entrar" text-color="primary">
        Confirmar o Registo
      </div>

      <div class="texto text-justify">
        Confirma o seu registo, insira o código de 6 dígitos que foi enviado no
        seu contacto pessoal para poder efectuar o registo.
      </div>
      <div class="row" v-if="time">
        Se não receber o código dentro do tempo, pode reenviar.
        {{ (3 - time * 0.1) | counterNum }}
      </div>
      <div>
        <div class="row justify-center">
          <q-input
            input-class="text-center"
            v-model="code"
            dense
            class="caixa text-center"
            mask="###-###"
          />
        </div>
        <div class="row justify-end texto col-12 q-pa-sm">
          Não recebeu o código?
          <q-btn
            flat
            size="sm"
            color="teal-9"
            icon-right="send"
            label="Reenviar"
            @click="resendCode()"
            :disable="time ? true : false"
          />
        </div>
      </div>

      <div class="q-pa-md">
        <q-btn
          rounded
          dense
          class="full-width final"
          color="teal"
          label="Finalizar"
          to="/account/login"
        />
      </div>
      <div class="q-pa-md q-gutter-sm">
        <q-dialog v-model="prompt" persistent>
          <q-card style="min-width: 350px">
            <q-card-section>
              <div class="title-font text-h6">
                Pretende continuar para submeter os documentos?
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <p>
                Clique em:<br />Terminar para terminar com o registo ou<br />
                Avançar para adicionar os documentos no seu perfil
              </p>
            </q-card-section>

            <q-card-actions align="right" class="darkSalmon">
              <q-btn
                color="purple"
                flat
                label="Terminar"
                v-close-popup
                to="/account/login"
              />
              <q-btn
                color="positive"
                flat
                label="Avançar"
                v-close-popup
                to="/municipe/perfil-teste"
                @click="enviarDadosMunicipe()"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </q-card>
  </div>
</template>


<script>
import axios from "axios"
import { mapGetters } from "vuex"
export default {
  // name: 'PageName',
  data() {
    return {
      address: "",
      prompt: false,
      code: "",
      time: 0,
      counterFunc: null,
    }
  },

  computed: {
    ...mapGetters("account", ["userGetter", "municipeGetter"]),
  },

  methods: {
    stopCounter() {
      clearInterval(this.counterFunc)
    },
    counterTime() {
      const vm = this
      this.counterFunc = setInterval(() => {
        vm.time += 1
      }, 1000)
    },
    confirmCode() {
      this.$q.loading.show({ message: "Confirmando user" })
      const vm = this
      console.log(this.userGetter)
      this.code = this.code.replace("-", "")
      console.log(this.code)
      const url = "https://simbo-api.herokuapp.com/account/activation/"
      axios
        .post(
          url,
          { code: this.code },
          {
            headers: {
              Authorization: `token ${this.userGetter.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data)
          //   this.panel = "confirmStep"
          vm.$q.loading.hide()
          // vm.$router.push("/municipe")
          vm.$emit("next")
        })
        .catch((error) => {
          console.log(error)
          this.$q.loading.hide()
        })
    },
    resendCode() {
      console.log(this.municipeGetter.telefone)
      console.log(this.userGetter.id)
      this.$q.loading.show({ message: "Confirmando user" })
      const vm = this
      const url = "https://simbo-api.herokuapp.com/municipe/resendcode/"
      const data = {
        user: this.userGetter.id,
        telefone: this.municipeGetter.telefone,
      }
      axios
        .post(url, data, {
          headers: {
            Authorization: `token ${this.userGetter.token}`,
          },
        })
        .then((response) => {
          console.log(response.data)
          this.counterTime()
          this.$q.loading.hide()
        })
        .catch((error) => {
          console.log(error)
          this.$q.loading.hide()
        })
    },
  },
  mounted() {
    this.$q.loading.hide()
  },
  watch: {
    time(val) {
      console.log(val)
      if (val >= 30) {
        this.stopCounter()
        this.time = 0
      }
    },
  },

  filters: {
    counterNum(val) {
      return val.toFixed(2)
    },
  },
}
</script>
<style scoped>