import { makeStyles } from '@material-ui/core'

export const resumoLivroUseStyles = makeStyles(() => ({
  container: {
    height: 'fit-content',
    padding: 30,
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    flexWrap: 'nowrap',
    gap: 30,
    width: 'fit-content',
    maxWidth: 500,
    marginBottom: 30
  },
  imagemContainer: {
    width: 110,
    height: 120,
    borderRadius: 5,
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
  },
  imagem: {
    width: '100%',
    height: '100%',
    borderRadius: 5
  },
  informações: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  qtdEPreco: {
    alignItems: 'flex-end',
    gap: 10
  },
  titulo: {
    fontSize: 20
  },
  autor: {
    fontSize: 14,
    alignSelf: 'flex-start'
  },
  input: {
    border: '1px solid black',
    borderRadius: 5,
    padding: '0 10px',
    width: 100
  },
  inputUnderline: {
    borderBottom: 'none'
  },
  qtdLabel: {},
  preco: {
    fontSize: 22,
    alignSelf: 'center'
  }
}))
