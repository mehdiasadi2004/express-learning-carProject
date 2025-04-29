import ServerError from "../errors/serverError";
import productsModel from "../models/carsModel";
import { CreateCarDto } from "./dtos/CreateCarDto";



export const getAllCars = async () => {
  const result = await productsModel.find();
  return result;
};

export const getOneCar = async (id: string) => {
  const result = await productsModel.findById(id);
  if (!result) {
    throw new ServerError(404, "Product not found");
  }
  return result;
};

export const createNewCar = async (data: CreateCarDto) => {
  const result = await productsModel.create(data);
  return result;
};

export const updateCar = async (data: CreateCarDto, id: string) => {
  const product = await productsModel.findOne({ _id: id});
  if (!product) {
    throw new ServerError(404, "Product not found");
  }

  const result = await productsModel.updateOne({ _id: id }, { $set: data });

  return result;
};

export const deleteCar = async (id: string) => {
  const product = await productsModel.findOne({ _id: id });
  if (!product) {
    throw new ServerError(404, "Product not found");
  }
  const result = await productsModel.deleteOne({ _id: id });

  return result;
};
