<template>
  <div class="q-pb-sm">
    <q-breadcrumbs style="margin: 1em">
      <q-breadcrumbs-el icon="home" to="/utente" />
      <q-breadcrumbs-el label="Farmácias" icon="widgets" />
    </q-breadcrumbs>
    <div
      class="flex flex-center"
      :class="$q.screen.lt.md ? 'text-h5' : 'text-h3'"
    >
      Farmácias & Medicamentos 
    </div>
    <b>
    </b>
    <div padding class=" flex flex-center q-gutter-md">
      
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
            <q-item-section>Acarbonze</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Quantidade</q-item-section>
            <q-item-section side class="text-black">20</q-item-section>
            
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
              label="Ver"
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
            color="teal"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
             Acarboze
            </div>
            
          </div>

          
        </q-card-section>


        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="teal" label="Comprar" @click="openPagamentoDialog()"/>
          <q-btn v-close-popup flat color="teal" label="Cancelar" to="/utente/medicamento_farmacia" />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
            <q-item-section>Contrametazol</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Quantidade</q-item-section>
            <q-item-section side class="text-black">6</q-item-section>
            
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
              label="Ver"
              @click="contra= true"
            />
            <q-dialog v-model="contra">
      <q-card class="my-card">
        <q-img
            src="../../statics/10.png"
        />

        <q-card-section>
          <q-btn
            fab
            color="teal"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
             Contrametazol
            </div>
            
          </div>

          
        </q-card-section>

        

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="teal" label="Comprar" @click="openPagamentoDialog()"/>
          <q-btn v-close-popup flat color="teal" label="Cancelar" to="/utente/medicamento_farmacia" />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
            <q-item-section>Quinina</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Quantidade</q-item-section>
            <q-item-section side class="text-black">60</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Preço:</q-item-section>
            <q-item-section side class="text-black">100 MZN
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver"
              @click="qui = true"
            />

            <q-dialog v-model="qui">
      <q-card class="my-card">
        <q-img
            src="../../statics/2.jpg"
        />

        <q-card-section>
          <q-btn
            fab
            color="teal"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
             Quinina
            </div>
            
          </div>

          
        </q-card-section>

        <q-card-section class="q-pt-none">
          
          
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="teal" label="Comprar" @click="openPagamentoDialog()"/>
          <q-btn v-close-popup flat color="teal" label="Cancelar" to="/utente/medicamento_farmacia" />
        </q-card-actions>
      </q-card>
    </q-dialog>
          </q-card-actions>
        </q-card>


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
            <q-item-section>Ofloxacina</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Quantidade</q-item-section>
            <q-item-section side class="text-black">20</q-item-section>
            
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
              label="Ver"
              @click="oft = true"
            />
            <q-dialog v-model="oft">
              
      <q-card class="my-card">
        <q-img
            src="../../statics/3.jpg"
        />

        <q-card-section>
          <q-btn
            fab
            color="teal"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
             Ofloxacina
            </div>
            
          </div>

         
        </q-card-section>


        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="teal" label="Comprar" @click="openPagamentoDialog()"/>
          <q-btn v-close-popup flat color="teal" label="Cancelar" to="/utente/medicamento_farmacia" />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
            <q-item-section side class="text-black">4</q-item-section>
            
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
              label="Ver"
              @click="amic= true"
            />
            <q-dialog v-model="amic">
      <q-card class="my-card">
        <q-img
            src="../../statics/para6.1.jpg"
        />

        <q-card-section>
          <q-btn
            fab
            color="teal"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
             Amicacina
            </div>
            
          </div>

          
        </q-card-section>

        

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="teal" label="Comprar" @click="openPagamentoDialog()"/>
          <q-btn v-close-popup flat color="teal" label="Cancelar" to="/utente/medicamento_farmacia" />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
            <q-item-section>Cantaridina</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Quantidade</q-item-section>
            <q-item-section side class="text-black">5</q-item-section>
            
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
              label="Ver"
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
            color="teal"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
             Cantaridina
            </div>
            
          </div>

          
        </q-card-section>

        

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="teal" label="Comprar" @click="openPagamentoDialog()"/>
          <q-btn v-close-popup flat color="teal" label="Cancelar" to="/utente/medicamento_farmacia" />
        </q-card-actions>
      </q-card>
    </q-dialog>
          </q-card-actions>
        </q-card>


        <q-card class="my-card">
          <q-item>
            <q-item-section avatar class="text-bold"
              >Farmácia:</q-item-section
            >
            <q-item-section
              >Only one
            </q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Medicamento</q-item-section>
            <q-item-section>Dopamina</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Quantidade</q-item-section>
            <q-item-section side class="text-black">5</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Preço:</q-item-section>
            <q-item-section side class="text-black">500 MZN
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver"
              @click="dop = true"
            />

            <q-dialog v-model="dop">
      <q-card class="my-card">
        <q-img
            src="../../statics/5.jpg"
        />

        <q-card-section>
          <q-btn
            fab
            color="teal"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
             Dopamina
            </div>
            
          </div>

          
        </q-card-section>

        

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="teal" label="Comprar" @click="openPagamentoDialog()"/>
          <q-btn v-close-popup flat color="teal" label="Cancelar" to="/utente/medicamento_farmacia" />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
            <q-item-section>Etambutol</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Quantidade</q-item-section>
            <q-item-section side class="text-black">4</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Preço:</q-item-section>
            <q-item-section side class="text-black">5 MZN
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver"
              @click="eta = true"
            />

            <q-dialog v-model="eta">
      <q-card class="my-card">
        <q-img
            src="../../statics/6.jpg"
        />

        <q-card-section>
          <q-btn
            fab
            color="teal"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
             Etambutol
            </div>
            
          </div>

          
        </q-card-section>

        

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="teal" label="Comprar" @click="openPagamentoDialog()"/>
          <q-btn v-close-popup flat color="teal" label="Cancelar" to="/utente/medicamento_farmacia" />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
            <q-item-section>Etoposida</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Quantidade</q-item-section>
            <q-item-section side class="text-black">10</q-item-section>
            
          </q-item>
          <q-item>
            <q-item-section avatar class="text-bold">Preço:</q-item-section>
            <q-item-section side class="text-black">35 MZN
            </q-item-section>
            
          </q-item>
          <q-card-actions align="right">
            <q-btn
              rounded
              color="white"
              text-color="black"
              label="Ver"
              @click="eto = true"
            />

            <q-dialog v-model="eto">
      <q-card class="my-card">
        <q-img
            src="../../statics/7.jpg"
        />

        <q-card-section>
          <q-btn
            fab
            color="teal"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
             Etoposida
            </div>
            
          </div>

          
        </q-card-section>

        

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="teal" label="Comprar" @click="openPagamentoDialog()"/>
          <q-btn v-close-popup flat color="teal" label="Cancelar" to="/utente/medicamento_farmacia" />
        </q-card-actions>
      </q-card>
    </q-dialog>
          </q-card-actions>
        </q-card>

        
      
      <q-dialog v-model="paymentDialog">
        <q-card style="width: 80vw">
          <q-card-section>
            <div class="text-h6">Efetuar pagamento.</div>
          </q-card-section>
          <q-card-section>
            <div>
              <q-form  class="q-pb-sm">
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
  </div>
    
</template>

<script>
import axios from "axios";
import Pagamentos from"components/payment/Pagamentos.vue"; 
import {  mapActions } from "vuex";
export default {
  data(){
    return {
      number: '',
      quantidade:'',
      paymentDialog: false,
      acar: false,
      amic: false,
      canta: false,
      oft: false,
      contra: false,
      qui: false,
      dop: false,
      eta: false,
      eto: false,
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