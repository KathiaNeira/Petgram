import React from 'react'
import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'

export const App = () => {
  return (
    <>
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCard />
    </>
  )
}
