import { ChartConfiguration, ChartDataset } from "chart.js";

const dataSet: ChartDataset[] = [{
  label: '# of Likes',
  data: [12, 19, 3, 5, 2, 3],

  borderRadius: {
    topLeft: 2,
    topRight: 2,
    bottomLeft: 2,
    bottomRight: 2,
  },

  backgroundColor: [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
  ],

  borderColor: [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
  ],
  barThickness: 20,
  borderWidth: 0,
  spanGaps: false
}];

const BarChartData: ChartConfiguration =  {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: dataSet,
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        beginAtZero: true,
      }
    }
  }
}

export {
  BarChartData
}
