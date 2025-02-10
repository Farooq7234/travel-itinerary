import React from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

export const ItineraryModal = ({ itinerary, onClose }) => {
  if (!itinerary) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={itinerary.image}
            alt={itinerary.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-1 hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{itinerary.title}</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-semibold text-gray-700">Destination</h3>
              <p>{itinerary.destination}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Duration</h3>
              <p>{itinerary.duration}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Price</h3>
              <p>${itinerary.price}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Description</h3>
            <p className="text-gray-600">{itinerary.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Highlights</h3>
            <ul className="list-disc list-inside">
              {itinerary.highlights.map((highlight, index) => (
                <li key={index} className="text-gray-600">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">
              What's Included
            </h3>
            <ul className="list-disc list-inside">
              {itinerary.included.map((item, index) => (
                <li key={index} className="text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() =>
              toast.success(
                "Thank you for your interest! This is a demo purchase."
              )
            }
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            Book Now for ${itinerary.price}
          </button>
        </div>
      </div>
    </div>
  );
};
