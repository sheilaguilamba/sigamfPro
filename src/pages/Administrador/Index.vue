<template>
  <q-page padding class="row flex flex-center" style="margin-left: 30rem">

    <div  style="width: 90vw">
      <div
        class="col-12 q-pa-lg title-font text-h5"
        v-for="(item, index) in services"
        :key="index"
      >
        <q-card
          class=" row  cursor-pointer text-center card-items q-pt-md"
          style="height: 11rem; width: 20rem"
          bordered
          flat
          clickable
          v-ripple
          @click="$router.push(item.to)"
        >
          <q-img
            v-if="index == 0"
            src="../../statics/Icons/cadastrar.png"
            style="width: 5rem; margin-left: 7rem"
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
          name: "Cadastro das Farmácias",
          icon: "",
          to: "/administrador/cadastro",
          
        },
        
      ],
    }
  },
  
}


</script>