import { Router } from 'express'
import {titles, articles, contents} from './data'
const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users)
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

router.get('/titles', function (req, res, next) {
  res.json(titles)
})

router.get('/contents', function (req, res, next) {
  res.json(contents)
})

router.get('/articles', function (req, res, next) {
  res.json(articles)
})

export default router
