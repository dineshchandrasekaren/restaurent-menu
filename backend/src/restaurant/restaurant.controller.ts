import type { Request, Response } from "express";
import asynchronous from "../middlewares/async.middleware";
import { ResponseHandler } from "../utils/handler.util";
import restaurantService from "./restaurant.service";

export const getAllMenu = asynchronous(async (_: Request, res: Response) => {
  const data = await restaurantService.getAllMenu();
  res.status(200).json(new ResponseHandler(data));
});

export const createMenu = asynchronous(async (req: Request, res: Response) => {
  const { name, isActive, category, price } = req.body;
  const data = await restaurantService.createMenu({
    name,
    isActive,
    category,
    price,
  });
  res.status(201).json(new ResponseHandler(data));
});

export const updateMenu = asynchronous(async (req: Request, res: Response) => {
  const { id = "" } = req.params;
  const data = req.body;
  const newMenu = await restaurantService.updateMenuById(id, data);
  res.status(200).json(new ResponseHandler(newMenu));
});

export const deleteMenu = asynchronous(async (req: Request, res: Response) => {
  const { id = "" } = req.params;
  const data = await restaurantService.deleteMenuById(id);
  res.status(200).json(new ResponseHandler(data));
});

export const getMenu = asynchronous(async (req: Request, res: Response) => {
  const { id = "" } = req.params;
  const data = await restaurantService.getMenuById(id);
  res.status(200).json(new ResponseHandler(data));
});
