<template>

  <q-page padding class="flex flex-center">
    <div class="row" style="width: 90vw;"> <!-- ESTA DIV CASO QUEIRA ADICIONAR O CAROSSEL TEM QUE ESTAR EM BAIXO-->
    <!--<div style="max-width: 350px; margin-left: 50em">
     <div class="q-gutter-md">

      <q-input
        rounded outlined  
        style="margin-top: -1em"
        v-model="search"
        debounce="400"
        placeholder="pracetamol, contrametazol, aftas"  
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>

        
     </div>
    </div>-->

    <!-- EXATAMENTE AQUI-->
      <div
      
        class="col-12 col-md-4 q-pa-lg title-font text-h5"
        v-for="(item, index) in services"
        :key="index"
      >
        <q-card
          class="my-card cursor-pointer text-center card-items q-pt-md"
          style="height: 11rem"
          bordered
          flat
          clickable
          v-ripple
          @click="$router.push(item.to)"
        >
          <q-img
            v-if="index == 0"
            src="../../statics/Icons/farmacia.png"
            style="width: 5rem"
          />
          <q-img
            v-if="index == 1"
            src="../../statics/Icons/categorias.png"
            style="width: 5rem"
          />
          <q-img
            v-if="index == 2"
            src="../../statics/Icons/famaciaas.png"
            style="width: 5rem"
            
          />
          
          <q-card-section class="text-center title-font">
            <div>
              {{ item.name }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    
      <!--<div class="q-pa-md">
        <div class="row justify-center q-gutter-sm">
          <q-virtual-scroll
              :items="heavyList"
              virtual-scroll-horizontal
          >
            <q-intersection
              v-for="index in 1"
              :key="index"
              transition="scale"
              class="example-item"
            >
              <q-card class="q-ma-sm">
                <q-img
                
                  src="../../statics/frasco.jpg"
                  style="font-size: -5em;"
            
                />

                  <q-card-section>
                    <div class="text-h6">Estamina</div>
                    <div class="text-subtitle2">Casa do Povo</div>
                  </q-card-section>
                  <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              :to="`/utente/pagamentos`"
            />
          </q-card-actions>
              </q-card>
            </q-intersection>
            <q-intersection
              v-for="index in 1"
              :key="index"
              transition="scale"
              class="example-item"
            >
              <q-card class="q-ma-sm">
                <q-img
                  src="../../statics/medi.png"
                  style="font-size: 5em;"
                  
                />

                  <q-card-section>
                    <div class="text-h6">Paracetamol</div>
                    <div class="text-subtitle2">Orquidia</div>
                  </q-card-section>
                  <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              :to="`/utente/pagamentos`"
            />
          </q-card-actions>
              </q-card>
            </q-intersection>
            <q-intersection
              v-for="index in 1"
              :key="index"
              transition="scale"
              class="example-item"
            >
              <q-card class="q-ma-sm">
                <q-img
                  src="../../statics/para2.jpg"
                  
                  
                />

                  <q-card-section>
                    <div class="text-h6">Contrametazol</div>
                    <div class="text-subtitle2">Only One</div>
                  </q-card-section>
                  <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              :to="`/utente/pagamentos`"
            />
          </q-card-actions>
              </q-card>
            </q-intersection>
          </q-virtual-scroll>
        </div>
      </div>-->
    
  
  </q-page>
</template>

<script>
const maxSize = 10000
const heavyList = []

for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: 'Option ' + (i + 1),
    class: i % 2 === 0 ? 'q-pa-md self-center bg-grey-2 text-black' : 'q-pa-lg bg-black text-white'
  })
}

Object.freeze(heavyList)
export default {
  name: "PageIndex",
  data() {
    return {
      card:false,
      heavyList,
      inView: Array.apply(null, Array(50)).map(_ => false),
      search: '',
      services: [
        {
          name: "Todos Medicamentos",
          icon: "description",
          to: "utente/lista_medicamentos",
        },
        {
          name: "Categorias",
          icon: "description",
          to: "utente/categorias",
        },
        {
          name: "Farmácias",
          icon: "description",
          to: "utente/farmacias",
        },
      ],
      

    }
  },
  
    

}
</script>

<style lang="sass" scoped>
.example-item
  height: 290px
  width: 290px

.card-items
  
  &:hover
    
    transition: 1s
</style>
