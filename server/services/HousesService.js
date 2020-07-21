import { dbContext } from "../db/DbContext"


class HousesService {
  async getOne(houseid) {
    return await dbContext.Houses.findById(houseid)
  }
  async delete(houseid) {
    return await dbContext.Houses.findByIdAndDelete(houseid)
  }
  async edit(houseid, housebody) {
    return await dbContext.Houses.findByIdAndUpdate(houseid, housebody, { new: true })
  }
  async create(houseData) {
    let house = await dbContext.Houses.create(houseData)
    return house
  }
  async getAll() {
    return await dbContext.Houses.find()
  }

}


export const houseservice = new HousesService()