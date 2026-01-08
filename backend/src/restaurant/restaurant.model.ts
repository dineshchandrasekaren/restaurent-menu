import { model, Schema } from "mongoose";
import type { IRestaurantModel } from "./restaurant.type";

const RestaurantSchema = new Schema<IRestaurantModel>(
  {
    name: {
      type: String,
      minLength: [6, "Name must have atleast 6 characters."],
      maxLength: [100, "Name can upto 100 characters."],
      required: [true, "Name is required."],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required."],
      enum: ["veg", "non-veg"],
    },
    price: {
      type: Number,
      required: [true, "Price is required."],
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const RestaurantModel = model<IRestaurantModel>("restaurant", RestaurantSchema);

export default RestaurantModel;
