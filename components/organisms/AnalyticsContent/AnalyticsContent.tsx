import { CurrencyPairInfo } from '@/components/molecules/CurrencyPairInfo';
import styles from './AnalyticsContent.module.css';
import { LineChart } from '@/components/molecules/LineChart';
import { HistoricPricesTable } from '../HistoricPricesTable';
import { DailyTrendTable } from '../DailyTrendTable';
import { useGetPairHistoricData } from '@/hooks/useGetPairHistoricData';
import { useRouter } from 'next/router';
export const AnalyticsContent = () => {

  const {
    query: { id },
  } = useRouter();


  const historicData = useGetPairHistoricData(id as string)

  return (
    <div className={styles.main}>
      <CurrencyPairInfo />
      <div className={styles.tables}>
        <HistoricPricesTable historicItems={historicData.historicItems} />
        <DailyTrendTable historicItems={historicData.historicItems} />
      </div>
      <LineChart historicItems={historicData.historicItems} />
    </div>
  )
}