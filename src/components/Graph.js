import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import "./graph.css"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
    labels: ['6/30/2024-7/6/2024', '7/7/2024-7/13/2024', '7/21/2024-7/27/2024'],
    datasets: [
        {
            label: 'Orders',
            data: [1.6, 0.8, 0.4],
            fill: false,
            borderColor: 'orange',
            tension: 0.1,
        },
        {
            label: 'Sales',
            data: [1.2, 0.8, 0.4],
            fill: false,
            borderColor: 'blue',
            tension: 0.1,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Sales vs Orders',
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                callback: function (value) {
                    return value + 'k';
                },
            },
        },
    },
};

const Graph = () => {
    return (
        <div id='main' className='main'>
            <Line data={data} options={options} />
        </div>
    );
};

export default Graph;
