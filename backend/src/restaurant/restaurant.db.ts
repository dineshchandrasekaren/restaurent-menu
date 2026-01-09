import RestaurantModel from "./restaurant.model";
import type { Id, IRestaurant } from "./restaurant.type";

const getAllMenu = () => {
  return RestaurantModel.find().lean();
};

const getMenuById = (id: Id) => {
  return RestaurantModel.findById(id).lean();
};

const createMenu = async (data: IRestaurant) => {
  const restaurant = new RestaurantModel(data);
  return await restaurant.save();
};

const updateMenu = (id: Id, data: Partial<IRestaurant>) => {
  return RestaurantModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  }).lean();
};

const deleteMenu = (id: Id) => {
  return RestaurantModel.findByIdAndDelete(id).lean();
};

export default {
  getAllMenu,
  getMenuById,
  createMenu,
  updateMenu,
  deleteMenu,
};
