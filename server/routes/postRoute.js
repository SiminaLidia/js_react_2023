import express from 'express'
import Post from '../db/schemas/postSchema.js'

const router = express.Router()

router.get('/posts', async (req, res) => {
  const response = {
    ok: false,
    errMsg: 'Ошибка получения постов'
  }

  try {
    const posts = await Post.find({})

    response.ok = true
    response.errMsg = ''
    response.posts = posts || []

    res.status(200).json(response).send()
  } catch (error) {
    res.status(400).json(response).send()
  }
})

router.get('/post/:id', async (req, res) => {
  const response = {
    ok: false,
    errMsg: 'Ошибка получения поста'
  }

  const { id } = req.params

  try {
    const post = await Post.findOne({ '_id': id })

    response.ok = true
    response.errMsg = ''
    response.post = post || []

    res.status(200).json(response).send()
  } catch (error) {
    res.status(400).json(response).send()
  }
})

router.post('/post/add', async (req, res) => {
  const response = {
    ok: false,
    errMsg: 'Ошибка при добавлении поста'
  }

  try {
    const post = new Post({
      title: "Hellow World",
      short_desc: "Lorem ipsum",
      full_desc: "Lorem qweasdjjghghghg",
      create_date: new Date()
    })

    await post.save()

    response.ok = true
    response.errMsg = ''
    response.postId = post._id.toString() // post.get('_id')
    res.status(200).json(response).send()

  } catch (error) {
    res.status(400).json(response).send()
  }
})

router.put('/post/:id/update', async (req, res) => {
  const response = {
    ok: false,
    errMsg: 'Ошибка обления поста'
  }

  const { id } = req.params

  try {
    const post = await Post.findOne({ '_id': id })

    post.short_desc = '63fc51c11465486313bf2cd263fc51c11465486313bf2cd263fc51c11465486313bf2cd263fc51c11465486313bf2cd263fc51c11465486313bf2cd2'
    
    await post.save()
    
    response.ok = true
    response.errMsg = ''
    response.post = post || []

    res.status(200).json(response).send()
  } catch (error) {
    res.status(400).json(response).send()
  }
})

export default router