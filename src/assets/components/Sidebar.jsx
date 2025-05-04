import SidebarButton from "./SidebarButton"
import HomeIcon from "../icons/home.svg?react"
const Sidebar = () => {
  return (
    <div className="h-screen w-72 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00ADB5]">Task Manager</h1>
        <p>
          Um simples <span className="text-[#00ADB5]">organizador de tarefas</span>
        </p>
      </div>

      <div className="flex flex-col items-center gap-2 p-2">
        <div className="">
          <SidebarButton variant="unselected" className="">
            <HomeIcon className="text-[#00ADB5]" /> Inicio
          </SidebarButton>
        </div>
        <SidebarButton variant="selected">Minhas Tarefas</SidebarButton>
      </div>
    </div>
  )
}
export default Sidebar
