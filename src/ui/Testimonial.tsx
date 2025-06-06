"use client";
import { TestimonialCarousel } from "@/components/ui/testimonial";

const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: "VinRaymon Singhit",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    description:
      "Good machines with the best mechanism.",
  },
  {
    id: 2,
    name: "Daljeet Kaur",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    description: "Best imported gym equipment",
  },
  {
    id: 3,
    name: "Abhishek",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    description:
      "Exceptional quality and professionalism. Would definitely work with them again.",
  },
];

export default function TestimonialCarouselDemo() {
  return (
    <div className="flex flex-col items-center p-5 justify-center">
      <h1 className="lg:text-6xl text-4xl font-medium mb-10 text-center">Why They Choose Us</h1>

      <TestimonialCarousel
        testimonials={TESTIMONIAL_DATA}
        className="max-w-2xl mx-auto"
      />
    </div>
  );
}
