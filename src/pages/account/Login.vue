<template>
  <q-page padding class="flex flex-center">
    <div class="row justify-center" style="width: 100rem; margin-top: 2em">
      <q-card 
        
        class="my-card col-12 col-md-3 text-center q-pa-md q-gutter-y-lg">
        <q-img
          src="../../statics/logo1.png"
          spinner-color="white"
          width="100px"
        />
        <div
          class="flex flex-center title-font text-h4 entrar"
          text-color="primary"
        >
          Fazer login
        </div>
        <div class="flex flex-center entrar" text-color="teal">
          Use sua Conta SIGAMF
        </div>

        <div class="q-gutter-y-md">
          <q-input
            rounded
            dense
            outlined
            
            v-model="data.bi"
            color="teal"
            label="Nº de Bilhete de Identidade"
          />
          <q-input
            v-model="data.password"
            rounded
            outlined
            dense
            color="teal"
            label="Password"
            :type="isPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <q-btn
            rounded
            size="1rem"
            
            class="full-width"
            color="teal"
            label="Entrar"
            to="/utente"
          />
          <div class="row justify-end q-gutter-x-sm">
            <div>Não possui uma Conta?</div>
            <router-link to="/account/signup" class="login">
              Criar Conta
            </router-link>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import axios from "axios"
// import { auth } from "boot/firebase"
// import { response } from "express"
export default {
  // name: 'PageName',
  data() {
    return {
      username: "",
      passwd: null,
      isPwd: true,
      data: {
        username: "",
        password: "",
      },
    }
  },
  methods: {
    login() {
      this.getToken()
    },
    getToken() {
      // method true equal login and false equal create
      if (!this.data.username && !this.data.password) return
      const url = "https://simbo-api.herokuapp.com/account/token/"
      axios
        .post(url, this.data)
        .then((response) => {
          // console.log(response.data)
          // console.log(response.data.token)
          this.loginWithToken(response.data.token)
        })
        .catch((error) => {
          console.log(error)
          // console.table(error.response.status)
          if (error.response.status) {
            this.errorPassWd = true
            this.errorPassWdInput = false
          }
        })
    },

    loginWithToken(token) {
      console.log(token)
      
      axios
        .get(url, {
          headers: {
            Authorization: `token ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
<style scoped>
.login {
  text-decoration: none;
  color: rgb(0, 225, 255);
}
.login:hover {
  color: green;
}
.registar {
  margin-top: 2%;
  color: #21ba45;
}
.dados {
  text-decoration: underline;
}
.logo {
  margin-top: -10px;
}
.genero {
  margin-left: 3em;
}
</style>