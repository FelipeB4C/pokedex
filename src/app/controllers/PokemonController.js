import Pokemon from '../models/Pokemon'

class PokemonController {
  async index (req, res) {
    const pokemons = await Pokemon.findAll()
    return res.json(pokemons)
  }

  async findOne (req, res) {
    const pokemon = await Pokemon.findByPk(req.params.id)
    return res.json(pokemon)
  }

  async store (req, res) {
    const { originalname: pokeimg, filename: path } = req.file

    const { number, name, type, weakness, generation } = req.body

    const pokeExists = await Pokemon.findOne({ where: { number: req.body.number } })

    if (pokeExists) {
      return res.status(400).json({ error: 'Pokemón já existe' })
    }

    const request = await Pokemon.create({ number, name, type, weakness, generation, pokeimg, path })

    return res.json(request)
  }

  async delete (req, res) {
    const pokemon = await Pokemon.findByPk(req.params.id)

    await pokemon.destroy()

    return res.json({ mensagem: 'Pokémon apagado' })
  }
}

export default new PokemonController()
