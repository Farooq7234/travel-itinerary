import React from "react";
import { Clock, MapPin, DollarSign } from "lucide-react";
import toast from "react-hot-toast";

export const ItineraryCard = ({ itinerary, onView }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img
        src={itinerary.image}
        alt={itinerary.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{itinerary.title}</h3>
        <div className="flex items-center gap-4 text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>{itinerary.destination}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{itinerary.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign size={16} />
            <span>{itinerary.price}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {itinerary.description}
        </p>
        <div className="flex justify-between items-center">
          <button
            onClick={() => onView(itinerary)}
            className="text-black hover:underline font-medium"
          >
            View Details
          </button>
          <button
            onClick={() => toast.success(itinerary.title + " Purchased")}
            className="bg-black text-white px-4 py-2 rounded-md transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
