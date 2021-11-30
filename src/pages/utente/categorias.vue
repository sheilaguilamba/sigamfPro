<template>
  <div class="q-pa-md">
    <q-breadcrumbs style="margin: 1em">
      <q-breadcrumbs-el icon="home" to="/secretaria" />
      <q-breadcrumbs-el label="Pedidos Pendentes" icon="widgets" />
    </q-breadcrumbs>

    <div class="q-pa-md">
      <q-table
        title="Categorias"
      :data="data"
      :columns="columns"
      row-key="name"
      selection="single"
      :selected.sync="selected"
      />
      
    
        <div v-if="selected.length > 0">
            <q-page-sticky position="bottom-right" :offset="[20, 20]">
      <div class="row q-gutter-x-md" >
        <q-btn
          rounded
          color="white"
          label="Detalhes"
          text-color="black"
          to="/utente/cate_medicamento"
        />
      </div>
    </q-page-sticky>
    </div>
    </div> 
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      alert: false,
      separator: "vertical",
      selected: [],
      columns: [
        {
          name: 'medicamento',
          required: true,
          label: 'Tipo',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'farmacias', align: 'center', label: 'Farmácias', field: 'farmacias', sortable: true },
        
      ],
      data: [
        {
          name: 'Antialérgicos',
          farmacias: 3,
          
        },
        {
          name: 'Dor, Febre e contusão',
          farmacias: 3,
      
        },
        {
          name: 'Fitness',
          farmacias: 3,
          
        },
        {
          name: 'Gravidez e amamentação',
          farmacias: 3,
          
        },
        {
          name: 'Gripes e Resfriados',
          farmacias: 3,
          
        },
      ],
    };
  },
  
};

</script>