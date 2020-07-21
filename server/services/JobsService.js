import { dbContext } from "../db/DbContext"

class JobsService {
  async edit(jobId, body) {
    try {
      return await dbContext.Jobs.findByIdAndUpdate(jobId, body, { new: true })
    } catch (error) {
      throw (error)
    }
  }
  async delete(jobId) {
    try {
      return await dbContext.Jobs.findByIdAndDelete(jobId)
    } catch (error) {
      throw (error)
    }
  }
  async create(body) {
    return await dbContext.Jobs.create(body)
  }
  async getOne(jobId) {
    try {
      return await dbContext.Jobs.findById(jobId)
    } catch (error) {
      throw (error)
    }
  }
  async getAll() {
    return await dbContext.Jobs.find()
  }


}

export const jobsService = new JobsService
