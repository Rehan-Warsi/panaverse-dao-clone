import { FC } from "react"


const Button:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <button className="bg-primary text-white text-xl font-semibold rounded-full px-10 py-4 
        hover:scale-110 transition-transform duration-300 ">
        {children}

    </button>
  )
}

export default Button