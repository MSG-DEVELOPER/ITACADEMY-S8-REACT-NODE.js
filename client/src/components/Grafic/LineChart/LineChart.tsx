import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

function LineChart() {
  const [labels, setLabels] = useState<string[]>([]);
  const [altas, setAltas] = useState<number[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/stats')
      .then((res) => res.json())
      .then((data) => {
        const dias = data.map((d: any) => d.dia);
        const altasPorDia = data.map((d: any) => d.nuevasAltas);
        setLabels(dias);
        setAltas(altasPorDia);
      })
      .catch((err) => console.error('Error al obtener stats:', err));
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: 'Nuevas altas',
        data: altas,
        borderColor: '#10b981',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
    },
  };

  return <Line data={data} options={options} />;
}

export default LineChart;
