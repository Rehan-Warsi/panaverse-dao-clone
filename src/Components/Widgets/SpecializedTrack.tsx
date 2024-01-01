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
        courseDetail:
          "In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.",
      },
      {
        header: "Quarter V",
        description:
          "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: 5,
        courseDetail:
          "The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies",
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
        courseDetail: `Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning's potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology. \n 
        
        We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI’s powerful models and Next.js 13. 
        
        We'll conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. 
        
        We'll also learn how to make your programs interactive and how to test your code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.10+ that will have you writing programs, solving problems, and making things that work in no time. 
        
        In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.`,
      },
      {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps",
        number: 5,
        courseDetail: "This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance.",
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
        courseDetail: "Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil.Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. In this course, you will learn how to develop cloud applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.",
      },
      {
        header: "Quarter V",
        description:
          "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: 5,
        courseDetail: "Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies. This simplifies management and orchestration for large-scale, multi-cloud infrastructures.Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.",
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
        courseDetail: "Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. In a multi-device world, people don't want to spend their life fussing with technology. An ambient approach gets the tech out of your way so you can live your life while getting the help you need. It doesn't matter what device you're using, what context you're in, whether you're talking, typing, or tapping. The technology in your life works together seamlessly. Ambient computing uses all aspects of modern-day technology, including voice assistants, artificial intelligence, sensors, connectivity, cloud computing and more.If you were thinking that the IoT and ambient computing sound a lot alike, you aren't wrong; the two concepts are intertwined. IoT refers to the vast array of devices that connect to the internet to optimize their functionality, like smart sensors and smart speakers: ambient computing builds on that. Ambient computing focuses on the interaction between these devices once they are connected.Matter, the next-generation smart home standard, solves many smart home pain points while bringing all our IoT devices together. Some of the biggest tech companies are working together to make Matter a unified protocol for future smart homes. These companies include Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa, Samsung SmartThings, Google Nest, and Samsung SmartThings will support the Matter standard by default for all new devices.In this course we will learn to build smart homes with Amazon Alexa and Matter protocol.",
      },
      {
        header: "Quarter V",
        description: "AC-361: Embedded Programming using C and Rust",
        number: 5,
        courseDetail: `This is an introductory course about using the C and Rust Programming Languages on "Bare Metal" embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the C++ and Rust programming languages. We'll learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced, thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers, playing with GPIOs, and making things that work in no time.`
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
        courseDetail: "This course will focus on learning the basics of the Python programming language through genomics examples.",
      },
      {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: 5,
        courseDetail: "In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data.",
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
        courseDetail: "This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.",
      },
      {
        header: "Quarter V",
        description: "NPA-361: Network Programmability and Automation",
        number: 5,
        courseDetail: "Traditional network management techniques can't be effectively automated and don't scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer.",
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
              <Link href={`/quarter/${selectedItemData?.slug} `}>
                <button className="text-primary text-lg mt-4 hover:border hover:scale-105 border-primary rounded-lg py-1 px-2">
                  Learn More
                </button>
              </Link>
            </div>

            <div className=" mt-8 gap-4 flex flex-col sm:flex-row ">
              {selectedItemData?.quarters.map((items) => (
                <Link
                  key={items.number}
                  href={`/quarter/${selectedItemData?.slug}`}
                >
                  <QuarterBox
                    description={items.description}
                    header={items.header}
                    number={items.number}
                    haveBorder={false}
                  />
                </Link>
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
