const Button = ({ children, variant = "primary" }) => {
  const getVariantClasses = () => {
    if (variant === "primary") {
      return "bg-[#00ADB5] text-white"
    }
    if (variant === "ghost") {
      return "bg-transparent text-[#616161]"
    }
  }
  return (
    <button
      className={`flex items-center gap-2 rounded-md bg-[#00ADB5] px-3 py-1 text-xs font-semibold text-white transition hover:opacity-75 ${getVariantClasses()}`}
    >
      {children}
    </button>
  )
}
export default Button
