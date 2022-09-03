import { format } from 'date-fns'
import styles from './Data.module.scss'
export function Data() {
      
  return (
    <div className={styles.date}>
      {format(new Date(2014, 1, 11), 'MM/dd/yyyy')}
      </div>
 
    );

}