import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";

export class MissionsController extends BaseController {
  constructor() {
    super('api/missions')
    this.router
      .get('', this.getMissions)
      .put('/:missionId', this.updateMission)
      .post('', this.createMission)
  }

  async getMissions(request, response, next) {
    try {
      const missions = await missionsService.getMissions()
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }

  async createMission(request, response, next) {
    try {
      const missionData = request.body
      const mission = await missionsService.createMission(missionData)
      response.send(mission)
    } catch (error) {
      next(error)
    }
  }

  async updateMission(request, response, next) {
    try {
      const missionId = request.params.missionId
      const missionToUpdate = request.body
      const mission = await missionsService.updateMission(missionId, missionToUpdate)
      response.send(mission)
    } catch (error) {
      next(error)
    }
  }
}