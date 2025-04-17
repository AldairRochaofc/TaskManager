import Button from "./Button"
import AddIcon from "../../assets/icons/add.svg?react"
import TrashIcon from "../../assets/icons/trash-2.svg?react"
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
    </div>
  )
}
export default Tasks
