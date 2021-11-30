<template>
  <div class="q-pa-md">
    <q-table
      title="Estatisticas"
      :data="data"
      :columns="columns"
      color="primary"
      row-key="name"
    >
      <template v-slot:top-right>
        <q-btn
          color="teal"
          icon-right="archive"
          label="Exportar para Excell"
          no-caps
          @click="exportTable"
        />
      </template>
    </q-table>
  </div>
</template>

<script>
import { exportFile } from 'quasar'

function wrapCsvValue (val, formatFn) {
  let formatted = formatFn !== void 0
    ? formatFn(val)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}

export default {
  methods: {
    exportTable () {
      // naive encoding to csv format
      const content = [ this.columns.map(col => wrapCsvValue(col.label)) ].concat(
        this.data.map(row => this.columns.map(col => wrapCsvValue(
          typeof col.field === 'function'
            ? col.field(row)
            : row[col.field === void 0 ? col.name : col.field],
          col.format
        )).join(','))
      ).join('\r\n')

      const status = exportFile(
        'table-export.csv',
        content,
        'text/csv'
      )

      if (status !== true) {
        this.$q.notify({
          message: 'Browser denied file download...',
          color: 'negative',
          icon: 'warning'
        })
      }
    }
  },

  data () {
    return {
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Produtos',
          align: 'left',
          field: row => row.name,
          sortable: true
        },
        { name: 'custo', align: 'center', label: 'Custo (MZN)', field: 'custo' },
        { name: 'quantidade', align: 'center', label: 'Quantidade', field: 'quantidade' },
        { name: 'quantidadeResatante', align: 'center', label: 'Quantidade Restante', field: 'quantidadeRestante' },
        
      ],

      data: [
        {
          name: 'Acarboze',
          custo: 15,
          quantidade: 6.0,
          
          quantidadeRestante: 4.0
         
        },
        {
         name: 'Amicacina',
          custo: 19,
          quantidade: 6.0,
          
          quantidadeRestante: 4.0
        },
        {
          name: 'Benzocaina',
          custo: 159,
          quantidade: 6.0,
          
          quantidadeRestante: 34
        },
        {
         name: 'Betaina',
          custo: 159,
          quantidade: 6.0,
          
          quantidadeRestante: 0
        },
        {
          name: 'Cantaridina',
          custo: 159,
          quantidade: 6.0,
          
          quantidadeRestante: 21
        },
        {
          name: 'shapom de Banho',
          custo: 59,
          quantidade: 4,
          
          quantidadeRestante: 40
        },
        {
          name: 'Protetor solar',
          custo: 15,
          quantidade: 7,
          
          quantidadeRestante: 7
        },
        {
          name: 'Mascara',
          custo: 15,
          quantidade: 60,
          
          quantidadeRestante: 0
        },
        {
          name: 'Perfume Nivea',
          custo: 59,
          quantidade: 10,
          
          quantidadeRestante: 4
        },
        {
          name: 'Rede Mosquiteira',
          custo: 1590,
          quantidade: 6,
          
          quantidadeRestante: 0
        }
      ]
    }
  }
}
</script>