// src/components/ListingCard.jsx

const ListingCard = ({ listing }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gray-50">
      <img
        className="w-full h-52 object-cover"
        src={listing.imageUrl}
        alt={listing.title}
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-1">{listing.title}</div>
        <p className="text-gray-700 text-sm mb-2">{listing.description}</p>

        {/* Price */}
        <p className="mt-4 text-gray-900 text-lg font-bold ">{listing.price}</p>

        {/* Location */}
        <p className="text-gray-500 text-sm mb-4">{listing.location}</p>

        {/* See More Button */}
        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
