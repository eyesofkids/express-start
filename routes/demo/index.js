import express from 'express'
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res
    .status(200)
    .json({ status: 'success', message: 'Express(path: /api/demo)' })
})

export default router
