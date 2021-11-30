<template>
  <q-page padding>

    <div>
   <q-breadcrumbs style="margin-top: 0em">
            <q-breadcrumbs-el icon="home" to="/utente" />
            <q-breadcrumbs-el
              label="Medicamentos"
              icon="widgets"
              to="/utente"
            />
            <q-breadcrumbs-el label="" icon="Message" />
    </q-breadcrumbs>

    <div style="max-width: 350px; margin-left: 50em">
     <div class="q-pb-sm">

      <q-input
        rounded 
        outlined 
        color="teal" 
        style="margin-top: -1em"
        v-model="search"
        debounce="300"
        placeholder="pracetamol, contrametazol, aftas"  
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
     </div>
    </div>
    </div>
    

    
    
    <div
      class="title-font text-h3 flex flex-center"
      style="margin-bottom: 1em"
    >
      Lista Medicamentos 
    </div>
    <div class="row justify-center q-gutter-sm">
      
      
        <q-card class="my-card">
          <div class="q-pa-md">
            <div class="text-purple q-pb-sm" style="font-size: 2em">
              <q-img
                  src="../../statics/me1.png"
                  style="font-size: 4.4em;"
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Amicacina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">4
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              @click="amic = true"
            />

            <q-dialog v-model="amic">
      <q-card class="my-card">
        <q-img
            src="../../statics/para6.1.jpg"
        />

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
             Amicacina
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place" />
              4 Farmácias:
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            25 MZN
          </div>
          <div class="text-caption text-grey">
            Casa do Povo, Orquidia & Farmacos
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Comprar" to="/utente/pagamentos"/>
          <q-btn v-close-popup flat color="primary" round icon="event" />
        </q-card-actions>
      </q-card>
    </q-dialog>
          </q-card-actions>
        </q-card>



        <q-card class="my-card">
          <div class="q-pa-md">
            <div class="text-purple q-pb-sm" style="font-size: 2em">
              <q-img
                  src="../../statics/para10.jpg"
                  style="font-size: 4.4em;"
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Betaina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">0
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              @click="beta = true"
            />
            <q-dialog v-model="beta">
      <q-card class="my-card">
        <q-img
            src="../../statics/para10.jpg"
        />

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
             Betaina
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place" />
              0 Farmácias:
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            25 MZN
          </div>
          <div class="text-caption text-grey">
            Casa do Povo, Orquidia & Farmacos
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Comprar" to="/utente/pagamentos"/>
          <q-btn v-close-popup flat color="primary" round icon="event" />
        </q-card-actions>
      </q-card>
    </q-dialog>
          </q-card-actions>
        </q-card>
      
        <q-card class="my-card">
          <div class="q-pa-md">
            <div class="text-purple q-pb-sm" style="font-size: 2em">
              <q-img
                  src="../../statics/para8.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Benzocaina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">18
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              @click="benz = true"
            />
            <q-dialog v-model="benz">
      <q-card class="my-card">
        <q-img
            src="../../statics/para8.jpg"
        />

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
             Benzocaina
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place" />
              18 Farmácias:
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            25 MZN
          </div>
          <div class="text-caption text-grey">
            Casa do Povo, Orquidia & Farmacos
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Comprar" to="/utente/pagamentos"/>
          <q-btn v-close-popup flat color="primary" round icon="event" />
        </q-card-actions>
      </q-card>
    </q-dialog>
          </q-card-actions>
        </q-card>
      
        <q-card class="my-card">
          <div class="q-pa-md">
            <div class="text-purple q-pb-sm" style="font-size: 2em">
              <q-img
                  src="../../statics/para9.jpg"
                  
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Cantaridina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">2
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              @click="canta = true"
            />
            <q-dialog v-model="canta">
      <q-card class="my-card">
        <q-img
            src="../../statics/para9.jpg"
        />

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
             Cantaridina
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place" />
              2 Farmácias:
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            25 MZN
          </div>
          <div class="text-caption text-grey">
            Casa do Povo, Orquidia & Farmacos
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Comprar" to="/utente/pagamentos"/>
          <q-btn v-close-popup flat color="primary" round icon="event" />
        </q-card-actions>
      </q-card>
    </q-dialog>
          </q-card-actions>
        </q-card>
      
        <q-card class="my-card">
          <div class="q-pa-md">
            <div class="text-purple q-pb-sm" style="font-size: 2em">
              <q-img
                  src="../../statics/para6.1.jpg"
                  style="font-size: 4.4em;"
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Amicacina
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">4
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              @click="amic = true"
            />

            <q-dialog v-model="amic">
      <q-card class="my-card">
        <q-img
            src="../../statics/para6.1.jpg"
        />

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
             Amicacina
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place" />
              4 Farmácias:
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            25 MZN
          </div>
          <div class="text-caption text-grey">
            Casa do Povo, Orquidia & Farmacos
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Comprar" to="/utente/pagamentos"/>
          <q-btn v-close-popup flat color="primary" round icon="event" />
        </q-card-actions>
      </q-card>
    </q-dialog>
          </q-card-actions>
        </q-card>
      

        <q-card class="my-card">
          <div class="q-pa-md">
            <div class="text-purple q-pb-sm" style="font-size: 2em">
              <q-img
                  src="../../statics/para3.1.jpg"
                  style="font-size: 4.4em;"
                  
                />
      
            </div>
          </div>
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Acarboze
            </q-item-section>
            
          </q-item>
          
          <q-item>
            <q-item-section avatar class="text-bold">Farmácias:</q-item-section>
            <q-item-section side class="text-black">3
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver mais"
              @click="acar = true"
            />
            <q-dialog v-model="acar">
      <q-card class="my-card">
        <q-img
            src="../../statics/para3.1.jpg"
        />

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
             Acarboze
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place" />
              3 Farmácias:
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            25 MZN
          </div>
          <div class="text-caption text-grey">
            Casa do Povo, Orquidia & Farmacos
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Comprar" to="/utente/pagamentos"/>
          <q-btn v-close-popup flat color="primary" round icon="event" />
        </q-card-actions>
      </q-card>
    </q-dialog>
          </q-card-actions>
        </q-card>


      

    </div>
  </q-page>
    
</template>

<script>


export default {
  data(){
    return{
      card: false,
      contra: false,
      acar: false,
      amic: false,
      beta: false,
      benz: false,
      canta: false,
    }
  }
}  
   
</script>

<style lang="sass" scoped>

.my-card
  width: 100%
  max-width: 250px
</style>