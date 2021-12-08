const express= require('express')
const router= express.Router()
const VenueController= require('../controllers/VenueController')
const upload= require('../middlewares/FileUploadMiddleware')

router.post('/', upload.any(), VenueController.create)

module.exports= router    