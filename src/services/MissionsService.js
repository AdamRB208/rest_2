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

}

export const missionsService = new MissionsService()