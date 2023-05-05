import { useGetPairRealTimePrice } from '@/hooks/useGetPairRealTimePrice';
import styles from './CurrencyPairInfo.module.css';
import { useRouter } from 'next/router';
import { useIsAnimated } from '@/hooks/useIsAnimated';

export const CurrencyPairInfo = () => {
  const {
    query: { id },
  } = useRouter();

  const { lastUpdate, low, high, lastPrice } = useGetPairRealTimePrice(id as string);

  const isAnimated = useIsAnimated(lastUpdate);


  return (
    <section className={styles.main}>
      <div className={`${styles.info} ${styles.status} ${isAnimated ? styles.flicker : ""}`}>
        <div className={styles.title}>
          Currency Pair
        </div>
        <div className={styles.ticker}>
          {id}
        </div>
        <span className={styles.line}></span>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          Current Exchange-Rate Value
        </div>
        <div className={styles.ticker}>
          {lastPrice.toFixed(4)}
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          Highest Exchange-Rate Today
        </div>
        <div className={styles.ticker}>
          {high.toFixed(4)}
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          Lowest Exchange-Rate Today
        </div>
        <div className={styles.ticker}>
          {low.toFixed(4)}
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          Last Update (UTC)
        </div>
        <div className={styles.ticker}>
          {lastUpdate}
        </div>
      </div>

    </section>
  )
}