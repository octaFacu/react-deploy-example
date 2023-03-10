import { createContext, useState, useEffect } from "react"
import {tasks as data} from '../data/tasks'

//Luego de importar hay que ejecutar la funcion, retorna un objeto
//Este es el nombre del contexto
export const TaskContext = createContext()

//Este es el componente que va a englobar a todos
export function TaskContextProvider(props) {

    const [tasks, setTask] = useState([])

    useEffect(() => {
        setTask(data)
    }, [])

    function createTask(task) {
        setTask([...tasks, {
          title: task.title,
          id: tasks.length,
          description: task.description
        }])
      }
    
      function deleteTask(taskId){
        console.log(`CAN YOU FEEL MY HEART ${taskId}`);
        setTask(tasks.filter(task => task.id !== taskId)) 
      }

  return (
    <>
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    </>
  )
}
