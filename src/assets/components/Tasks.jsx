import Button from "./Button"
import AddIcon from "../../assets/icons/add.svg?react"
import TrashIcon from "../../assets/icons/trash-2.svg?react"
import SunIcon from "../../assets/icons/sun.svg?react"
import CloudSun from "../../assets/icons/cloud-sun.svg?react"
import MoonIcon from "../../assets/icons/moon.svg?react"
import TasksSeparator from "./TasksSeparator.jsx"
import { useState } from "react"
import TASKS from "../constants/task.js"
import TaskItem from "./TaskItem.jsx"

const Tasks = () => {
  const [tasks] = useState(TASKS)
  const morningTasks = tasks.filter((task) => task.time === "morning")
  const afternoonTask = tasks.filter((task) => task.time === "afternoon")
  const eveningTask = tasks.filter((task) => task.time === "evening")

  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas tarefas</h2>
        </div>

        <div>
          <div className="item-center flex gap-3">
            <Button variant="ghost">
              Limpar Tarefas
              <TrashIcon />
            </Button>

            <Button>
              Nova Tarefa <AddIcon />
            </Button>
          </div>
        </div>
      </div>

      {/* Lista de tarefas */}
      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator tittle="Manhã" icon={<SunIcon />} />
          {/* MANHÃ */}
          {morningTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>

        <div className="my-6 space-y-3">
          <TasksSeparator tittle="Tarde" icon={<CloudSun />} />
          {/* TARDE */}
          {afternoonTask.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>

        <div className="space-y-3">
          <TasksSeparator tittle="Noite" icon={<MoonIcon />} />
          {/* NOITE */}
          {eveningTask.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Tasks
