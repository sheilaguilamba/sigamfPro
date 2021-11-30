<template>
<q-page class="flex flex-center">
  <div class="row justify-center" style="width: 100vw; margin-top: 1em">
    <q-card class="col-12 col-md-3 text-center q-pa-md q-gutter-y-md">
    <q-form @submit="onItemClick()">
    
      <q-img src="../../statics/logo1.png" spinner-color="white" width="100px" />
      <div class="flex flex-center title-font text-h4 entrar" color="teal">
        Registe-se
      </div>
      
        <div class="q-gutter-y-md q-pa-md">
          <q-input
            rounded
            dense
            outlined
            v-model="full_name"
            color="teal"
            label="Nome completo"
            lazy-rules
            :rules="[
              (val) =>
                val.split(' ').length > 1 ||
                'Deve preencher pelo menos dois nomes.',
            ]"
          />

          <q-input
            rounded
            dense
            outlined
            v-model="userData.user.bi"
            color="teal"
            label="Nº de Bilhete de Identidade"
            mask="############"
          />
          <q-input
            rounded
            dense
            outlined
            v-model="userData.farmaceutico.telefone"
            color="teal"
            label="Telefone"
            mask="#########"
          />
          <q-input
            rounded
            dense
            outlined
            v-model="userData.farmaceutico.telefone_alternativo"
            color="teal"
            label="Telefone alternativo"
          />
          <q-select
          rounded
          dense
          outlined
          color="teal"
          label="Sexo"
          v-model="sexo"
          :options="sexo_options"
        />
          <q-input
            v-model="userData.user.password"
            rounded
            outlined
            dense
            color="teal"
            label="Criar Password"
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
            dense
            type="submit"
            class="full-width"
            color="teal"
            label="Seguinte"
            to="/account/confirm"
          />
          <div class="row justify-end q-gutter-x-sm">
            <div>Já Tem uma Conta?</div>
            <router-link to="/account/login" class="login"
              >Entrar na Conta</router-link
            >
          </div>
        </div>
    </q-form>  
    </q-card>
    
    
  </div>
</q-page>  
</template>

<script>
export default {
  data() {
    return {
      email: "",
      full_name: "",
      isPwd: true,
      passwd: null,
      sexo: null,
      sexo_options: ["Masculino", "Feminino"],
      userData: {
        user: {
          nuit: null,
          first_user_name: "",
          last_user_name: "",
          password: null,
        },
        farmaceutico: {
          telefone: "",
          telefone_alternativo: "",
          url_nuit: "",
          url_ipa: "",
          user: null,
          endereco: "",
        },
      },
    }
  },
  methods: {
    onItemClick() {
      const splitName = this.full_name.split(" ")
      function lastNameFunc() {
        let name = ""
        for (let index = 0; index < splitName.length; index++) {
          const element = splitName[index]
          if (index > 0) {
            name += element + " "
          }
        }
        return name
      }
      this.userData.user.first_user_name = splitName[0]
      this.userData.user.last_user_name = lastNameFunc()
      console.log(this.userData)
      this.$emit("step1Data", this.userData)
      // this.$emit("next")
    },
  },
}
</script>

<style>
</style>