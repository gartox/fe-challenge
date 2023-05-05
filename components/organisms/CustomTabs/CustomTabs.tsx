
import styles from "./CustomTabs.module.css";
import { AnalyticsContent } from "../AnalyticsContent";
import { TPair } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
export const CustomTabs = ({ pairs }: { pairs: TPair[] }) => {

  const {
    query: { id },
  } = useRouter();

  return (
    <div>
      <div className={styles.tabList}>
        {pairs.map((pair) => {
          return (
            <Link
              key={pair.id}
              href={`/pairs/${pair.id}`}
            >
              <button
                className={`${styles.tab} ${pair.id === id ? styles.selected : ""}`}
              >
                {pair.label}
              </button>
            </Link>
          );
        })}
      </div>
      <AnalyticsContent />
    </div>
  );
};
