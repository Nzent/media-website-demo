"use client";
import { usePrevNextButtons } from "@/components/Carousel/EmblaCarouselArrowButtons";
import {
  IconCircleChevronLeft,
  IconCircleChevronRight,
} from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React from "react";

function FeedbackSction() {
  interface IFeedBacks {
    id: number;
    avatar: string;
    name: string;
    company: string;
    feedback: string;
  }

  const Feedbacks: IFeedBacks[] = [
    {
      id: 1,
      avatar: "/images/sarah.jpg",
      name: "Sarah",
      company: "ABC inc.",
      feedback:
        "Great service! Highly recommended. The team was professional and delivered everything on time. Their attention to detail and creativity exceeded my expectations.",
    },
    {
      id: 2,
      avatar: "/images/john.jpg",
      name: "John",
      company: "XYZ Ltd.",
      feedback:
        "Excellent experience from start to finish. They understood our needs and executed them perfectly. I would definitely work with them again in the future!",
    },
    {
      id: 3,
      avatar: "/images/emily.jpg",
      name: "Emily",
      company: "Bright Solutions",
      feedback:
        "Their team went above and beyond to ensure our branding stood out. The creative direction and execution were flawless. I highly appreciate their hard work!",
    },
    {
      id: 4,
      avatar: "/images/michael.jpg",
      name: "Michael",
      company: "Media Pros",
      feedback:
        "Amazing service and outstanding professionalism. They handled our marketing campaign seamlessly. We saw great results and increased engagement!",
    },
    {
      id: 5,
      avatar: "/images/jessica.jpg",
      name: "Jessica",
      company: "NextGen Tech",
      feedback:
        "A truly exceptional team! They took our ideas and brought them to life with outstanding creativity. We are very happy with the final outcome!",
    },
    {
      id: 6,
      avatar: "/images/david.jpg",
      name: "David",
      company: "Visionary Creators",
      feedback:
        "Their expertise in digital marketing is unmatched. We saw a major increase in our online presence and customer engagement. Highly recommended!",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <div className="">
      {/* headiing */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-heading font-bold self-start w-full text-center">
          Services
        </div>
        <div className="self-start h-full text-subheading w-full text-center mb-8">
          We offer a wide range of media services to help our clients
        </div>
        {/* feedbacks cards */}
        <div className="w-full">
          <div className="overflow-hidden embla" ref={emblaRef}>
            <div className="flex embla_container">
              {Feedbacks.map((feedback, index) => (
                <div
                  className="w-full bg-white p-4 rounded-md embla__slide flex flex-col items-center justify-center gap-y-4"
                  key={index}
                >
                  {/* avatar */}
                  <div>
                    <Image
                      src={feedback.avatar}
                      width={500}
                      height={500}
                      alt="avatar"
                      className="object-cover rounded-full h-40 w-40"
                    />
                  </div>
                  {/* feedback */}
                  <div className="italic opacity-60 text-body ">
                    &quot; {feedback.feedback} &quot;
                  </div>
                  <div className="text-center text-body font-semibold">
                    <div className="text-green-500">{feedback.company}</div>
                    <div>{feedback.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <button onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
              <IconCircleChevronLeft
                className={`${prevBtnDisabled && "opacity-50"} `}
                size={30}
              />
            </button>
            <button onClick={onNextButtonClick} disabled={nextBtnDisabled}>
              <IconCircleChevronRight
                className={`${nextBtnDisabled && "opacity-50"} `}
                size={30}
              />
            </button>
          </div>
          {/* 
          <div className="embla__controls">
            <div className="embla__buttons">
              <button onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
              <button onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>

            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"embla__dot".concat(
                    index === selectedIndex ? " embla__dot--selected" : ""
                  )}
                />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default FeedbackSction;
