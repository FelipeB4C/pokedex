import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import PokemonController from './app/controllers/PokemonController'

const routes = new Router()
const upload = multer(multerConfig)

routes.post('/pokemons', upload.single('file'), PokemonController.store)

export default routes
