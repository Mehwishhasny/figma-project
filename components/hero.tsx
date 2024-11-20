import Image from 'next/image';
import { Heebo } from 'next/font/google';

const heebo = Heebo({subsets:["latin"]});

const Hero = () => {
    return(
        <div className="my-[66px] p-6 md:w-[1030px] md:h-[308px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
            
            <div className="md:w-[521px] h-[305px] flex flex-col md:justify-between justify-evenly items-start">
                <h1 className={`${heebo.className} md:text-[48px] text-[25px] font-black typewriter`}>
                Hi, I am John, <span className="block">Creative Technologist</span>
            </h1>

            <p className={`${heebo.className} text-[16px] font-normal text-textColor`}> 
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>

                <button className={`${heebo.className} bg-buttonColor w-[205px] h-[50px] text-white text-[18px]font-medium rounded-sm shadow-md shadow-black/60`}>
                    Download Resume
                </button>
            </div>

            <div className="relative">
                <Image className="z-50"
                src="/images/image.png"
                alt="hero image"
                width={292}
                height={299}
                
                />
            
            <div className="-z-10 absolute w-[282px] h-[297px] rounded-full bg-eclipseColor top-2 right-3" />
            </div>


            </div>
    )
}

export default Hero;