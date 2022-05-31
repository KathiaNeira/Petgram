import styled from 'styled-components'

export const ImageWrapper = styled.div`
  border-radius: 10px;
  height: 0;
  padding: 10px;
  height: 200px;
`

export const Image = styled.img`
  width: 100%;  
  height: 100%;
  object-fit: cover;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  svg {
    margin-right: 4px;
  }
`
