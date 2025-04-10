import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";


// import TeacherCard from './TeacherCard';
import { Card, CardContent, CardHeader } from './ui/card';
import { Star } from 'lucide-react';
const Review = () => {
    const carouselRef = useRef(null);
    const teacherData = [
        {
            name: "Zrand Hobs",
            profession: "Developer",

            rating: 4.9,

        },
        {
            name: "Dorothy Wood",
            profession: "Teacher",

            rating: 4.9,

        },
        {
            name: "Timothy Baker",
            profession: "Teacher",

            rating: 4.9,

        },
        {
            name: "Shane Pratt",
            profession: "Developer",

            rating: 4.9,
        },
        {
            name: "Frances Washing",
            profession: "Developer",

            rating: 4.9,
        },
        {
            name: "Jason Bell",
            profession: "Web Designer",

            rating: 4.9,
        },
        {
            name: "Kathryn Sanchez",
            profession: "Teacher",

            rating: 4.9,
        },
        {
            name: "Jaime Strickland",
            profession: "Web Designer",

            rating: 4.9,
        }
    ]

    useEffect(() => {
        const carousel = carouselRef.current;
        // const cards = carousel.querySelectorAll(".card");

        // Duplicate the cards for infinite scrolling
        carousel.innerHTML += carousel.innerHTML;

        // Calculate the total width of the carousel
        const totalWidth = carousel.scrollWidth / 2;

        // GSAP animation for infinite scrolling
        const tl = gsap.timeline({ repeat: -1 }); // Infinite repeat

        tl.to(carousel, {
            x: totalWidth, // Move the carousel to the left
            duration: 90, // Adjust duration for speed
            ease: "none", // Linear animation
        });

        // Reset the carousel position when the animation repeats
        tl.eventCallback("onRepeat", () => {
            gsap.set(carousel, { x: 0 }); // Reset to the start
        });
    }, []);
    return (
        <div>
            <div className="relative overflow-hidden py-2">
                <div
                    ref={carouselRef}
                    className="flex gap-8 w-max "
                >
                    {/* Cards */}
                    {teacherData.map((card, index) => (
                        <Card className="w-[292px] h-[242px] bg-[#191919]">
                            <CardHeader className="flex flex-col items-center justify-center">
                                <div className="flex flex-col items-center justify-center gap-1">
                                    {/* <img
              src={image}
              alt="teacher"
              className="w-[64px] h-[64px] object-cover rounded-full mb-2"
            /> */}
                                    <div className="flex items-center gap-1 ">
                                        <Star className="w-[16px] h-[16px] text-yellow-500 " />
                                        <p className="text-sm font-medium">{card.rating} (120 reviews)</p>
                                    </div>
                                    <h1 className="text-2xl font-bold">{card.name}</h1>
                                    <p className="text-sm text-gray-500">{card.profession}</p>
                                </div>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center pb-4">
                                {/* <Badge variant="outline" className="rounded-full">
            <p className="text-sm font-medium">{profession}</p>
            
          </Badge> */}
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Review