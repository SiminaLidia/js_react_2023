import React, { useEffect, useState } from 'react'
import { Card, Skeleton } from 'antd'
import moment from 'moment'
import { ButtonUI } from '../ui/ButtonUI/ButtonUI'
import { useNavigate } from 'react-router-dom'

export const Posts = () => {

  const navigation = useNavigate();

  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch('http://localhost:3900/posts')
      .then(res => res.json())
      .then(res => {
        console.log('fetch')
        if (res.ok && Array.isArray(res.posts) && res.posts.length > 0) {
          setTimeout(()=> {
            setPosts(res.posts)
            setLoading(false)
          }, 2000)
          
        }
      })

  }

  const goToPost = (id = '') => {
    if (id.length > 0 ) {
      navigation(`/post/${id}`)
    }
  }
  return (
    <div>

      {isLoading &&
        <Skeleton active />
      }
      {!isLoading && posts && Array.isArray(posts) &&
        posts.map((item, index) => {
          return <Card key={Math.random()} title={item.title}>
            <p style={{wordBreak: 'break-all'}}>{item.short_desc}</p>
            <span
              style={{color: '#959595'}}
            >{moment(item.create_date).format('DD.MM.YYYY HH:m:s')}</span>
            <br/>
            <br/>
            <ButtonUI label="Открыть" onClick={() => goToPost(item._id)}/>
          </Card>
        })
      }
    </div>
  )
}
