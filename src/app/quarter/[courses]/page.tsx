"use client";
import { programData } from "@/Components/Widgets/SpecializedTrack";
import coreImage from "@/Assets/Images/core-track-tech.png";
import Image from "next/image";
import Wrapper from "@/Components/Shared/Wrapper";
import Button from "@/Components/Shared/Button";
interface IProps {
  params: {
    courses: string;
    // header:string
    // courseDetail:string
  };
}

const Page = ({ params }: IProps) => {
  const selectedData = programData.find((item) => item.slug === params.courses);
  // console.log(params)
  let quaterDescription = selectedData?.quarters[0].description;
  let quaterCourseDetail = selectedData?.quarters[0].courseDetail;

  return (
    <section>
      <div className="bg-slate-800 gap-x-16 py-20 flex flex-col md:flex-row">
        <div className="mx-6 my-6 md:mx-24 md:my-16 justify-center items-center flex-1 text-lg text-green-500 font-medium">
          <h3>Specialized Track</h3>
          <h1 className="text-4xl text-white py-4">{selectedData?.header}</h1>
          <h1 className="text-white">{selectedData?.description}</h1>
          <div className="mt-10">
            <Button>
              <a target="_blank" href="https://portal.piaic.org/signup">
                Enroll Now
              </a>
            </Button>
          </div>
        </div>
        <div className="flex-1 justify-center items-center mx-auto">
          <Image
            src={coreImage}
            alt="Core Tech Image"
            width={500}
            height={500}
          ></Image>
        </div>
      </div>

      
      <Wrapper>
        <div className="flex flex-col-reverse lg:flex-row gap-x-10">
          <div className="py-10 px-4 md:w-8/12">
            <h3 className="md:text-lg font-bold text-primary whitespace-pre-line">
              {quaterDescription}
            </h3>
            <h1 className="text-3xl md:text-4xl font-bold py-2">
              Course Description
            </h1>
            <p className="py-4 md:text-xl text-slate-600">
              {quaterCourseDetail}
            </p>

            <div className="flex mt-4 w-[300px] md:w-[900px] ">
              <div className=" text-xl px-4 md:text-3xl font-bold md:px-10 md:py-14 border border-solid rounded-l-md border-primary  w-1/2">
                Specialized Track
              </div>
              <div className="text-xl px-4 md:text-2xl font-bold md:px-10 md:py-10  bg-primary rounded-r-md text-slate-200 w-1/2">
                <h3>Duration</h3>
                <h3 className="">13 Weeks</h3>
              </div>
            </div>
          </div>

          <div className="border rounded-lg md:w-4/12 my-10 py-8 px-6 flex-col lg:flex-row  ">
            <div className="">
              <h2 className="text-xl font-bold">Program Structure</h2>
              <p className="py-4 text-slate-600">
                After finishing the first three quarters, the participants will
                delve into two specialized quarters specific to their chosen
                specialization
              </p>

              <div className="flex mt-6">
                <div className=" w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-primary flex text-16 items-center my-0.5 justify-center">
                  <p className="text-white text-14 font-normal -rotate-45">
                    {" "}
                    Q1
                  </p>
                </div>
                <h2 className="mx-6 font-bold text-lg pt-0.5 text-slate-800">
                  Quarter I
                </h2>
              </div>

              <div className="flex mt-6">
                <div className=" w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-primary flex text-16 items-center my-0.5 justify-center">
                  <p className="text-white text-14 font-normal -rotate-45">
                    Q2
                  </p>
                </div>
                <h2 className="mx-6 font-bold text-lg pt-0.5 text-slate-800">
                  Quarter II
                </h2>
              </div>

              <div className="flex mt-6">
                <div className=" w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-primary flex text-16 items-center my-0.5 justify-center">
                  <p className="text-white text-14 font-normal -rotate-45">
                    Q3
                  </p>
                </div>
                <h2 className="mx-6 font-bold text-lg pt-0.5 text-slate-800">
                  Quarter III
                </h2>
              </div>
              <div className="flex mt-6">
                <div className=" w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-primary flex text-16 items-center my-0.5 justify-center">
                  <p className="text-white text-14 font-normal -rotate-45">
                    Q3
                  </p>
                </div>
                <h2 className="mx-6 font-bold text-lg pt-0.5 text-slate-800">
                  Quarter III
                </h2>
              </div>
              <div className="flex mt-6">
                <div className=" w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-primary flex text-16 items-center my-0.5 justify-center">
                  <p className="text-white text-14 font-normal -rotate-45">
                    Q4
                  </p>
                </div>
                <h2 className="mx-6 font-bold text-lg pt-0.5 text-slate-800">
                  Quarter IV
                </h2>
              </div>
              <div className="flex mt-6">
                <div className=" w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-primary flex text-16 items-center my-0.5 justify-center">
                  <p className="text-white text-14 font-normal -rotate-45">
                    Q5
                  </p>
                </div>
                <h2 className="mx-6 font-bold text-lg pt-0.5 text-slate-800">
                  Quarter V
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Page;
