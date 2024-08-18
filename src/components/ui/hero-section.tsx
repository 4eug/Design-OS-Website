import { Button } from "../button";
import { FigmaIcon } from "../icons/figma";


export default function HeroSection() {
  return (
    <section className="pt-10sm:pt-16 lg:pt-24">
    <div className="container mx-auto px-4 sm:px-6 2xl:px-12">
        <div className=" max-w-7xl mx-auto">
            <span className="bg-gray-100 text-caption-md-medium px-[6px] py-1 border-2 border-[#F0F0F0] rounded-full">
                Design OS [V1.0]
            </span>  
        </div>
        <div className="md:flex max-w-7xl mx-auto text-left gap-6 sm:gap-8 lg:gap-14 mt-6 lg:mt-8">
            <h2 className="text-H2-bold lg:text-H1-bold w-[343px] sm:w-[332px] lg:w-[658px]">Design and Develop with a Unified Vision</h2>
            <div className="space-y-4">
            <p className="text-text-md-regular lg:text-text-lg-regular text-[#525252] w-[342px] sm:w-[332px] lg:w-[510px] mt-6 sm:mt-0 lg:mt-0">Enabling designers and developers to build consistent, scalable, and beautiful interfaces effortlessly. Dive into a library crafted for seamless collaboration..</p>
            <Button size='medium'>
                <FigmaIcon/>
                Preview
            </Button>
            </div>
        </div>
    </div>

    <div className="container mx-auto 2xl:px-12">
        <img className="w-full mt-8 sm:mt-14 lg:mt-16" src="../Components.svg" alt="components" />
    </div>
</section>
  )
}
