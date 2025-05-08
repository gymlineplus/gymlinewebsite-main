"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-unresolved */


import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Treadmills,
  ExcerciseBikes,
  EllipticalTrainers,
} from "@/lib/CardioProductss";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const page = () => {
  return (
    <section className="py-12 flex items-center justify-center mt-18 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Cardio Equipment
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Elevate your heart rate and boost your endurance with our premium
              selection of cardio equipment.
            </p>
          </div>
        </div>
        {/* hunter Series Products */}
        {Treadmills.length > 0 && (
          <div className="flex items-center justify-between mt-8 mb-4">
            <h3 className="text-xl font-semibold">Our Treadmills</h3>
            <Link href="#" className="text-blue-500 hover:underline">
              View All
            </Link>
          </div>
        )}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {Treadmills.slice(0, 8).map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden border-0 shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                {product.featured && (
                  <Badge className="absolute left-2 top-2 bg-red-500 hover:bg-red-600">
                    Featured
                  </Badge>
                )}
              </div>
              <Link href={`/cardio/${product.sku}`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        {product.category}
                      </p>
                      <h3 className="font-semibold text-lg mt-1 line-clamp-2">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  <p className="line-clamp-1 text-sm text-gray-500 mt-2">
                    {product.description}
                  </p>
                </CardContent>
              </Link>
              <CardFooter className="p-4 pt-0" />
            </Card>
          ))}
        </div>
        {/* Endurance Plus Series Products */}
        {ExcerciseBikes.length > 0 && (
          <div id="spin-bikes" className="flex items-center justify-between mt-8 mb-4">
            <h3 className="text-xl font-semibold">Excercise Bikes</h3>
            <Link href="#" className="text-blue-500 hover:underline">
              View All
            </Link>
          </div>
        )}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {ExcerciseBikes.slice(0, 8).map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden border-0 shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                {product.featured && (
                  <Badge className="absolute left-2 top-2 bg-red-500 hover:bg-red-600">
                    Featured
                  </Badge>
                )}
              </div>
              <Link href={`/cardio/${product.sku}`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        {product.category}
                      </p>
                      <h3 className="font-semibold text-lg mt-1 line-clamp-2">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  <p className="line-clamp-1 text-sm text-gray-500 mt-2">
                    {product.description}
                  </p>
                </CardContent>
              </Link>
              <CardFooter className="p-4 pt-0" />
            </Card>
          ))}
        </div>
        {/* Hulk Series Products */}
        {EllipticalTrainers.length > 0 && (
          <div id="cross-trainer" className="flex items-center justify-between mt-8 mb-4">
            <h3 className="text-xl font-semibold">Elliptical Trainers</h3>
            <Link href="#" className="text-blue-500 hover:underline">
              View All
            </Link>
          </div>
        )}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {EllipticalTrainers.slice(0, 4).map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden border-0 shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                {product.featured && (
                  <Badge className="absolute left-2 top-2 bg-red-500 hover:bg-red-600">
                    Featured
                  </Badge>
                )}
              </div>
              <Link href={`/cardio/${product.sku}`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        {product.category}
                      </p>
                      <h3 className="font-semibold text-lg mt-1 line-clamp-2">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  <p className="line-clamp-1 text-sm text-gray-500 mt-2">
                    {product.description}
                  </p>
                </CardContent>
              </Link>
              <CardFooter className="p-4 pt-0" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
