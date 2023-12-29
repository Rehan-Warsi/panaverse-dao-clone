"use client";
import { programData } from "@/Components/Widgets/SpecializedTrack";
import coreImage from "@/Assets/Images/core-track-tech.png";
import Image from "next/image";
import Wrapper from "@/Components/Shared/Wrapper";
import Button from "@/Components/Shared/Button";
interface IProps {
  params: {
    courses: string;
  };
}

const Page = ({ params }: IProps) => {
  const selectedData = programData.find((item) => item.slug === params.courses);

  // console.log(params.courses);

  return (
    <section>
      <div className="bg-slate-800 gap-x-16 py-20 flex flex-col md:flex-row">
        <div className="mx-6 my-6 md:mx-24 md:my-16 justify-center items-center flex-1 text-lg text-green-500 font-medium">
          <h3>Specialized Track</h3>
          <h1 className="text-4xl text-white py-4">{selectedData?.header}</h1>
          <h1 className="text-white">{selectedData?.description}</h1>
          <div className="mt-10">
              <Button>
                <a target="_blank" href="https://www.piaic.org">
                  Learn More
                </a>
              </Button>
            </div>
        </div>
        <div className="flex-1 justify-center items-center mx-auto">
        <Image src={coreImage} alt="Core Tech Image" width={500} height={500}></Image>
        </div>

      </div>      


      
      
    </section>
  );
};

export default Page;

{/* <div className="bg-slate-800 py-80 relative">
<div className=" top-10 absolute md:top-40 text-xl text-green-600 font-semibold mx-24">
  <h3>Specialized Track</h3>
  
  </div>

</div> */}
