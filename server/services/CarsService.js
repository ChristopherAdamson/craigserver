import { dbContext } from "../db/DbContext"


class CarsService {
  delete(id) {
    throw new Error("Method not implemented.")
  }
  async create(carBody) {
    return await dbContext.Cars.create(carBody)

  }
  async getOne(carId) {
    return await dbContext.Cars.findById(carId)
  }
  async getAll() {
    return await dbContext.Cars.find()
  }

}



export const carsService = new CarsService

