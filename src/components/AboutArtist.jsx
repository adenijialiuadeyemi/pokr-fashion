"use client";

import { Card, CardHeader, CardBody, Avatar } from "@heroui/react";
import Image from "next/image";
import { MapPin } from "lucide-react";
export default function AboutArtist() {
  return (
    <div className="mt-8 px-4 w-full max-w-xl mx-auto ">
      <Card className="bg-[#141414] text-white rounded-xl border border-gray-700">
        <CardHeader className="pb-4 px-2 mt-4 flex items- justify-center border-b border-gray-700 text-center">
          <h3 className="text-xl font-semibold text-center">
            About the Artist
          </h3>
        </CardHeader>
        <CardBody className="flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center gap-4">
            <Image
              width={120}
              height={120}
              src="/profile2.png"
              alt="Profile Picture"
              className="object-contain my-4"
            />

            <div className="flex items-center flex-col gap-2">
              <p className="font-semibold text-white">@Ocean</p>
              <p className="text-sm text-gray-400">Fashion Artist</p>
              <p className="text-xs text-gray-400 mt-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                Lagos, Nigeria
              </p>
              <p className="text-xs mt-1">
                ⭐ 5.0{" "}
                <span className="text-gray-400">(5 Verified Reviews)</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between text-center gap-6 text-sm text-white pt-2 border-t border-white/10">
            <div>
              <p className="text-lg font-semibold">14</p>
              <span className="text-xs text-gray-500">Work Completed</span>
            </div>
            <div className="mb-8">
              <p className="text-lg font-semibold">10</p>
              <span className="text-xs text-gray-500">Design Sold</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
