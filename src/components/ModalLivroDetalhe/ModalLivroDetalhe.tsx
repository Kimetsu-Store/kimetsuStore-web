import { Button, Grid, Modal, Typography } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fecharModal } from '../../ducks/livros'
import { RootState } from '../../store'
import { formatarParaReais, obterDiaMesAnoCompleto } from '../../utils'
import { modalLivroDetalheUseStyles } from './ModalLivroDetalhe.styles'

const ModalLivroDetalhe: React.FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { modalDetalhesAberta, livro } = useSelector(
    (state: RootState) => state.livros
  )

  const handleFechar = () => {
    dispatch(fecharModal())
  }

  const handleComprar = () => {
    handleFechar()
    router.push('/compra')
  }

  const classes = modalLivroDetalheUseStyles()

  return (
    <Modal open={modalDetalhesAberta} onClose={handleFechar}>
      <Grid item container className={classes.container}>
        <Grid container className={classes.header}>
          <Typography className={classes.titulo}>{livro?.titulo}</Typography>
          <Close
            className={classes.iconeFechar}
            onClick={() => handleFechar()}
          />
        </Grid>

        <Grid container className={classes.conteudo}>
          <Grid container className={classes.imagemEPrecoContainer}>
            <Grid container className={classes.imagemContainer}>
              <img
                src={livro?.capa}
                alt="Imagem do livro"
                className={classes.imagem}
              />
            </Grid>

            <Grid container className={classes.compraContainer}>
              <Typography className={classes.preco}>
                {formatarParaReais(livro?.preco)}
              </Typography>

              <Button className={classes.botaoComprar} onClick={handleComprar}>
                Comprar
              </Button>
            </Grid>
          </Grid>

          <Grid container className={classes.informacoes}>
            <Grid container className={classes.informacao}>
              <Typography className={classes.labelInfo}>Autores:</Typography>
              <Typography>{livro?.autor.nome}</Typography>
            </Grid>

            <Grid container className={classes.informacao}>
              <Typography className={classes.labelInfo}>
                Data de publicação:
              </Typography>
              <Typography>
                {obterDiaMesAnoCompleto(livro?.dataDePublicacao.toString())}
              </Typography>
            </Grid>

            <Grid container className={classes.informacao}>
              <Typography className={classes.labelInfo}>
                Número de páginas:
              </Typography>
              <Typography>{livro?.paginas}</Typography>
            </Grid>

            <Grid container className={classes.informacao}>
              <Typography className={classes.labelInfo}>ISBN:</Typography>
              <Typography>{livro?.isbn}</Typography>
            </Grid>

            <Grid container className={classes.informacao}>
              <Typography className={classes.labelInfo}>Sumário:</Typography>
              <Typography className={classes.sumario}>
                {livro?.sumario}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  )
}

export default ModalLivroDetalhe
