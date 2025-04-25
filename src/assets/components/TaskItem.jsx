import CheckIcon from "../icons/check.svg?react"
import LoadIcon from "../icons/loader.svg?react"
import DetailsIcon from "../icons/link.svg?react"
const TaskItem = ({ task }) => {
  const getStatusClass = () => {
    if (task.status === "done") {
      return "bg-[#00ADB5]  text-[#00ADB5]"
    }
    if (task.status === "in_progress") {
      return "bg-[#FFAA04]  text-[#FFAA04]"
    }
    if (task.status === "not_started") {
      return "bg-[#35383E] bg-opacity-10  text-[#35383E]"
    }
  }
  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg bg-opacity-10 px-4 py-3 text-sm ${getStatusClass()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClass()}`}
        >
          <input
            type="checkbox"
            className="absolute h-4 w-4 cursor-pointer opacity-0"
            checked={task.status === "done"}
            readOnly
          />
          {task.status === "done" && <CheckIcon />}
          {task.status === "in_progress" && (
            <LoadIcon className="animate-spin" />
          )}
        </label>
        {task.title}
      </div>
      <a href="#" className="transition hover:opacity-75">
        <DetailsIcon />
      </a>
    </div>
  )
}
export default TaskItem
