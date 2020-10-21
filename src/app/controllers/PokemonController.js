import Pokemon from '../models/Pokemon'

class PokemonController {
  async store (req, res) {
    const { originalname: pokeimg, filename: path } = req.file

    const { name, type, weakness, generation } = req.body

    const request = await Pokemon.create({ name, type, weakness, generation, pokeimg, path })

    return res.json(request)
  }
}

export default new PokemonController()
