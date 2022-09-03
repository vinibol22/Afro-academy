import { Trash,Pencil } from 'phosphor-react';
import { Check } from './Check';
import {Data} from './Data'
import styles from './Card.module.scss'
export function Card(props,Inputt) {
      
  return (
    <div className={styles.taskList}>
      <li>
        <Check />
    <p>
        {props.content}
        </p>
    <button className={styles.pencil}><Pencil /></button>
        <button className={styles.trash}><Trash /> </button>
        <Data />
        
      </li>  

      </div>
      
  );
}

