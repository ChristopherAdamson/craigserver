import { dbContext } from "../db/DbContext"


class CarsService {
  async edit(carId, carBody) {
    try {
      return await dbContext.Cars.findByIdAndUpdate(carId, carBody, { new: true })
    } catch (error) {
      throw (error)
    }
  }
  async delete(carId) {
    try {
      return await dbContext.Cars.findByIdAndDelete(carId)
    } catch (error) {
      throw (error)
    }
  }
  async create(carBody) {
    return await dbContext.Cars.create(carBody)

  }
  async getOne(carId) {
    try {
      return await dbContext.Cars.findById(carId)
    } catch (error) {
      throw (error)
    }

  }
  async getAll() {
    return await dbContext.Cars.find()
  }

}



export const carsService = new CarsService

