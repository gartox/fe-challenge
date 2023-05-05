import { THistoricDataItem } from '@/types';
import { getFormatedDateMonthDay } from '@/utils/getFormatedDateMonthDay';
import styles from './LineChart.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,

} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const options = {
  maintainAspectRatio: false,

  radius: 0,
  scales: {
    xAxis: {
      ticks: {
      },
      grid: {
        color: "white",
        lineWidth: .8
      }
    },
    yAxis: {
      position: 'right',
      ticks: {
        color: "white",

      },
      grid: {
        color: "white",
        lineWidth: .2
      }

    }
  },
  plugins: {
    legend: {
      display: false,
    },
  }
}

export const LineChart = ({
  historicItems,
}: {
  historicItems: THistoricDataItem[];
}) => {


  const data = {
    labels: historicItems.map(item => getFormatedDateMonthDay(item.date)).reverse(),
    datasets: [{
      data: historicItems.map(item => item.close).reverse(),
      backgroundColor: "black",
      borderColor: "#7c650f",
      yAxisID: 'yAxis',
      xAxisID: 'xAxis'
    }]

  }


  return <section className={styles.main}><Line data={data} options={options} /></section>
}