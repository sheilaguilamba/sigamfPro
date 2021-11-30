<template>
  <q-layout view="lHh Lpr lFf">
    <q-header 
      elevated
      class="bg-white text-back"

      v-if="
        $route.path !== '/' &&
        $route.path !== '/account/login' &&
        $route.path !== '/account/signup' &&
        $route.path !== '/account/reset-pass' &&
        $route.path !== '/account/confirm' &&
        $route.path !== '/account/dados-finalizar'
      "
    
      >
      <q-toolbar>
        

        <div 
        class="row q-pa-sm q-gutter-sm cursor-pointer"
        @click="$route.path !== '/' ? $router.push('/') : () => {}"
        >
            <div class="flex flex-center text-bold title-font text-h5">
              
            </div>
            <div class="flex flex-center text-bold title-font text-h5">SIGAMF</div> 
        </div>  
          <!--<q-toolbar-title> </q-toolbar-title> -->
        <q-space/>
       
        <div>
          <q-btn flat round>
            <q-icon v-if="false" name="account_cicle" size=""/>
            <q-avatar v-else>
              <q-img
                src=""
                spinner-color="black"
              />
            </q-avatar>

           
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>


    

    <q-page-container>
      
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout1',
  data () {
    return {
      leftDrawerOpen: false,
      sideItems: null,
    }
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
