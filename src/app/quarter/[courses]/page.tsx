"use client"
import { programData } from "@/Components/Widgets/SpecializedTrack";

interface IProps {
  params: {
    courses:string
  }
}

const Page = ( {params} : IProps) => {
  
      const selectedData = programData.find((item)=> item.slug === params.courses)
      
      console.log(params.courses);
  
  return (
    <div className="mt-10 flex gap-x-6 gap-y-8 flex-col-reverse lg:flex-row ">
      <div className="shadow-xl border border-slate-200 rounded-xl px-8 py-8 basis-8/12 sticky top-28 self-start">
        <h3 className="text-primary text-lg font-medium mt-4">
          Specialized Track
        </h3>
        <h1 className="text-2xl font-bold">{selectedData?.header}</h1>
        <p className="text-lg text-slate-600 mt-3">
          {selectedData?.description}
        </p>
      </div>
    </div>
  );
};

export default Page;
