import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"

class MissionsService {
  async getMissions() {
    const missions = await dbContext.Missions.find().populate('location').populate('rat', '-name -picture')
    return missions
  }

  async createMission(missionData) {
    const mission = await dbContext.Missions.create(missionData)
    await mission.populate('rat', '-name -picture')
    await mission.populate('location')
    return mission
  }

  async getMissionByRatId(ratId) {
    const mission = await dbContext.Missions.find({ ratId: ratId }).populate('rat', '-name -picture')
    return mission
  }

  async getMissionByLocationId(locationId) {
    const mission = await dbContext.Missions.find({ locationId: locationId }).populate('location').populate('rat', '-name -picture')
    return mission
  }

  async updateMission(missionId, updateData) {
    const missionToUpdate = await dbContext.Missions.findById(missionId).populate('location').populate('rat', '-name -picture')
    if (missionToUpdate == null) {
      throw new BadRequest(`Invalid mission Id: ${missionId}`)
    }
    missionToUpdate.completed = updateData.completed
    await missionToUpdate.save()
    return missionToUpdate
  }
}

export const missionsService = new MissionsService()