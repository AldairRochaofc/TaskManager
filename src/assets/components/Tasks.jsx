import Button from "./Button"
import AddIcon from "../../assets/icons/add.svg?react"
import TrashIcon from "../../assets/icons/trash-2.svg?react"
import SunIcon from "../../assets/icons/sun.svg?react"
import CloudSun from "../../assets/icons/cloud-sun.svg?react"
import MoonIcon from "../../assets/icons/moon.svg?react"

const Tasks = () => {
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
              Nova Tarefa
              <AddIcon />
            </Button>
          </div>
        </div>
      </div>

      {/* Lista de tarefas */}
      <div className="rounded-xl bg-white p-6">
        {/* MANHÃ */}
        <div className="space-y-3">
          <div className="flex gap-2 border-b-2 border-solid border-[#F4F4F5] pb-1 text-center">
            <SunIcon />
            <p className="text-sm text-[#9A9C9F]">Manhã</p>
          </div>
        </div>

        <div className="my-6 space-y-3">
          <div className="flex gap-2 border-b-2 border-solid border-[#F4F4F5] pb-1 text-center">
            <CloudSun />
            <p className="text-sm text-[#9A9C9F]">Tarde</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex gap-2 border-b-2 border-solid border-[#F4F4F5] pb-1 text-center">
            <MoonIcon />
            <p className="text-sm text-[#9A9C9F]">Noite</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Tasks
