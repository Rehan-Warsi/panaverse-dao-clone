import { FC } from "react"


const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className="max-w-screen-2xl mx-auto py-2 px-4">
        {children}
    </div>
  )
}

export default Wrapper