const TasksSeparator = ({ tittle, icon }) => {
  return (
    <div className="flex gap-2 border-b-2 border-solid border-[#F4F4F5] pb-1 text-center">
      {icon}
      <p className="text-sm text-[#9A9C9F]">{tittle}</p>
    </div>
  )
}

export default TasksSeparator
