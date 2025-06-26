import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarChar() {
  const [labels, setLabels] = useState<string[]>([]);
  const [dataPoints, setDataPoints] = useState<number[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/stats')
      .then((res) => res.json())
      .then((data) => {
        const dias = data.map((d: any) => d.dia);
        const usuarios = data.map((d: any) => d.usuariosActivos);
        setLabels(dias);
        setDataPoints(usuarios);
      })
      .catch((err) => console.error('Error al obtener stats:', err));
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: 'Usuarios activos',
        data: dataPoints,
        backgroundColor: '#3b82f6',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
    },
  };

  return <Bar data={data} options={options} />;
}

export default BarChar;
