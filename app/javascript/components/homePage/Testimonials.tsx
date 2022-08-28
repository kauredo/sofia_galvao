import Carousel from "nuka-carousel";
import React, { useEffect, useRef, useState } from "react";
import { Testimonial } from "../utils/Interfaces";

interface Props {
  testimonials: Testimonial[];
}

export default function Testimonials(props: Props) {
  const { testimonials } = props;
  const [slideNumber, setSlideNumber] = useState(1);

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    handleResize();
    return;
  }, []);

  const handleResize = () => {
    const windowWidth = Math.floor(window.innerWidth / 412);
    if (windowWidth == 0) {
      setSlideNumber(1);
    } else {
      setSlideNumber(windowWidth);
    }
  };

  const slidesToShow = () => {
    if (slideNumber > testimonials.length) {
      return testimonials.length;
    } else {
      return slideNumber;
    }
  };

  return (
    <div className="p-6 text-center w-full mx-auto flex justify-center items-center">
      <div className="w-full">
        <h3 className="text-2xl mb-4 mx-auto">Testemunhos</h3>
        <ul className="overflow-hidden w-full h-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700 my-2">
          <Carousel
            autoplay={slideNumber === 1}
            slidesToShow={slidesToShow()}
            heightMode="max"
            defaultControlsConfig={{
              nextButtonText: "➤",
              prevButtonStyle: { transform: "rotate(180deg)" },
              prevButtonText: "➤",
              pagingDotsClassName: "mx-1 hidden sm:block",
            }}
          >
            {testimonials.map(testimonial => {
              return (
                <li key={`${testimonial.name}--testimonial`} className="p-6">
                  <div className="h-full w-full text-left">
                    <q>{testimonial.text}</q>
                    {/* <br /> */}
                    <span className="font-bold float-right">
                      - {testimonial.name}
                    </span>
                  </div>
                </li>
              );
            })}
          </Carousel>
        </ul>
      </div>
    </div>
  );
}
