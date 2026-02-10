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
        className="no-scrollbar w-full h-full overflow-x-scroll snap-x snap-mandatory overflow-y-hidden flex"
      >
        {content.map((slide, index) => (
          <div
            key={`slide ${index}`}
            className="relative w-full h-full flex-shrink-0 snap-center flex justify-center items-center mr-20 md:py-12"
          >
            {slide}
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll(true)}
        className="absolute md:mt-7 cursor-pointer bottom-[1/2] left-0 md:left-50 text-white text-3xl w-25 h-25 translate-y-[-50%] transition-shadow duration-200 hover:shadow-[0_0_20px_5px_#0ea5e9] hover:border-1 hover:border-sky-500/50 hover:text-4xl"
      >
        PREV
        {/* <Image
          src="/previous.png"
          alt="previous slide"
          width={256}
          height={256}
        /> */}
      </button>
      <button
        onClick={() => scroll(false)}
        className="absolute md:mt-7 cursor-pointer bottom-[1/2] right-0 md:right-50 text-white text-3xl w-25 h-25 translate-y-[-50%] transition-shadow duration-200 hover:shadow-[0_0_20px_5px_#0ea5e9] hover:border-1 hover:border-sky-500/50 hover:text-4xl"
      >
        {/* <Image src="/next.png" alt="next slide" width={256} height={256} /> */}
        NEXT
      </button>
    </div>
  );
};

export default Carousel;
