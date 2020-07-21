import BaseController from "../utils/BaseController";
import { houseservice } from "../services/HousesService";

export class HousesController extends BaseController {

  constructor() {
    super("api/houses")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
    try {
      let car = await houseservice.getAll()
      res.send({ data: car, message: "Got Houses" })
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let houseData = req.body
      let house = await houseservice.create(houseData)
      res.send({ data: house, message: "House created!" })
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let house = await houseservice.edit(req.params.id, req.body)
      res.send({ data: house, message: "House Edited" })
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      let house = await houseservice.delete(req.params.id)
      res.send({ message: "Deleted!" })
    } catch (error) {
      next(error)
    }
  }
  async getOne(req, res, next) {
    try {
      let house = await houseservice.getOne(req.params.id)
      res.send({ data: house, message: "Selected House  " })
    } catch (error) {
      next(error)
    }
  }

}
