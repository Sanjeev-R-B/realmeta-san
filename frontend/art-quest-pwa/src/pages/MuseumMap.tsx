import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import museums from "@/lib/museums.json";

const MuseumMap: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12 px-4 shadow-md">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Museum Maps</h1>
          <p className="text-primary-foreground/90 text-lg">
            Explore interactive floor plans and navigate iconic museums.
          </p>
        </div>
      </div>

      {/* List of Museums */}
      <div className="max-w-screen-xl mx-auto px-4 py-10 space-y-6">
        {museums.map((museum, index) => (
          <Card
            key={museum.id}
            className="p-4 flex flex-col md:flex-row gap-6 items-center hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Static 2D map image */}
            <div className="w-full md:w-72 h-48 overflow-hidden rounded-lg shadow-sm">
              <img
                src={museum.thumbnail}
                alt={museum.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Museum details */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-1">{museum.name}</h2>
              <p className="text-sm text-muted-foreground mb-3 flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-primary" />
                {museum.location}
              </p>

              <a href={museum.map_url} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  <Navigation className="h-4 w-4 mr-2" /> View Full Map
                </Button>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MuseumMap;
