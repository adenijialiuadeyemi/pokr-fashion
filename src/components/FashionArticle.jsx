import React from "react";
import { Card, CardBody, Avatar, Chip } from "@heroui/react";
import { Eye, MoreHorizontal, Bookmark } from "lucide-react";

const FashionArticle = () => {
  return (
    <div className="max-w-7xl mx-auto my-4">
      <Card className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-gray-700 shadow-2xl rounded-2xl border ">
        <CardBody className="p-6 md:p-8">
          {/* Header with Title and Top Right Elements */}
          <div className="flex items-start justify-between mb-6">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight flex-1 pr-4">
              Modern Fashion Attire Illustration
            </h1>

            {/* Top Right Elements */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <MoreHorizontal
                size={20}
                className="text-gray-400 cursor-pointer hover:text-gray-300"
              />

              <div className="flex items-center gap-2 text-gray-400">
                <Eye size={16} />
                <span className="text-sm font-medium">12</span>
              </div>

              <div className="w-8 h-8 rounded-full bg-[#EADBFF] flex items-center justify-center">
                <Bookmark size={20} color="#8338EC" fill="#8338EC" />
              </div>
            </div>
          </div>

          {/* Content Text */}
          <div className="mb-8">
            <p className=" text-sm leading-relaxed font-light text-gray-500">
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque Yorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
              Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
              efficitur neque
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <Chip
              variant="flat"
              className="bg-gray-700/60 text-gray-300 hover:bg-gray-600/60 transition-colors px-2 py-1 rounded-md cursor-pointer"
              size="sm"
            >
              Tags
            </Chip>
            <Chip
              variant="flat"
              className="bg-gray-700/60 text-gray-300 hover:bg-gray-600/60 transition-colors px-2 py-1 rounded-md cursor-pointer"
              size="sm"
            >
              Tags
            </Chip>
            <Chip
              variant="flat"
              className="bg-gray-700/60 text-gray-300 hover:bg-gray-600/60 transition-colors px-2 py-1 rounded-md cursor-pointer"
              size="sm"
            >
              Tags
            </Chip>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default FashionArticle;
