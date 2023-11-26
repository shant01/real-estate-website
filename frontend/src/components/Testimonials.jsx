import CarouselCard from "../components/CarouselCard";
import Carousel from "nuka-carousel";

const feedback = [
  {
    id: "feedback-1",
    quote:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
  },
  {
    id: "feedback-2",
    quote:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
  },
  {
    id: "feedback-3",
    quote:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
  },
];

const Testimonials = () => (
  <section
    id="clients"
    className={`sm:py-16 py-6 flex justify-center items-center flex-col relative bg-gray-100`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="font-semibold w-full xs:text-5xl text-4xl xs:leading-normal leading-tight">
      <h2
        className={`font-poppins font-semibold xs:text-[48px] text-[40px]  xs:leading-[76.8px] leading-[66.8px] w-full`}
      >
        Customer Testimonials
      </h2>
    </div>
    <Carousel
      autoplay={true}
      autoplayInterval={3000}
      wrapAround={true}
      withoutControls={true} // This prop hides the default controls
    >
      {feedback.map((card) => (
        <CarouselCard key={card.id} {...card} />
      ))}
    </Carousel>
  </section>
);

export default Testimonials;
