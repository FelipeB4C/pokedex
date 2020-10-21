import Sequelize, { Model } from 'sequelize'

class Pokemon extends Model {
  static init (sequelize) {
    super.init({
      number: Sequelize.INTEGER,
      name: Sequelize.STRING,
      pokeimg: Sequelize.STRING,
      path: Sequelize.STRING,
      url: {
        type: Sequelize.VIRTUAL,
        get () {
          return `http://localhost:3333/pokemons/${this.path}`
        }
      },
      type: Sequelize.STRING,
      weakness: Sequelize.STRING,
      generation: Sequelize.STRING
    }, {
      sequelize
    })
    return this
  }
}

export default Pokemon
