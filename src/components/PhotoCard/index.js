import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { ImageWrapper, Image, Button } from './styles'

export const PhotoCard = ({ id, src, likes }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImageWrapper>
          <Image src={src} />
        </ImageWrapper>
      </a>

      <Button>
        <MdFavoriteBorder /> {likes} likes!
      </Button>
    </article>
  )
}
