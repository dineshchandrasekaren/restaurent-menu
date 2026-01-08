import CustomError from "../utils/customError.util";
import restaurantDb from "./restaurant.db";
import type { Id, IRestaurant } from "./restaurant.type";

export const createMenu = async (data: IRestaurant) => {
  if (data.name && data.category && data.price) {
    return await restaurantDb.createOne(data);
  } else {
    throw new CustomError("Please give all the informations", 400);
  }
};

export const getAllMenu = async () => await restaurantDb.getAll();

export const getMenuById = async (id: Id) => {
  if (id) {
    return await restaurantDb.getOne(id);
  } else {
    throw new CustomError("Please provide a menu id", 400);
  }
};

export const updateMenuById = async (id: Id, data: Partial<IRestaurant>) => {
  if (id && Object.keys(data).length) {
    return await restaurantDb.updateOne(id, data);
  } else {
    throw new CustomError(
      "Please provide a id and atleast one field to update",
      400
    );
  }
};

export const deleteMenuById = async (id: Id) => {
  if (id) {
    return await restaurantDb.deleteOne(id);
  } else {
    throw new CustomError("Please provide a menu id to delete", 400);
  }
};

export default {
  updateMenuById,
  createMenu,
  deleteMenuById,
  getAllMenu,
  getMenuById,
};
