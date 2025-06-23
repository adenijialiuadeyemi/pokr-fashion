import React, { useState } from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { create } from "zustand";
import Image from "next/image";

// Zustand store
const useDressStore = create((set) => ({
  currentIndex: 0,
  dresses: [
    {
      id: 1,
      mainImage: "/fashion1.png",
      thumbnail: "/thumb1.png",
      title: "Golden Elegance Gown",
      description: "Stunning beaded evening gown with cathedral train",
    },
    {
      id: 2,
      mainImage: "/fashion2.png",
      thumbnail: "/thumb2.png",
      title: "Midnight Sparkle Dress",
      description: "Luxurious sequined gown with dramatic silhouette",
    },
    {
      id: 3,
      mainImage: "/fashion3.png",
      thumbnail: "/thumb3.png",
      title: "Crystal Dream Gown",
      description: "Ethereal beaded dress with flowing train",
    },
  ],
  setCurrentIndex: (index) => set({ currentIndex: index }),
  nextDress: () =>
    set((state) => ({
      currentIndex: (state.currentIndex + 1) % state.dresses.length,
    })),
  prevDress: () =>
    set((state) => ({
      currentIndex:
        state.currentIndex === 0
          ? state.dresses.length - 1
          : state.currentIndex - 1,
    })),
}));

const DressShowcase = () => {
  const { currentIndex, dresses, setCurrentIndex, nextDress, prevDress } =
    useDressStore();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = (callback) => {
    setIsTransitioning(true);
    setTimeout(() => {
      callback();
      setIsTransitioning(false);
    }, 150);
  };

  const handleNext = () => handleTransition(nextDress);
  const handlePrev = () => handleTransition(prevDress);
  const handleThumbnailClick = (index) => {
    if (index !== currentIndex) {
      handleTransition(() => setCurrentIndex(index));
    }
  };

  const currentDress = dresses[currentIndex];

  return (
    <div className="min-h-[80vh] bg-[#141414] rounded-2xl border border-gray-700 py-4 px-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full p-2">
          {/* Thumbnail Navigation */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="flex lg:flex-col gap-3 justify-center lg:justify-start rounded-xl">
              {dresses.map((dress, index) => (
                <Card
                  key={dress.id}
                  isPressable
                  onPress={() => handleThumbnailClick(index)}
                  className={`w-20 h-full md:w-24 md:h-full lg:w-full lg:h-full transition-all duration-300 ${
                    index === currentIndex
                      ? "ring-2 ring-purple-500 shadow-lg scale-105"
                      : "hover:scale-102 opacity-70 hover:opacity-100"
                  }`}
                >
                  <CardBody className="p-0 overflow-hidden">
                    <Image
                      src={dress.thumbnail}
                      alt={`${dress.title} thumbnail`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>

          {/* Main Display */}
          <Card className="h-[70vh] lg:h-[80vh] bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-700 rounded-2xl relative lg:col-span-10 order-1 lg:order-2">
            <CardBody className="p-0 relative h-full w-full">
              {/* Image Fill */}
              <div
                className={`absolute inset-0 transition-all duration-300 ${
                  isTransitioning
                    ? "opacity-0 scale-95"
                    : "opacity-100 scale-100"
                }`}
              >
                <Image
                  src={currentDress.mainImage}
                  alt={currentDress.title}
                  fill
                  className="object-fill w-full h-full rounded-2xl"
                  priority
                />
              </div>

              {/* Navigation Arrows */}
              <Button
                isIconOnly
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white z-10 cursor-pointer"
                onPress={handlePrev}
              >
                <ChevronLeft size={24} color="#fff" />
              </Button>

              <Button
                isIconOnly
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white z-10 cursor-pointer"
                onPress={handleNext}
              >
                <ChevronRight size={24} color="#fff" />
              </Button>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full">
                <span className="text-white text-sm font-medium">
                  {currentIndex + 1} / {dresses.length}
                </span>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Mobile Dots */}
        <div className="flex justify-center mt-6 lg:hidden">
          <div className="flex space-x-2">
            {dresses.map((_, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-purple-500 w-6"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressShowcase;
