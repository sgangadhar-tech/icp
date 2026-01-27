import { Calendar, MoveRight } from 'lucide-react'

const Button = ({ 
  text, 
  leftIcon = Calendar, 
  rightIcon = MoveRight, 
  bgColor = 'bg-[#44B982]',
  className = ''
}) => {
  const LeftIcon = leftIcon
  const RightIcon = rightIcon

  return (
    <button className={`${bgColor} h-15 w-[517px] text-white flex justify-center items-center rounded-md ${className}`}>
      {LeftIcon && <LeftIcon className="mr-2 inline-block" />}
      <span>{text}</span>
      {RightIcon && <RightIcon className="ml-2 inline-block" />}
    </button>
  )
}

export default Button