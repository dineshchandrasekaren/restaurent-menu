import CustomError from "../utils/customError.util";
import restaurantDb from "./restaurant.db";
import type { Id, IRestaurant } from "./restaurant.type";

export const createMenu = async (data: IRestaurant) => {
  if (data.name && data.category && data.price === undefined) {
    return await restaurantDb.createMenu(data);
  } else {
    throw new CustomError("Please give all the informations", 400);
  }
};

export const getAllMenu = async () => await restaurantDb.getAllMenu();

export const getMenuById = async (id: Id) => {
  if (id) {
    const menu = await restaurantDb.getMenuById(id);
    if (!menu) throw new CustomError("Menu not found.", 404);
  } else {
    throw new CustomError("Please provide a menu id", 400);
  }
};

export const updateMenuById = async (id: Id, data: Partial<IRestaurant>) => {
  if (id && Object.keys(data).length) {
    const updatedMenu = await restaurantDb.updateMenu(id, data);
    if (!updatedMenu) throw new CustomError("Menu not found.", 404);
  } else {
    throw new CustomError(
      "Please provide a id and atleast one field to update",
      400
    );
  }
};

export const deleteMenuById = async (id: Id) => {
  if (id) {
    const deletedMenu = await restaurantDb.deleteMenu(id);
    if (!deletedMenu) throw new CustomError("Menu not found.", 404);
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
