const { default: BaseController } = require("../utils/BaseController");
const { carsService } = require("../services/CarsService");


export class CarsController extends BaseController {
  constructor() {
    super("api/cars")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .post("", this.create)
      .delete("/:id", this.delete)
      .put("/:id", this.edit)
  }
  async getAll(req, res, next) {
    try {
      let cars = await carsService.getAll()
      res.send({ data: cars, message: "Got all Cars" })
    } catch (error) { next(error) }
  }
  async getOne(req, res, next) {
    try {
      let car = await carsService.getOne(req.params.id)
      res.send({ data: car, message: "Got a car!" })
    } catch (error) { next(error) }
  }
  async create(req, res, next) {
    try {
      let car = await carsService.create(req.body)
      res.send({ data: car, message: "Car Created" })
    } catch (error) { next(error) }
  }
  async delete(req, res, next) {
    try {
      let car = await carsService.delete(req.params.id)
      res.send({ message: "Car Deleted" })
    } catch (error) { next(error) }
  }
  async edit(req, res, next) {
    try {
      let updatedCar = await carsService.edit(req.params.id, req.body)
      res.send({ data: updatedCar, message: "Car Edited!" })
    } catch (error) { next(error) }
  }
}
