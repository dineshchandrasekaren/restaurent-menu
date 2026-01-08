import RestaurantModel from "./restaurant.model";
import type { Id, IRestaurant } from "./restaurant.type";

const getAll = () => {
  return RestaurantModel.find();
};

const getOne = (id: Id) => {
  return RestaurantModel.findById(id);
};

const createOne = async (data: IRestaurant) => {
  const restaurant = new RestaurantModel(data);
  return await restaurant.save();
};

const updateOne = (id: Id, data: Partial<IRestaurant>) => {
  return RestaurantModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

const deleteOne = (id: Id) => {
  return RestaurantModel.findByIdAndDelete(id);
};

export default {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};
