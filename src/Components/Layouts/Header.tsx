import Wrapper from "@/Components/Shared/Wrapper"
import Image from "next/image"
import Logo from "/public/panaverse-log.png"
import angel from "@/Assets/Images/angle-down-solid.svg"

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-10 opacity-90 backdrop-blur-md">
        <Wrapper>
            <nav className="flex justify-between items-center">
                <div>
                    <Image src={Logo} alt="Panaverse Logo" width={100} height={100}></Image>
                </div>
                <ul className="flex gap-x-8 font-medium">
                    <li>Home</li>
                    <li className="flex">Courses <span className="flex"><Image className="mt-1 ml-2" src={angel} alt="Angel Down"></Image></span></li>
                </ul>
            </nav>
        </Wrapper>
    </header>
  )
}

export default Header