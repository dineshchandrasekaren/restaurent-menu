import { Router } from "express";
import {
  createMenu,
  deleteMenu,
  getAllMenu,
  getMenu,
  updateMenu,
} from "./restaurant.controller";

const router = Router();

router.route("/").get(getAllMenu).post(createMenu);
router.route("/:id").get(getMenu).put(updateMenu).delete(deleteMenu);
export default router;
