import { Grid, TextField } from '@material-ui/core'
import { ChangeEvent, FC } from 'react'
import { labelComInputUseStyles } from './LabelComInput.styles'

interface Props {
  idInput: string
  label: string
  inputType: string
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  required?: boolean
  disabled?: boolean
  value: unknown
  placeholder?: string
}

const LabelComInput: FC<Props> = props => {
  const classes = labelComInputUseStyles()
  return (
    <Grid container className={classes.container}>
      <TextField
        id={props.idInput}
        label={props.label}
        variant="standard"
        onChange={e => props.onChange(e)}
        className={classes.textField}
        required={props.required}
        disabled={props.disabled}
        value={props.value}
        placeholder={props.placeholder}
      />
    </Grid>
  )
}

export default LabelComInput
