import { useRef } from "react";
import Image from "next/image";

interface CarouselProps {
  content: React.ReactNode[];
}

const Carousel = ({ content }: CarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (left?: boolean) => {
    if (scrollRef.current) {
      const { clientWidth, scrollLeft, scrollWidth } = scrollRef.current;

      const atStart = scrollLeft <= 0;
      const atEnd = scrollLeft + clientWidth >= scrollWidth - 100;

      if (atStart) {
        if (left) {
          scrollRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
          return;
        }
      }

      if (atEnd) {
        if (!left) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
          return;
        }
      }

      scrollRef.current.scrollBy({
        left: left ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      <div
        ref={scrollRef}
        className="no-scrollbar w-8/10 mx-auto h-full overflow-x-scroll snap-x snap-mandatory overflow-y-hidden flex"
      >
        {content.map((slide, index) => (
          <div
            key={`slide ${index}`}
            className="relative w-full h-full flex-shrink-0 snap-center flex justify-center items-center md:py-12"
          >
            {slide}
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll(false)}
        className="absolute md:mt-7 cursor-pointer top-50 left-[-20px] md:left-0 md:bottom-[1/2] text-white text-3xl w-[50px] md:w-20 md:h-25 md:translate-y-[-50%] transition-all transition-discrete hover:scale-130"
      >
        <Image
          src="/prev_arrow_white.svg"
          alt="previous slide"
          width={150}
          height={150}
        />
      </button>
      <button
        onClick={() => scroll(false)}
        className="absolute md:mt-7 cursor-pointer top-50 right-[-20px] md:bottom-[1/2] md:right-0 text-white text-3xl w-[50px] md:w-20 md:h-25 md:translate-y-[-50%] transition-all transition-discrete hover:scale-130"
      >
        <Image
          src="/next_arrow_white.svg"
          alt="next slide"
          width={150}
          height={150}
        />
      </button>
    </div>
  );
};

export default Carousel;
