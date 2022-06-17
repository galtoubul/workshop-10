const { Player, Salary } = require("../db/models");

class StorageService {
  getPlayers = () => Player.findAll();

  getPlayer = async (player_id) => {
    return await Player.findOne({ where: { player_id } });
    //TODO 1: Use Player sequelize model to retrieve the specific player
  };

  createPlayer = async (player) => {
    //TODO 2: Use Player sequelize model to create a player
    await Player.create(player);
  };

  createSalary = async (salary) => {
    await Salary.create(salary);
  };

  getSalary = async (salary_id) => {
    // return await Salary.findOne({ where: { id: salary_id } });
    return await Salary.findByPk(salary_id, { include: Player });
    //TODO 5: Use Salary sequelize model to get salary
  };
}

module.exports = new StorageService();
