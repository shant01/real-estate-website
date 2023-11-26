// src/components/CarouselCard.jsx

const CarouselCard = ({ quote, name }) => (
    <div className="flex flex-col items-center justify-center p-10 rounded-lg shadow-lg mx-auto my-10 max-w-2xl bg-white hover:shadow-2xl transition-shadow duration-300">
      <p className="text-gray-800 text-xl text-center italic mb-5">
        "{quote}"
      </p>
      <p className="text-gray-600 text-lg text-center font-semibold">
        - {name}
      </p>
    </div>
  );
  
  export default CarouselCard;
  