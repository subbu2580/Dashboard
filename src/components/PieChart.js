import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './PieChart.css';

function PieChart() {
  const [chartData, setChartData] = useState({
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        label: 'Sales',
        data: [44.2, 55.8],
        backgroundColor: [
          'rgba(255, 0, 0, 0.2)',  
          'rgba(0, 128, 0, 0.2)'   
        ],
        borderColor: [
          'rgba(255, 0, 0, 1)',    
          'rgba(0, 128, 0, 1)'     
        ],
        borderWidth: 1,
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        position: 'bottom', 
      },
      datalabels: {
        formatter: (value, context) => {
          const dataset = context.chart.data.datasets[0];
          const total = dataset.data.reduce((acc, data) => acc + data, 0);
          const percentage = ((value / total) * 100).toFixed(1);
          return `${percentage}%`;
        },
        color: '#fff', 
        font: {
          weight: 'bold'
        }
      }
    },
  };

  return (
    <div className="chart-container">
      <h3>Portion of Sales</h3>
      <Pie data={chartData} options={options} plugins={[ChartDataLabels]} />
    </div>
  );
}

export default PieChart;

