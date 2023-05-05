import styles from './Tile.module.css';

export const Tile = ({title, children}:{title:string; children: React.ReactNode}) =>{
  return(<section className={styles.main}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.body}>
      {children}
    </div>

  </section>)
}