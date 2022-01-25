// eslint-disable-next-line no-unused-vars
const doughnutData = {
  title: 'Comparativo do início do pré natal', // Título do gráfico
  labels: ['Hemograma', 'ABO'], // Labels de cada dado do gráfico
  datasets: [
    {
      data: [84, 87], // Dados do gráfico
      backgroundColor: [ // Cores que vão ficar no gráfico
        '#C289CC',
        '#8D4F99'
      ],
      barPercentage: 0.05
    }
  ],
  doughnutInner: { // DADOS QUE FICAM DENTRO DO DONUT
    number: '50.000',
    label: 'Total de Gestantes'
  },
  legends: [ // DADOS PARA A LEGENDA A DIREITA DO GRÁFICO
    {
      color: '#C289CC',
      percent: '84%',
      referenceTo: 'até 12',
      referenceNumber: '21.000'
    },
    {
      color: '#8D4F99',
      percent: '87%',
      referenceTo: 'de 13 até 25',
      referenceNumber: '13.000'
    }
  ]

}
