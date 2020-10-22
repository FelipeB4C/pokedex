import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import PokemonController from './app/controllers/PokemonController'

const routes = new Router()
const upload = multer(multerConfig)

routes.post('/pokemons', upload.single('file'), PokemonController.store)
routes.get('/pokemons', PokemonController.index)
routes.get('/pokemons/:id', PokemonController.findOne)
routes.delete('/pokemons/:id', PokemonController.delete)
routes.put('/pokemons/:id', upload.single('file'), PokemonController.update)

export default routes
