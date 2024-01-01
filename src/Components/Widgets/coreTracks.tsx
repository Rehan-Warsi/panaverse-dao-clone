import Wrapper from "@/Components/Shared/Wrapper";
import Button from "@/Components/Shared/Button";
import Link from "next/link";

export const CoreTrackData = [
  {
    name: "Q1",
    header: "Quarter I",
    description: "CS-101: Object Oriented Programming Using TypeScript",
    number: 1,
    courseDetail: "We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users."
  },
  {
    name: "Q2",
    header: "Quarter II",
    description:
      "WS-201: Developing Planet-Scale Web-2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2,
    courseDetail:"The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF)."
  },
  {
    name: "Q3",
    header: "Quarter III",
    description:
      "$-101: Dollar Making Bootcamp - Full - Stack Template and API Product Development",
    number: 3,
    courseDetail:"In this course, you will be tasked with building APIs and a template to be sold on the Panaverse DAO Marketplace and Theme Forest. The Panaverse DAO will receive 25% of the sale for platform management and an additional 15% for marketing purposes. 60% of the revenues will be distributed to the developer as Panaverse tokens."
  },
];

const coreTracks = () => {
  // const header = `Core Courses \n (Common in All Specializations)`;

  return (
    <section>
      <Wrapper>
        <div>
          <h4 className="text-primary font-medium text-lg mt-4">
            Program of Studies
          </h4>
          <h1 className="text-4xl font-bold whitespace-pre-line">{`Core Courses \n (Common in All Specializations`} </h1>
          <p className="mt-4 text-lg text-slate-600 ">
            Every participant of the program will start by completing the
            following three core courses.
          </p>
        </div>
        <div className="mt-6">
          <Button>
            <a target="_blank" href="https://portal.piaic.org/signup">
              Enroll now
            </a>
          </Button>
        </div>
        
        <div className="flex gap-x-8 gap-y-6 py-20 flex-col md:flex-row mx-auto">
          {CoreTrackData.map((items) => {
            
            return (
              <div
              
                key={items.number}
                
                className="border rounded-md flex-1 flex relative flex-col justify-center px-8 py-16"
              ><Link href={`/core-tracks/${items.number}`}>
                <h4 className="font-bold hover:text-primary cursor-pointer duration-300 hover:scale-y-125">
                  {items.header}
                </h4>
                <p className="text-lg text-slate-600 z-0">{items.description}</p>
                <div className="absolute text-gray-200 text-[150px] hover:transition-transform duration-300 hover:scale-110
                   right-10 -top-2 font-bold -z-10">{items.number}
                </div>
                </Link>
              </div>
              
            );
          })}
        </div>
        
      </Wrapper>
    </section>
  );
};

export default coreTracks;
