"use client";

import { Heebo } from "next/font/google";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const heebo = Heebo({ subsets: ["latin"] });

const Post = () => {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect(); // Stop observing after animation triggers
                }
            },
            { threshold: 0.2 } // Trigger when 20% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={sectionRef}
            className="bg-sectionbg md:h-[502px] h-[610px] my-[66px] flex flex-col justify-evenly items-center"
        >
            <div className="md:w-[1030px] w-[300px] mx-auto p-6 flex justify-between">
                <h2 className={`${heebo.className} font-[22px] text-black font-medium`}>Recent Post</h2>
                <Link href={""} className={`${heebo.className} font-[22px] text-buttonColor font-medium`}>
                    View all
                </Link>
            </div>

            <div
                className={`flex md:flex-row flex-col gap-5 items-center ${
                    inView ? "move-up-animation" : "hidden"
                }`}
            >
                <div className="md:w-[483px] w-[300px] md:h-[356px] bg-white flex items-center">
                    <div className="md:w-[391px] w-[250px] md:h-[286px] h-[250px] m-auto flex items-start flex-col justify-between">
                        <h2
                            className={`${heebo.className} font-semibold text-black md:text-[26px] text-[20px]`}
                        >
                            Making a design system from scratch
                        </h2>
                        <div className="md:w-[301.28px] w-[200px] md:h-[42.12px] flex justify-between md:items-start items-center">
                            <p
                                className={`${heebo.className} md:text-[18px] text-[12px] font-normal text-black/70`}
                            >
                                12 Feb 2020
                            </p>
                            <p
                                className={`${heebo.className} md:text-[18px] text-[12px] font-normal text-black/70`}
                            >
                                |
                            </p>
                            <p
                                className={`${heebo.className} md:text-[18px] text-[12px] font-normal text-black/70`}
                            >
                                Design, Pattern
                            </p>
                        </div>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>

                <div className="md:w-[483px] w-[300px] md:h-[356px] bg-white flex items-center">
                    <div className="md:w-[391px] w-[250px] md:h-[286px] h-[250px] m-auto flex items-start flex-col justify-between">
                        <h2
                            className={`${heebo.className} font-semibold text-black md:text-[26px] text-[20px]`}
                        >
                            Making a design system from scratch
                        </h2>
                        <div className="md:w-[301.28px] w-[200px] md:h-[42.12px] flex justify-between md:items-start items-center">
                            <p
                                className={`${heebo.className} md:text-[18px] text-[12px] font-normal text-black/70`}
                            >
                                12 Feb 2020
                            </p>
                            <p
                                className={`${heebo.className} md:text-[18px] text-[12px] font-normal text-black/70`}
                            >
                                |
                            </p>
                            <p
                                className={`${heebo.className} md:text-[18px] text-[12px] font-normal text-black/70`}
                            >
                                Design, Pattern
                            </p>
                        </div>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
