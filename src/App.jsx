import React, { useState, useMemo } from "react";
import { Filters } from "./components/Filters";
import { ItineraryCard } from "./components/ItineraryCard";
import { ItineraryModal } from "./components/ItineraryModel";
import { itineraries } from "./data/itineraries";
import { Plane } from "lucide-react";

function App() {
  const [selectedItinerary, setSelectedItinerary] = useState(null);
  const [filters, setFilters] = useState({
    destination: "",
    minPrice: 0,
    maxPrice: 0,
    searchQuery: "",
  });

  const destinations = useMemo(
    () => [...new Set(itineraries.map((item) => item.destination))],
    []
  );

  const filteredItineraries = useMemo(() => {
    return itineraries.filter((itinerary) => {
      const matchesDestination =
        !filters.destination || itinerary.destination === filters.destination;
      const matchesMinPrice =
        !filters.minPrice || itinerary.price >= filters.minPrice;
      const matchesMaxPrice =
        !filters.maxPrice || itinerary.price <= filters.maxPrice;
      const matchesSearch =
        !filters.searchQuery ||
        itinerary.title
          .toLowerCase()
          .includes(filters.searchQuery.toLowerCase()) ||
        itinerary.destination
          .toLowerCase()
          .includes(filters.searchQuery.toLowerCase());

      return (
        matchesDestination &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesSearch
      );
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <Plane className="text-blue-600" size={32} />
            <h1 className="text-3xl font-bold text-gray-900">
              Travel Itineraries
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Filters
          filters={filters}
          onFilterChange={setFilters}
          destinations={destinations}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItineraries.map((itinerary) => (
            <ItineraryCard
              key={itinerary.id}
              itinerary={itinerary}
              onView={setSelectedItinerary}
            />
          ))}
        </div>

        {filteredItineraries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No itineraries found matching your criteria.
            </p>
          </div>
        )}
      </main>

      <ItineraryModal
        itinerary={selectedItinerary}
        onClose={() => setSelectedItinerary(null)}
      />
    </div>
  );
}

export default App;
