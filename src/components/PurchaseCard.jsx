"use client";

import { Card, CardHeader, CardBody, Button } from "@heroui/react";
import { Info } from "lucide-react";

export default function PurchaseCard() {
  return (
    <div className="mt-8 px-4 w-full max-w-xl mx-auto ">
      <Card className="bg-[#141414] text-white rounded-xl border border-gray-700">
        <CardHeader className="flex flex-col items-center gap-4 text-center pt-8">
          <h2 className="text-4xl font-semibold">$35,000.00</h2>

          <Button
            variant="ghost"
            className="text-xs font-light px-8 py-3 flex items-center gap-2 cursor-pointer border-gray-600 border "
          >
            Exclusive Right
            <Info className="w-4 h-4 text-[#8338EC]" />
          </Button>
        </CardHeader>

        <CardBody className="px-6 pb-8 mt-12">
          <Button className="w-full  mx-auto text-lg rounded-full bg-[#8338EC] hover:bg-[#5b23a9] py-3 cursor-pointer">
            Buy Collection
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
