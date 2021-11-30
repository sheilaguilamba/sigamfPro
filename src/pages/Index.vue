<template>
  <q-page class="flex flex-center">
    <div 
      class="q-gutter-sm "
      :class="$q.screen.lt.md ? 'q-gutter-y-xs' : 'q-gutter-y-xl'"
    
    >
      <div class="row justify-center imagem">
        <img 
          src="../statics/logo2.png" 
        
        />
      </div>
      <div
        class="text-teal text-center title-font row justify-center sigamf"
        :class="$q.screen.lt.md ? 'text-h5' : 'text-h3'"
        style="line-height: 56px; text-transform: uppercase"
      >
        {{ $q.platform.is.mobile }}
        Sistema Integrado de Gestão Acesso Aos Medicamentos na Farmácia
      </div>
      <div class="row justify-center q-gutter-x-md">
        <q-btn
          rounded
          color="teal"
          :size="$q.screen.lt.md ? 'md' : 'xl'"
          class="q-px-xl q-py-xs entrar title-font"
          label="entrar"
          :to="'/account/login'"
        />
        
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data() {
    return {}
  },
  
  
}
</script>
<style scoped>
.sigamf {
  margin-top: 1em;
  font-weight: bold;
}
.imagem {
  /* margin-top: 15%; */
}
.entrar {
  /* margin-top: 16%; */
  background-color: rgb(22, 94, 49);
  color: white;
}
.entrar:hover {
  background-color: rgb(10, 14, 12);
}
</style>
