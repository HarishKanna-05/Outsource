import React from "react";
import { Button } from "@nextui-org/react";
import ProductNearby from "../globals/ProductNearby";

function Nearby() {
  return (
    <div className="w-[85%] mt-16 mb-8 m-auto">
      <div>
        <div className="text-base font-semibold">Explore</div>
        <div className="flex justify-between">
          <div>
            <div className="text-3xl py-2 font-bold">Nearby</div>
            <div className="text-sm">
              Discover the best rental options near you.
            </div>
          </div>
          <Button radius="full" variant="bordered" className="font-semibold">
            View All
          </Button>
        </div>
      </div>
      <ProductNearby />
    </div>
  );
}

export default Nearby;
