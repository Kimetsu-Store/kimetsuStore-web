import { Grid } from '@material-ui/core'
import { ChangeEvent, FC } from 'react'
import Compra from '../../../models/Compra/compra'
import DadosCep from '../../../models/DadosCep/dadosCep'
import { LabelComInput } from '../../LabelComInput'
import { formularioCompraUseStyles } from './FormularioCompra.styles'

interface Props {
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    propriedade: string
  ) => void
  compraDados: Compra
  cepDados: DadosCep
}

const FormularioCompra: FC<Props> = props => {
  const classes = formularioCompraUseStyles()
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={5} className={`${classes.item} ${classes.nome}`}>
        <LabelComInput
          idInput="nome-ipt"
          inputType="text"
          label="Nome Completo"
          onChange={e => props.onChange(e, 'nomeCliente')}
          required
          value={props.compraDados.nomeCliente}
          placeholder="Ex.: Maria da Silva"
        />
      </Grid>

      <Grid item xs={12} md={4} className={`${classes.item} ${classes.email}`}>
        <LabelComInput
          idInput="email-ipt"
          inputType="email"
          label="Email"
          onChange={e => props.onChange(e, 'email')}
          required
          value={props.compraDados.email}
          placeholder="Ex.: maria.silva@email.com"
        />
      </Grid>

      <Grid item xs={12} md={3} className={`${classes.item}`}>
        <LabelComInput
          idInput="cpf-ipt"
          inputType="number"
          label="Cpf"
          onChange={e => props.onChange(e, 'cpf')}
          required
          value={props.compraDados.cpf}
          placeholder="Ex.: 00000000000"
        />
      </Grid>

      <Grid item xs={12} md={3} className={`${classes.item} ${classes.cep}`}>
        <LabelComInput
          idInput="cep-ipt"
          inputType="number"
          label="Cep"
          onChange={e => props.onChange(e, 'cep')}
          required
          value={props.compraDados.cep}
          placeholder="Ex.: 00000000"
        />
      </Grid>

      <Grid item xs={9} md={9} className={`${classes.item} ${classes.rua}`}>
        <LabelComInput
          idInput="rua-ipt"
          inputType="text"
          label="Rua"
          onChange={e => props.onChange(e, 'rua')}
          required
          value={props.compraDados.rua}
          disabled={props.cepDados?.logradouro != null}
          placeholder="Ex.: Rua Azul"
        />
      </Grid>

      <Grid item xs={3} md={3} className={`${classes.item} ${classes.numero}`}>
        <LabelComInput
          idInput="numero-rua-ipt"
          inputType="number"
          label="Número"
          onChange={e => props.onChange(e, 'numeroRua')}
          required
          value={props.compraDados.numeroRua || ''}
          placeholder="Ex.: 562"
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={9}
        className={`${classes.item} ${classes.complemento}`}
      >
        <LabelComInput
          idInput="complemento-ipt"
          inputType="text"
          label="Complemento"
          onChange={e => props.onChange(e, 'complemento')}
          value={props.compraDados.complemento}
          placeholder="Ex.: Sala 90"
        />
      </Grid>

      <Grid item xs={12} md={6} className={`${classes.item} ${classes.bairro}`}>
        <LabelComInput
          idInput="bairro-ipt"
          inputType="text"
          label="Bairro"
          onChange={e => props.onChange(e, 'bairro')}
          required
          value={props.compraDados.bairro}
          disabled={props.cepDados?.bairro != null}
          placeholder="Ex.: Bairro Turqueza"
        />
      </Grid>

      <Grid item xs={12} md={6} className={`${classes.item} ${classes.cidade}`}>
        <LabelComInput
          idInput="cidade-ipt"
          inputType="text"
          label="Cidade"
          onChange={e => props.onChange(e, 'cidade')}
          required
          value={props.compraDados.cidade}
          disabled={props.cepDados?.localidade != null}
          placeholder="Ex.: Canoas"
        />
      </Grid>

      <Grid item xs={9} className={`${classes.item} ${classes.estado}`}>
        <LabelComInput
          idInput="estado-ipt"
          inputType="text"
          label="Estado"
          onChange={e => props.onChange(e, 'estado')}
          required
          value={props.compraDados.estado}
          disabled={props.cepDados?.uf != null}
          placeholder="Ex.: RS"
        />
      </Grid>

      <Grid item xs={3} className={`${classes.item} ${classes.pais}`}>
        <LabelComInput
          idInput="pais-ipt"
          inputType="text"
          label="País"
          onChange={e => props.onChange(e, 'pais')}
          disabled={true}
          value={props.compraDados.pais}
        />
      </Grid>
    </Grid>
  )
}

export default FormularioCompra
