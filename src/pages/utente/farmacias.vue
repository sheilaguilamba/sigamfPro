<template>
  <div class="q-pa-sm">
    <q-breadcrumbs style="margin: 1em">
      <q-breadcrumbs-el icon="home" to="/utente" />
      <q-breadcrumbs-el label="Farmácias" icon="widgets" />
    </q-breadcrumbs>
    <div
      class="title-font text-h3 flex flex-center"
      style="margin-bottom: 1em"
    >
      Farmácias 
    </div>
    <div padding class=" flex flex-center q-gutter-sm">
      
        <q-card class="my-card">
          <q-item>
            <q-item-section avatar class="text-bold"
              >Farmácia:</q-item-section
            >
            <q-item-section
              >Casa do Povo
            </q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">localização:</q-item-section>
            <q-item-section>Laulane</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Contacto:</q-item-section>
            <q-item-section side class="text-black">848397003
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver Mais"
              :to="`/utente/casaDoPovo`"
            />
          </q-card-actions>
        </q-card>
        


      
        <q-card class="my-card">
          <q-item>
            <q-item-section avatar class="text-bold"
              >Farmácia:</q-item-section
            >
            <q-item-section
              >Orquidia
            </q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">localização:</q-item-section>
            <q-item-section>Hulene A</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Contacto:</q-item-section>
            <q-item-section side class="text-black">8483974303
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver Mais"
              :to="`/utente/orquidia`"
            />
          </q-card-actions>
        </q-card>

        
      
        <q-card class="my-card">
          <q-item>
            <q-item-section avatar class="text-bold"
              >Farmácia:</q-item-section
            >
            <q-item-section
              >OnlyOne
            </q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">localização:</q-item-section>
            <q-item-section>Hulene B </q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Contacto:</q-item-section>
            <q-item-section side class="text-black">848397903
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver Mais"
              :to="`/utente/onlyOne`"
            />
          </q-card-actions>
        </q-card>

        

    </div>
  </div>
    
</template>

<script>


export default {
  //computed: {
    //listEl() {
      //return this.$refs.myList ? this.$refs.myList.$el : null
    //}
  //},
}  
   
</script>

<style lang="sass" scoped>

.my-card
  width: 100%
  max-width: 250px
</style>