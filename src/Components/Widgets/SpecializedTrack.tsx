"use client";
import Wrapper from "@/Components/Shared/Wrapper";
import Image from "next/image";
import Web3Image from "@/Assets/Images/metaverse.webp";
import AiImage from "@/Assets/Images/ai.webp";
import cncImage from "@/Assets/Images/cloud.webp";
import IoTImage from "@/Assets/Images/ambient.webp";
import networkImage from "@/Assets/Images/network.webp";
import bioImage from "@/Assets/Images/genomics.webp";

import { useState } from "react";
import QuarterBox from "@/Components/Shared/QuarterBox";
import Link from "next/link";

export const programData = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: Web3Image,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    image: AiImage,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5,
      },
    ],
  },
  {
    slug: "cnc",
    header: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    image: cncImage,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "iot",
    header: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    image: IoTImage,
    quarters: [
      {
        header: "Quarter IV",
        description:
          "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "AC-361: Embedded Programming using C and Rust",
        number: 5,
      },
    ],
  },
  {
    slug: "bio",
    header: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications",
    image: bioImage,
    quarters: [
      {
        header: "Quarter IV",
        description: "Bio-351: Python for Biologists",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: 5,
      },
    ],
  },
  {
    slug: "npa",
    header: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image: networkImage,
    quarters: [
      {
        header: "Quarter IV",
        description: "NPA-351: CCNA 200-301 Certification",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "NPA-361: Network Programmability and Automation",
        number: 5,
      },
    ],
  },
];

const SpecializedTrack = () => {
  const [selectedItem, setSelectedItems] = useState("wmd");
  const selectedItemData = programData.find(
    (item) => item.slug === selectedItem
  );
  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div>
          <h1 className="text-5xl font-bold">Specialized Tracks:</h1>
          <p className=" mt-6 text-lg text-gray-700 max-w-screen-sm">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each.
          </p>
        </div>
        <div className="mt-10 flex gap-x-6 gap-y-8 flex-col-reverse lg:flex-row ">
          {/* Left Side */}
          <div className="shadow-xl border border-slate-200 rounded-xl px-8 py-8 basis-8/12 sticky top-28 self-start">
            <h3 className="text-primary text-lg font-medium mt-4">
              Specialized Track
            </h3>
            <h1 className="text-2xl font-bold">{selectedItemData?.header}</h1>
            <p className="text-lg text-slate-600 mt-3">
              {selectedItemData?.description}
            </p>
            <div>
            {/* <Link href="/courses> */}
              <Link
                href={`/courses/${selectedItemData?.slug} `} >
                
                  <button className="text-primary text-lg mt-4 hover:border hover:scale-105 border-primary rounded-lg py-1 px-2">
                    Learn More
                  </button>
                
              </Link>
            </div>

            <div className=" mt-8 gap-4 flex flex-col sm:flex-row ">
              {selectedItemData?.quarters.map((items) => (
                <QuarterBox
                  key={items.number}
                  description={items.description}
                  header={items.header}
                  number={items.number}
                  haveBorder={false}
                />
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="px-4 space-y-6 flex-1 cursor-pointer basis-4/12">
            {programData.map((item) => (
              <div
                onClick={() => setSelectedItems(item.slug)}
                key={item.slug}
                className="gap-x-4 flex items-center pb-6 border-b"
              >
                <div className="flex-shrink-0 h-24 w-36">
                  <Image
                    src={item.image}
                    alt={item.description}
                    className={"h-24 rounded-lg object-cover hover:scale-105"}
                  />
                </div>
                <div>
                  <h4 className="text-primary font-medium">
                    Specialized Track
                  </h4>
                  <h3 className="font-semibold text-xl">{item.header}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTrack;
