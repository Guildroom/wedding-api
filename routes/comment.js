const express = require('express')
const router = express.Router()
const commentmodels = require('../models/comment')

router.get('/', async (req,res)=>{
    try {
        const commentsmodels = await commentmodels.find()
        res.json(commentsmodels)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
})

router.post('/', async (req, res) => {
    const commentsmodels = new commentmodels({
        name: req.body.name,
        comment: req.body.comment
    })
    try {
        const newCommentmodels = await commentsmodels.save()
        res.status(201).json(newCommentmodels)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await res.userModels.remove()
        res.json({ message: 'Deleted User' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
  })


module.exports = router