"use client";
import Wrapper from "@/Components/Shared/Wrapper";
import Logo from "/public/panaverse-log.png";
import Image from "next/image";
import fbIcon from "@/Assets/Images/facebook.svg";
import githubIcon from "@/Assets/Images/github.svg";
import youtubeIcon from "@/Assets/Images/youtube.svg";
import { programData } from "@/Components/Widgets/SpecializedTrack";
import Link from "next/link";

const Pages =["Home","Quarter 1","Quarter 2","Quarter 3"]

const Footer = () => {

  return (
    <Wrapper>
      <footer className="border-t">
        <div className="border-slate-200 shadow-xl flex flex-col md:flex-row basis-6/12 mt-10 gap-10 px-6">
          <div className="mt-6 ">
            <Image src={Logo} alt="Panaverse Logo" width={150} height={150} />

            <div className="w-3/4 px-2 py-6 ">
              <p className="text-lg text-slate-600  ">
                Certified Web 3.0 and Metaverse Developer A One and Quarter
                Years Panaverse DAO Earn as you Learn Program Getting Ready for
                the Next Generation of the Internet
              </p>
            </div>

            <div className="flex gap-x-10 py-2">
              <a
                href="https://www.facebook.com/groups/panaverse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className=""
                  src={fbIcon}
                  alt="fb icon"
                  height={30}
                  width={30}
                />
              </a>
              <a
                href="https://github.com/panaverse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className=""
                  src={githubIcon}
                  alt="Github icon"
                  height={30}
                  width={30}
                />
              </a>
              <a
                href="https://www.youtube.com/@panaverse/streams"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className=""
                  src={youtubeIcon}
                  alt="Youtube icon"
                  height={30}
                  width={30}
                />
              </a>
            </div>
          </div>
          <div className="basis-3/12 flex-col md:flex-row px-4 py-4 mt-2">
            <h3 className="text-xl font-bold text-slate-700">Programs</h3>
            
            {programData.map((items) => (
              <Link key={items.header} href={`/quarter/${items.slug}`}  >
            <div key={items.slug} className="py-1 ">
                <h4 className="">{items.header}</h4>
              </div>
              </Link>
            ))}
            
          </div>
          
          <div className="flex-col md:flex-row basis-3/12  px-4 py-4 mt-2">
            <h3 className="text-xl font-bold text-slate-700">Pages</h3>
            {
              Pages.map((items,i)=>(
                <div key={i} className="py-1 ">
                  <h3 className="">{items}</h3>
                </div>
              ))
            }
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};
export default Footer;
