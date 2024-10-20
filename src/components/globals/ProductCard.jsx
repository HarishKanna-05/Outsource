import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Heart } from "lucide-react"
import { useState } from 'react'


function ProductCard() {

  const [isLiked, setIsLiked] = useState(false)

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div>
      <Card isPressable onPress={() => console.log("item pressed")} className="py-4">
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={200}
            height={200}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <Button
            isIconOnly
            aria-label={isLiked ? "Unlike" : "Like"}
            variant="light"
            onPress={toggleLike}
            className={`
              absolute
              right-4
              group
              transition-all
              duration-300
              hover:bg-pink-100
              active:bg-pink-200
              ${isLiked ? 'text-pink-500' : 'text-gray-500'}
            `}
          >
            <Heart
              className={`
                w-6
                h-6
                transition-all
                duration-300
                ${isLiked ? 'fill-current' : 'fill-none'}
                group-hover:scale-110
                group-active:scale-95
              `}
            />
          </Button>
          <div className="text-md uppercase font-extrabold">JBL Headset</div>
          <div className="text-sm">Headset</div>
          <div className="font-bold text-xl">₹ 100/hr</div>
          <div className="text-sm">Anna Nagar</div>
        </CardHeader>
      </Card>
    </div>
  )
}

export default ProductCard