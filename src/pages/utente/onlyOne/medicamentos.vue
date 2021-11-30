<template>
  <q-page padding>

    <div>
   <q-breadcrumbs style="margin-top: 0em">
            <q-breadcrumbs-el icon="home" to="/utente" />
            <q-breadcrumbs-el
              label="Medicamentos"
              icon="widgets"
              to="/utente/farmacias"
            />
            <q-breadcrumbs-el label="" icon="Message" />
    </q-breadcrumbs>

    <div >
     <div class="q-pb-sm" align="right">

      <q-input
        rounded 
        outlined 
        
        color="teal" 
        style=" width: 30vh"
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
      class="title-font flex flex-center"
      :class="$q.screen.lt.md ? 'text-h5' : 'text-h3'"
    >
      Lista Medicamentos 
    </div>
    <div class="flex flex-center q-gutter-md">
      
      
        <q-card class="my-card">
          
              <q-img
                  src="../../../statics/me1.png"
                  style="font-size: 4.4em;"
                />
      
            
          
          <q-item>
            <q-item-section avatar class="text-bold">Medicamento:</q-item-section>
            <q-item-section>Amicacina</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Quantidade:</q-item-section>
            <q-item-section>25</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Preço:</q-item-section>
            <q-item-section>25 MZN</q-item-section>
          </q-item>
          
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Comprar"
              @click="openPagamentoDialog()"
            />

            
          </q-card-actions>
        
        </q-card>


      
        <q-card class="my-card">
          <div class="q-pa-md">
            <div class="text-purple q-gutter-md" style="font-size: 2em">
              <q-img
                  src="../../../statics/para10.jpg"
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
            <q-item-section avatar class="text-bold">Quantidade:</q-item-section>
            <q-item-section>9</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Preço:</q-item-section>
            <q-item-section>50 MZN</q-item-section>
          </q-item>
          
          
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Comprar"
              @click="openPagamentoDialog()"
            />
            
          </q-card-actions>
        </q-card>
      
        <q-card class="my-card">
          <div class="q-pa-md">
            <div class="text-purple q-gutter-md" style="font-size: 2em">
              <q-img
                  src="../../../statics/para8.jpg"
                  
                  
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
            <q-item-section avatar class="text-bold">Quantidade:</q-item-section>
            <q-item-section>2</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Preço:</q-item-section>
            <q-item-section>250 MZN</q-item-section>
          </q-item>
          
          
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Comprar"
              @click="openPagamentoDialog()"
            />
            
          </q-card-actions>
        </q-card>
      
        <q-card class="my-card">
          <div class="q-pa-md">
            <div class="text-purple q-gutter-md" style="font-size: 2em">
              <q-img
                  src="../../../statics/para9.jpg"
                  
                  
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
            <q-item-section avatar class="text-bold">Quantidade:</q-item-section>
            <q-item-section>12</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Preço:</q-item-section>
            <q-item-section>52 MZN</q-item-section>
          </q-item>
          
          
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Comprar"
              @click="canta = true"
            />
            
          </q-card-actions>
        </q-card>
      
        <q-card class="my-card">
          <div class="q-pa-md">
            <div class="text-purple q-gutter-md" style="font-size: 2em">
              <q-img
                  src="../../../statics/para6.1.jpg"
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
            <q-item-section avatar class="text-bold">Quantidade:</q-item-section>
            <q-item-section>10</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Preço:</q-item-section>
            <q-item-section>44 MZN</q-item-section>
          </q-item>
          
          
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Comprar"
              @click="openPagamentoDialog()"
            />

            
          </q-card-actions>
        </q-card>
      
        <q-card class="my-card">
          
              <q-img
                  src="../../../statics/para3.1.jpg"
                  style="font-size: 4.4em;"
                  
                />
      
          <q-item>
            <q-item-section avatar class="text-bold"
              >Medicamento:</q-item-section
            >
            <q-item-section
              >Acarboze
            </q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Quantidade:</q-item-section>
            <q-item-section>44</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Preço:</q-item-section>
            <q-item-section>98 MZN</q-item-section>
          </q-item>
          
          
            
          
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Comprar"
              @click="openPagamentoDialog()"
            />
          </q-card-actions>
        </q-card>

      
      <q-dialog v-model="paymentDialog">
        <q-card style="width: 80vw">
          <q-card-section>
            <div class="text-h6">Efetuar pagamento.</div>
          </q-card-section>
          <q-card-section>
            <div>
              <q-form  class="q-gutter-md">
                <q-input
                  outlined
                  rounded
                  color="teal"
                  v-model="number"
                  label="Numero de telefone"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Introduza o teu número',
                  ]"
                />

                <div class="row">
                <q-input
                  rounded
                  dense
                  outlined
                  style="width: 30vh"
                  color="black"
                  type="number"
                  v-model="quantidade"
                  label=" Quantidade* "
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Adiciona a Quantidade',
                  ]"
                />
    
              </div>
                <div>
                  <q-btn
                    flat
                    rounded
                    label="Cancelar"
                    color="teal"
                    v-close-popup
                  />
                  <q-btn rounded label="Pagar" type="submit" color="teal" />
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


export default {
  data(){
    return{
      quantidade: '',
      number: '',
      paymentDialog: false,
      card: false,
      contra: false,
      acar: false,
      amic: false,
      beta: false,
      benz: false,
      canta: false,
      search: '',
    }
  },
  methods: {
    
    openPagamentoDialog(){
      
      this.paymentDialog= true

    },
  }
}  
   
</script>

<style lang="sass" scoped>

.my-card
  width: 100%
  max-width: 250px
</style>