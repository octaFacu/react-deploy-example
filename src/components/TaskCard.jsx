import { TaskContext } from '../context/TaskContext'
//Importo {useContext} para utilizar la informacion de algun contexto
import { useContext } from "react";

export function TaskCard({task}) {

    const {deleteTask} = useContext(TaskContext)

  return (
      <div className='bg-gray-800 text-white p-4 rounded-md'>
        <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
        <p className='text-gray-500 text-sm'>{task.description}</p>
        {/* SI ES ARROW FUNCTION NO SE EJECUTA A LA CARGA DEL DOCUMENTO */}
        <button 
        className='bg-red-500 px-2 p-1 rounded-md mt-4 hover:bg-red-400'
        onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
      </div>
  );
}
