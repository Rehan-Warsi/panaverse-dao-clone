
// // import Wrapper from "@/Components/Shared/Wrapper";
// // import Logo from "/public/panaverse-log.png";
// // import Image from "next/image";
// // import fbIcon from "@/Assets/Images/facebook.svg";
// // import githubIcon from "@/Assets/Images/github.svg";
// // import youtubeIcon from "@/Assets/Images/youtube.svg";

// // const Footer = () => {
// //   const iconStyle = { color: "blue" };

// //   return (
// //     <Wrapper>
// //       <footer className="border-t border-slate-200 shadow-xl grid grid-cols-3 gap-4 p-4">
// //         <div className="col-span-3">
// //           <Image src={Logo} alt="Panaverse Logo" width={200} height={200} />
// //         </div>
// //         <div className="col-span-1 flex flex-col space-y-4">
// //           <div className="text-16 text-para-color max-w-screen-sm">
// //             Certified Web 3.0 and Metaverse Developer A One and Quarter Years
// //             Panaverse DAO Earn as you Learn Program Getting Ready for the Next
// //             Generation of the Internet
// //           </div>
// //           <div className="flex space-x-10">
// //             <a
// //               href="https://www.facebook.com/groups/panaverse"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //             >
// //               <Image
// //                 className=""
// //                 src={fbIcon}
// //                 alt="fb icon"
// //                 height={30}
// //                 width={30}
// //                 style={iconStyle}
// //               />
// //             </a>
// //             <a
// //               href="https://github.com/panaverse"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //             >
// //               <Image
// //                 className=""
// //                 src={githubIcon}
// //                 alt="Github icon"
// //                 height={30}
// //                 width={30}
// //                 style={iconStyle}
// //               />
// //             </a>
// //             <a
// //               href="https://www.youtube.com/@panaverse/streams"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //             >
// //               <Image
// //                 className=""
// //                 src={youtubeIcon}
// //                 alt="Youtube icon"
// //                 height={30}
// //                 width={30}
// //                 style={iconStyle}
// //               />
// //             </a>
// //           </div>
// //         </div>
        
// //       </footer>
// //     </Wrapper>
// //   );
// // };

// // export default Footer;

import Wrapper from "@/Components/Shared/Wrapper";
import Logo from "/public/panaverse-log.png";
import Image from "next/image";
import fbIcon from "@/Assets/Images/facebook.svg";
import githubIcon from "@/Assets/Images/github.svg";
import youtubeIcon from "@/Assets/Images/youtube.svg";

const Footer = () => {
  const iconStyle = { color: "blue" };

  return (
    <Wrapper>
      <footer className="border-t">
       <div className="border-slate-200 shadow-xl w-6/12 grid grid-cols-3 gap-4 p-4">
        {/* First Column (Merged Content) */}
        <div className="col-span-1 flex flex-col space-y-4">
          <Image src={Logo} alt="Panaverse Logo" width={200} height={200} />

          <div className="text-16 text-para-color max-w-screen-sm">
            Certified Web 3.0 and Metaverse Developer A One and Quarter Years
            Panaverse DAO Earn as you Learn Program Getting Ready for the Next
            Generation of the Internet
          </div>
          <div className="flex space-x-10">
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
                style={iconStyle}
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
                style={iconStyle}
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
                style={iconStyle}
              />
            </a>
          </div>
        </div>

        {/* Second Column */}
        <div className="col-span-1 mt-6 border text-xl font-bold w-3/12">
         Programs
        </div>

        {/* Third Column (Empty) */}
        <div className="col-span-1 mt-6 border text-xl font-bold w-3/12">
          Classes
        </div>

    </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;



