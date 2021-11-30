<template>
  <div class="q-pa-sm">
    <q-breadcrumbs style="margin: 1em">
      <q-breadcrumbs-el icon="home" to="/utente" />
      <q-breadcrumbs-el label="Farmácias" icon="widgets" />
    </q-breadcrumbs>
    <div
      class="title-font flex flex-center"
      :class="$q.screen.lt.md ? 'text-h5' : 'text-h3'"
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
            <q-item-section avatar class="text-bold">Medicamento</q-item-section>
            <q-item-section>Amicacina</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Quantidade</q-item-section>
            <q-item-section>9</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Preço:</q-item-section>
            <q-item-section side class="text-black">25 MZN
            </q-item-section>
            
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
          <q-item>
            <q-item-section avatar class="text-bold"
              >Farmácia:</q-item-section
            >
            <q-item-section
              >Only One
            </q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Medicamento</q-item-section>
            <q-item-section>Amicacina</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Quantidade</q-item-section>
            <q-item-section>30</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Preço:</q-item-section>
            <q-item-section side class="text-black">15 MZN
            </q-item-section>
            
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
          <q-item>
            <q-item-section avatar class="text-bold"
              >Farmácia:</q-item-section
            >
            <q-item-section
              >Orquidia
            </q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Medicamento</q-item-section>
            <q-item-section>Amicacina</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Quantidade</q-item-section>
            <q-item-section>3</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Preço:</q-item-section>
            <q-item-section side class="text-black">50 MZN
            </q-item-section>
            
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
  </div>
    
</template>

<script>
import axios from "axios";
//import Pagamentos from"components/payment/Pagamentos.vue"; 
import {  mapActions } from "vuex";
export default {
  data(){
    return {
      paymentDialog: false,
      number: '',
      quantidade: '',
    };
  },
  
  computed: {
    listEl() {
      return this.$refs.myList ? this.$refs.myList.$el : null;
    },
    //...mapActions("geral", ["pagamento"]),
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