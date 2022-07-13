import { Button, Grid, IconButton, Snackbar } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { Color } from '@material-ui/lab'
import { useRouter } from 'next/router'
import React, { ChangeEvent, FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Footer, GeneralContainer, Header, TituloComBorda } from '../..'
import { useBuscarCepApi } from '../../../api/buscar_cep/buscar_cep-api'
import { CadastraNovaCompraResponse } from '../../../dtos/CadastraNovaCompra'
import { compraLivro } from '../../../ducks/livros'
import Compra from '../../../models/Compra/compra'
import DadosCep from '../../../models/DadosCep/dadosCep'
import { RootState } from '../../../store'
import { compraUseStyles } from './Compra.styles'
import FormularioCompra from './FormularioCompra'
import ResumoLivro from './ResumoLivro'

const ValidacaoDados = {
  TUDO_VALIDO: 'Válido',
  ERRO_QUANTIDADE: 'Quantidade inválida',
  ERRO_BAIRRO: 'Bairro inválido',
  ERRO_CEP: 'CEP inválido',
  ERRO_CIDADE: 'Cidade inválido',
  ERRO_ESTADO: 'Estado inválido',
  ERRO_LIVRO: 'Livro inválido',
  ERRO_NOME_CLIENTE: 'Nome inválido',
  ERRO_EMAIL_CLIENTE: 'Email inválido',
  ERRO_NUMERO_RUA: 'Número da rua inválido',
  ERRO_PAIS: 'País inválido',
  ERRO_RUA: 'Rua inválido'
}

interface Snackbar {
  mensagem: string
  tipo: Color
}

const PaginaInicial: FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const apiCep = useBuscarCepApi()
  const { livro } = useSelector((state: RootState) => state.livros)
  const [snackbar, setSnackbar] = useState<Snackbar>(null)

  if (livro === null) {
    router.push('/')
  }

  const initialCompra: Compra = {
    quandidadeDeLivros: 1,
    bairro: '',
    cep: '',
    cidade: '',
    estado: '',
    idLivro: livro?.id,
    nomeCliente: '',
    email: '',
    numeroRua: null,
    pais: 'Brasil',
    rua: '',
    complemento: '',
    cpf: ''
  }

  const [compra, setCompra] = useState(initialCompra)
  const [cepDados, setCepDados] = useState<DadosCep>(null)

  async function handleFormularioChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    propriedade: string
  ) {
    const valor = e.target.value

    switch (propriedade) {
      case 'quandidadeDeLivros':
        const quantidade = parseInt(valor)
        if (quantidade >= 0)
          setCompra({ ...compra, quandidadeDeLivros: quantidade })
        break
      case 'nomeCliente':
        setCompra({ ...compra, nomeCliente: valor })
        break
      case 'email':
        setCompra({ ...compra, email: valor })
        break
      case 'cep':
        if ((isNaN(parseInt(valor)) && valor !== '') || valor.length > 8) break

        if (valor.length === 8) {
          await obterDadosPorCep(valor)
        } else {
          setCompra({ ...compra, cep: valor })
          setCepDados(null)
        }
        break
      case 'cpf':
        if ((isNaN(parseInt(valor)) && valor !== '') || valor.length > 11) break

        setCompra({ ...compra, cpf: valor })
        break

      case 'rua':
        setCompra({ ...compra, rua: valor })
        break
      case 'numeroRua':
        if (isNaN(parseInt(valor)) && valor !== '') break

        setCompra({ ...compra, numeroRua: parseInt(valor) })
        break
      case 'bairro':
        setCompra({ ...compra, bairro: valor })
        break
      case 'cidade':
        setCompra({ ...compra, cidade: valor })
        break
      case 'estado':
        setCompra({ ...compra, estado: valor })
        break
      case 'complemento':
        setCompra({ ...compra, complemento: valor })
        break
      default:
        break
    }
  }

  async function obterDadosPorCep(cep: string) {
    const dados = await apiCep.obterDadosPorCep(cep)

    setCompra({
      ...compra,
      cep: cep,
      bairro: dados?.bairro || compra.bairro,
      cidade: dados?.localidade || compra.cidade,
      estado: dados?.uf || compra.estado,
      rua: dados?.logradouro || compra.rua
    })

    setCepDados({ ...dados })
  }

  const validaDados = () => {
    if (compra.quandidadeDeLivros <= 0) return ValidacaoDados.ERRO_QUANTIDADE
    if (compra.bairro.length === 0) return ValidacaoDados.ERRO_BAIRRO
    if (compra.cep.length === 0) return ValidacaoDados.ERRO_CEP
    if (compra.cidade.length === 0) return ValidacaoDados.ERRO_CIDADE
    if (compra.estado.length === 0) return ValidacaoDados.ERRO_ESTADO
    if (!compra.idLivro) return ValidacaoDados.ERRO_LIVRO
    if (compra.nomeCliente.length === 0) return ValidacaoDados.ERRO_NOME_CLIENTE
    if (compra.email.length === 0) return ValidacaoDados.ERRO_EMAIL_CLIENTE
    if (!compra.numeroRua) return ValidacaoDados.ERRO_NUMERO_RUA
    if (compra.pais.length === 0) return ValidacaoDados.ERRO_PAIS
    if (compra.rua.length === 0) return ValidacaoDados.ERRO_RUA

    return ValidacaoDados.TUDO_VALIDO
  }

  const handleConfirmarConta = () => {
    const validacao = validaDados()

    if (validacao === ValidacaoDados.TUDO_VALIDO) {
      const sucesso = (numero: string) => {
        setSnackbar({
          mensagem: `Compra número ${numero} realizada com sucesso!`,
          tipo: 'success'
        })
      }

      setCompra(initialCompra)

      const erro = () => {
        setSnackbar({
          mensagem: `Erro ao finalizar a compra`,
          tipo: 'error'
        })
      }
      dispatch(compraLivro(compra, sucesso, erro))
    } else {
      setSnackbar({ mensagem: validacao, tipo: 'error' })
    }
  }

  const classes = compraUseStyles()
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setSnackbar(null)}
      >
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  return (
    <Grid container>
      {livro && (
        <>
          <Header />

          <TituloComBorda titulo="Resumo do Pedido" />

          <GeneralContainer>
            <Grid container className={classes.container}>
              <Grid container className={classes.resumo}>
                <ResumoLivro
                  quantidade={compra.quandidadeDeLivros}
                  onChange={handleFormularioChange}
                />

                <Grid item xs={12} container className={classes.botaoDesktop}>
                  <Button
                    className={classes.botaoComprar}
                    onClick={handleConfirmarConta}
                  >
                    Confirmar comprar
                  </Button>
                </Grid>
              </Grid>

              <Grid container className={classes.formulario}>
                <FormularioCompra
                  onChange={handleFormularioChange}
                  compraDados={compra}
                  cepDados={cepDados}
                />

                <Grid item xs={12} container className={classes.botaoMobile}>
                  <Button
                    className={classes.botaoComprar}
                    onClick={handleConfirmarConta}
                  >
                    Confirmar comprar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </GeneralContainer>

          {snackbar && (
            <Snackbar
              open={snackbar !== null}
              onClose={() => setSnackbar(null)}
              message={snackbar.mensagem}
              action={action}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
          )}

          <Footer />
        </>
      )}
    </Grid>
  )
}

export default PaginaInicial
