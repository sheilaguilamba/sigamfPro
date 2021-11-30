<template>
  <div id="app">
  <q-page padding>

    <div>
   <q-breadcrumbs class="text-teal" style="margin-top: 0em">
            <q-breadcrumbs-el icon="home" to="/utente" />
            <q-breadcrumbs-el
              label="Medicamentos"
              icon="widgets"
              to="/utente/farmacias"
            />
            <q-breadcrumbs-el label="" icon="Message" />
    </q-breadcrumbs>

    

  
    <div class="search-wrapper">
     <div class="q-pb-sm" align="right">

      <q-input
        rounded 
        outlined 
        type="text"
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
                  src="../../../statics/3.jpg"
                  style="font-size: 4.4em;"
                />
      
            
          
          <q-item>
            <q-item-section avatar class="text-bold">Medicamento:</q-item-section>
            <q-item-section>Amicacina</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Quantidade:</q-item-section>
            <q-item-section>9</q-item-section>
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
            <q-item-section>7</q-item-section>
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
            <q-item-section>14</q-item-section>
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
            <q-item-section>8</q-item-section>
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
            <q-item-section>6</q-item-section>
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
                  src="../../../statics/4.jpg"
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
            <q-item-section>23</q-item-section>
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
  </div>  
</template>

<script>


export default {
  el: '#app',
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
      myList: [
        'Benzocaina'
      ],
    }
  },
   computed: {
    filteredList() {
      return this.myList.filter(post => {
        return this.$refs.myList ? this.$refs.myList.$el : null;
      })
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

div#app 
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
 
  .search-wrapper 
    position: relative
  
    .label 
      position: absolute
      font-size: 12px
      color: rgba(0,0,0,.50)
      top: 8px
      left: 12px
      z-index: -1
      transition: .15s all ease-in-out
    
    .input 
      padding: 4px 12px
      color: rgba(0,0,0,.70)
      border: 1px solid rgba(0,0,0,.12)
      transition: .15s all ease-in-out
      background: white
    
      .focus 
        outline: none
        transform: scale(1.05)
      
        .label  
          font-size: 10px
          transform: translateY(-24px) translateX(-12px)
        
      
      .webkit-input-placeholder 
          font-size: 12px
          color: rgba(0,0,0,.50)
          font-weight: 100
      

  .wrapper 
    display: flex
    max-width: 444px
    flex-wrap: wrap
    padding-top: 12px
  

  
    .hover 
      transform: scale(1.1)
    
    
      .img 
        height: 100px
      
      .small 
        font-size: 10px
        padding: 4px
      

  .box 
    width: 100px
    height: 100px
    border: 1px solid rgba(0,0,0,.12)
  
</style>