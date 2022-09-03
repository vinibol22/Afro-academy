import "./styles/global.scss";
import styles from './App.module.scss'
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Plus } from 'phosphor-react';
function App() {
  return (
    <>
      <Header />

        <main className={styles.container}>
        <form className={styles.addTaskForm}>
        <input type="text" placeholder="Insira uma nova atividade" />
          <button><Plus /></button>  
        </form>
        
        <h3 className={styles.status}>Tarefas concluídas <span>3 de 6</span></h3>
        <ul className={styles.taskList}>
      
        <Card content = "Tarefa 1" />
        <Card content = "Tarefa 2"/>
        <Card content = "Tarefa 3"/>

        </ul>
     
      </main>
    
    </>
  );
}

export default App;
