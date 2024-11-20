import { Heebo } from 'next/font/google';
import Image from 'next/image';

const heebo = Heebo({ subsets: ['latin'] });

// Define types for the props
interface FeatureItemProps {
  src: string;
  title: string;
  year: string;
  category: string;
  description: string;
}

const FeatureItem = ({ src, title, year, category, description }: FeatureItemProps) => (
  <div className="flex md:flex-row flex-col md:space-x-10 items-center md:w-full">
    <Image src={src} alt={`${title} feature image`} width={246} height={150} className="rounded-md" />
    <div className="flex flex-col md:w-[417.46px] w-[300px]">
      <h1 className={`${heebo.className} md:text-[30px] text-[20px] text-black font-semibold mb-2 text-center md:text-start`}>
        {title}
      </h1>
      <div className="flex flex-row space-x-4 items-center mb-2 justify-center md:justify-start">
        <p className="bg-buttonColor p-1 rounded-md text-white md:text-start text-center">{year}</p>
        <p className={`${heebo.className} text-black/70 md:text-[20px] text-[16px] md:text-start text-center`}>{category}</p>
      </div>
      <p className={`${heebo.className} text-black md:text-[18px] text-[13px] leading-relaxed text-center md:text-start`}>
        {description}
      </p>
    </div>
  </div>
);

const FeaturedPost = () => {
  return (
    <div className="md:w-full w-[95%] flex justify-center items-center mx-auto">
      <div className="md:w-[919px] w-[90%] md:h-[934.2px] h-auto flex flex-col space-y-8">
        <h2 className={`${heebo.className} md:text-[22px] text-[18px] text-black ml-[10%]`}>
          Featured works
        </h2>
        <div className="md:w-[80%] w-full flex flex-col md:space-y-8 space-y-4 mx-auto">
          <FeatureItem
            src="/images/Rectangle 30.png"
            title="Designing Dashboards"
            year="2020"
            category="Dashboard"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <FeatureItem
            src="/images/Rectangle 32.png"
            title="Designing Dashboards"
            year="2020"
            category="Dashboard"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <FeatureItem
            src="/images/Rectangle 34.png"
            title="Designing Dashboards"
            year="2020"
            category="Dashboard"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
