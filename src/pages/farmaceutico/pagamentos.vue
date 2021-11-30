<template>
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="name"
      :visible-columns="visibleColumns"
    >
      <template v-slot:top>
        <img
          style="height: 50px; width: 50px"
          src="../../statics/logo1.png"
        >

        <q-space />

        <q-select
          v-model="visibleColumns"
          multiple
          outlined
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          options-cover
          style="min-width: 150px"
        />
      </template>

    </q-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visibleColumns: [ 'quantidade', 'produto', 'custo', 'custoTotal'],
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Código de Referência',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        
        { name: 'requerente', align: 'center', label: 'Requerente', field: 'requerente', sortable: true },
        { name: 'produto', align: 'center', label: 'Nome Produto', field: 'produto', sortable: true },
        { name: 'custo', align: 'center', label: 'Custo(MZN)', field: 'custo', sortable: true },
        { name: 'quantidade', align: 'center', label: 'Quantidade', field: 'quantidade', sortable: true },
         { name: 'custoTotal', align: 'center', label: 'Custo Toal(MZN)', field: 'custoTotal', sortable: true },
        
      ],
      data: [
        {
          
          name: '#001',
          requerente: 'Sheila JOb',
          produto: 'Paracetamol',
          custo: 159,
          quantidade: 6.0,
          custoTotal: 24,
          
        },
        {
          name: '#002',
          requerente: 'Sheila Job',
          produto: 'Contrametazol',
          custo: 159,
          quantidade: 6.0,
          custoTotal: 24,
        },
        {
          name: '#003',
          requerente: 'Job',
          produto: 'Cloroquina',
          custo: 159,
          quantidade: 6.0,
          custoTotal: 24,
        },
        {
          name: '#004',
          requerente: 'Job',
          produto: 'clorafenicol',
          custo: 159,
          quantidade: 6.0,
          custoTotal: 24,
        },
        {
          name: '#005',
          requerente: 'Guilamba',
          produto: 'Metronitazol',
          custo: 159,
          quantidade: 6.0,
          custoTotal: 24,
        },
        {
          name: '#006',
          requerente: 'Sheila Job',
          produto: 'Cadeita de Rodas',
          custo: 159,
          quantidade: 6.0,
          custoTotal: 24,
        },
        {
          name: '#007',
          requerente: 'shila',
          produto: 'Fio Dental',
          custo: 159,
          quantidade: 6.0,
          custoTotal: 24
        }
        
      ]
    }
  }
}
</script>