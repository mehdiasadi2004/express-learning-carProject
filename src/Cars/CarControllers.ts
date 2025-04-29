import { Router, Request, Response, NextFunction } from "express";

import { validationMiddleware } from "../middlewares";
import { createNewCar, deleteCar, getAllCars, getOneCar, updateCar } from "./CarServices";
import { CreateCarDto } from "./dtos/CreateCarDto";
import RequestWithUser from "../types/RequestWithUser";
const router = Router();

router.get("/", async (req: any, res: Response, next: NextFunction) => {
  try {
    const result = await getAllCars();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id  = req.params.id;
      const result = await getOneCar(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validationMiddleware(CreateCarDto),
  async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const data: CreateCarDto = req.body;
      const result = await createNewCar(data);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  async (req: RequestWithUser, res: Response, next: NextFunction) => {
     try {
      const data: CreateCarDto = req.body;
      const id = req.params.id;
      const result = await updateCar(data,id);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const result = await deleteCar(id);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
