import Wrapper from "@/Components/Shared/Wrapper";
import Image from "next/image";
import heroPoster from "@/Assets/Images/hero-poster.webp";
import Button from "@/Components/Shared/Button";
const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex items-center md:flex-row flex-col mt-6 gap-x-12 px-4 ">
          {/* Left Side */}
          <div className="flex-1">
            <h4 className="text-primary font-medium text-lg mt-4">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="text-5xl sm:text-6xl font-bold">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="mt-6 text-lg text-slate-600 ">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div className="mt-6">
              <Button>
                <a target="_blank" href="https://www.piaic.org">
                  Learn More
                </a>
              </Button>
            </div>
          </div>

          {/* Right side  */}
          <div className="flex-1">
            <Image src={heroPoster} alt="Hero Poster"></Image>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
