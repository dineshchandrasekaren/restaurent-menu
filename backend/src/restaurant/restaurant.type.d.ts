import { Document, Types } from "mongoose";

export interface IRestaurant {
  name: string;
  isActive: boolean;
  category: "veg" | "non-veg";
  price: number;
}

export type IRestaurantModel = IRestaurant & Document;
export type Id = Types.ObjectId | string;
