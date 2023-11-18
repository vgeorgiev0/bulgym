import { StaticImageData } from "next/image";

export interface Testimonial {
  id: number;
  name: string;
  designation: string;
  image: StaticImageData;
  content: string;
}
