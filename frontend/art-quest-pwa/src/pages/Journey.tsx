import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Spline from "@splinetool/react-spline";

const Journey = () => {
  // Mock top 5 artworks
  const [artworks] = useState([
    {
      id: "art_001",
      title: "Starry Night",
      description: "A masterpiece by Van Gogh.",
      shortDesc: "Van Gogh’s swirling night sky.",
      image: "starry-night.jpg",
    },
    {
      id: "art_002",
      title: "Mona Lisa",
      description: "The famous portrait by Leonardo da Vinci.",
      shortDesc: "Mysterious smile.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg",
    },
    {
      id: "art_003",
      title: "The Persistence of Memory",
      description: "Surreal clocks by Salvador Dalí.",
      shortDesc: "Melting clocks of time.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
    },
    {
      id: "art_004",
      title: "Girl with a Pearl Earring",
      description: "Tronie painting by Vermeer.",
      shortDesc: "The Dutch Mona Lisa.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg",
    },
    {
      id: "art_005",
      title: "The Scream",
      description: "Iconic expressionist work by Munch.",
      shortDesc: "The cry of nature.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg",
    },
  ]);

  const [mainArtwork, ...recommended] = artworks;

  return (
    <div className="min-h-screen pb-20">
      {/* 🟦 Hero Section with 3D Background */}
      <div className="relative h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* 🔹 Spline Background */}
        <div className="absolute inset-0 -z-10">
          <Spline scene="https://prod.spline.design/SobTq8Pp8eIvt6bH/scene.splinecode" />
        </div>

        {/* 🔹 Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 -z-0" />

        {/* 🔹 Text Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white animate-fade-in-up">
            Guiding You Through Every Step of the Story
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up">
            Experience a seamless journey as art unfolds, one moment at a time.
          </p>
        </div>
      </div>

      {/* 🖼 Main Highlight */}
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <Card className="group relative overflow-hidden glass-card shadow-2xl rounded-3xl border border-white/20 transition-all duration-700">
          <div className="relative">
            <img
              src={mainArtwork.image}
              alt={mainArtwork.title}
              className="w-full h-[500px] object-cover rounded-3xl transform transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-3xl transition-opacity duration-500 group-hover:opacity-90" />
            <div className="absolute bottom-10 left-10 text-white space-y-3 max-w-md transition-transform duration-700 group-hover:translate-y-[-4px]">
              <div className="flex items-center gap-2 text-yellow-400">
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold">Main Highlight</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
                {mainArtwork.title}
              </h2>
              <p className="text-sm md:text-base text-gray-200">
                {mainArtwork.description}
              </p>
              <Link to={`/artwork/${mainArtwork.id}`}>
                <Button className="mt-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold shadow-lg">
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {/* 🖼 Recommended Artworks */}
      <div className="max-w-screen-xl mx-auto px-4 space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">
          Recommended For You
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recommended.map((art, i) => (
            <Card
              key={art.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/10 backdrop-blur-sm"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h4 className="text-lg font-semibold">{art.title}</h4>
                <p className="text-sm text-gray-200">{art.shortDesc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;