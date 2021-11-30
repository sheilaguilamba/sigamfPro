<template>
  <q-layout view="hHh Lpr lFf">
    <q-header 
      elevated
      class="bg-white text-black"
      >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <div 
        class="row q-pa-sm q-gutter-sm cursor-pointer"
        @click="$route.path !== '/' ? $router.push('/') : () => {}"
        >
            <div class="flex flex-center text-bold title-font text-h5">
              <q-img
                src="../statics/logotipo.png"
                spinner-color="white"
                width="50px"
                
        />
            </div>
            <div class="flex flex-center text-bold title-font text-h5">SIGAMF</div> 
        </div>  
          <!--<q-toolbar-title> </q-toolbar-title> -->
        <q-space/>
        <div>
          <q-btn round flat to="">
            <q-icon name="notifications" color="black" size="40px"/>
          </q-btn>  
        </div>
        <div>
          <q-btn flat round>
            <q-icon v-if="false" name="account_cicle" size=""/>
            <q-avatar>
              <q-icon
                style="border-radius: 150px 150px 150px 150px"
                :name="
                  farmaceuticoGetter && farmaceuticoGetter.foto_url
                    ? `img:${farmaceuticoGetter.foto_url}`
                    : 'account_circle'
                "
              />
            </q-avatar>

            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup to="">
                  <q-item-section avatar>
                    <q-icon name="account_circle" color="teal"/>
                  </q-item-section>
                  <q-item-section>Perfil</q-item-section>
                </q-item>
                <q-separator/>
                <q-item clickable v-close-popup to="">
                  <q-item-section avatar>
                    <q-icon name="logout" color="teal"/>
                  </q-item-section>
                  <q-item-section>Sair</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>


    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      
      content-class="bg-grey-1"
      class="fit"
    >
      <Farmaceutico v-if="$route.path.split('/')[1] == 'farmaceutico'" />
      <Utente v-if="$route.path.split('/')[1] == 'utente'" />
      <Administrador v-if="$route.path.split('/')[1] == 'administrador'" />
      
    </q-drawer>

    <q-page-container>
      
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Farmaceutico from "components/sidenavs/Farmaceutico.vue"
import Utente from "components/sidenavs/Utente.vue"
import Administrador from "components/sidenavs/Administrador.vue"
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      sideItems: null,
    }
  },
  components: {Farmaceutico, Utente, Administrador},
  mounted(){
    const pathRoute = this.$route.path.split("/")[1]
    console.log(pathRoute)
    if (pathRoute == "farmaceutico"){
      this.sideItems = this.sideItemsFarmaceutico
    } else if (pathRoute == "utente"){
      this.sideItems == this.sideItemsUtente
    } else {
      this.sideItems == this.sideItemsAdministrador
    }

    console.log(this.$route.path)
  },
  watch: {
    $route(to, from){
        // Verifica a rota para atribuir os links certos para o drawer
      const pathRoute = to.path.split("/")[1]
      if (pathRoute == "farmaceutico"){
        this.sideItems = this.sideItemsFarmaceutico
      }else if (pathRoute == "utente"){
        this.sideItems == this.sideItemsUtente
      } else {
        this.sideItems == this.sideItemsAdministrador
      }
    },
  },
}
</script>


<style lang="sass" scoped>
.ancora
  text-decoration: none
  color: teal

  .menu-list .q-item
    border-radius:0 32px 32px 0
</style>
