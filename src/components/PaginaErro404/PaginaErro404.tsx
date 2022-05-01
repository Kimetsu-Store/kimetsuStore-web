import React from 'react'
import imagem404Name from '../../assets/images/404.png'
import { GeneralContainer } from '../GeneralContainer'
import { paginaErro404UseStyles } from './PaginaErro404.styles'

const PaginaErro404: React.FC = () => {
  const classes = paginaErro404UseStyles()
  return (
    <GeneralContainer>
      <img
        className={classes.image}
        src={imagem404Name}
        alt="Página não encontrada"
      />
    </GeneralContainer>
  )
}

export default PaginaErro404
