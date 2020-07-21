import BaseController from "../utils/BaseController";
import { houseservice } from "../services/HousesService";
import { jobsService } from "../services/JobsService";


export class JobsController extends BaseController {
  constructor() {
    super("api/jobs")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .post("", this.create)
      .delete("/:id", this.delete)
      .put("/:id", this.edit)
  }
  async getAll(req, res, next) {
    try {
      let jobs = await jobsService.getAll()
      res.send({ data: jobs, message: "Got the houses" })
    } catch (error) { next(error) }
  }
  async getOne(req, res, next) {
    try {
      let job = await jobsService.getOne(req.params.id)
      res.send({ data: job, message: "Got House" })
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      let job = await jobsService.create(req.body)
      res.send({ data: job, message: "Created a Job" })
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      let job = await jobsService.delete(req.params.id)
      res.send({ message: "Job Deleted" })
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let job = await jobsService.edit(req.params.id, req.body)
      res.send({ data: job, message: "Job Changed" })
    } catch (error) { next(error) }
  }
}