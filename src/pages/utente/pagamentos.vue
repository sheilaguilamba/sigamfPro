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
      <q-intersection
        v-for="index in 1"
        :key="index"
        transition="scale"
        class="item"
      >
        <q-card class="text-body1">
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
            <q-item-section>Contrametazol</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Preco:</q-item-section>
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

        
      </q-intersection>

      <q-intersection
        v-for="index in 1"
        :key="index"
        transition="scale"
        class="item"
      >
        <q-card class="text-body1">
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
            <q-item-section>Contrametazol</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Preco:</q-item-section>
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

        
      </q-intersection>

      <q-intersection
        v-for="index in 1"
        :key="index"
        transition="scale"
        class="item"
      >
        <q-card class="text-body1">
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
            <q-item-section>Contrametazol</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Preco:</q-item-section>
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

        
      </q-intersection>

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
                  color="green-9"
                  v-model="number"
                  label="Numero de telefone"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Introduza o teu número',
                  ]"
                />
                <div>
                  <q-btn
                    flat
                    rounded
                    label="Cancelar"
                    color="green-9"
                    v-close-popup
                  />
                  <q-btn rounded label="Pagar" type="submit" color="green-9" />
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
      paymentDialog: false
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