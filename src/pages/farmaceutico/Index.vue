<template>
  <q-page padding class="flex flex-center">
    <!-- <q-btn
      color="white"
      text-color="black"
      label="Send SMS"
      @click="sendSMS()"
    /> -->

    <div class="row" style="width: 90vw">
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
            src="../../statics/Icons/pagamentos.png"
            style="width: 5rem"
          />
          <q-img
            v-if="index == 2"
            src="../../statics/Icons/estatistica.png"
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
  </q-page>
</template>

<script>

export default {
  name: "PageIndex",
  data() {
    return {
      services: [
        {
          name: "Medicamentos",
          icon: "Description",
          to: "/farmaceutico/medicamentos",
        },
        {
          name: "Pagamentos",
          icon: "",
          to: "/farmaceutico/Lista-Pagamentos",
        },
        {
          name: "Estatisticas",
          icon: "",
          to: "/farmaceutico/estatistica",
        },
      ],
    }
  },
  
}


</script>