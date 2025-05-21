import { Button, Grid } from '@mui/material'
import { chooseInput } from './chooseInput'
import { Controller } from 'react-hook-form'

const DynamicForm = ({ inputs, control }) => {
  return (
    <>
      {inputs?.map((input) => {
        const Input = chooseInput[input?.type] || chooseInput.default
        return (
          <Grid
            key={input?.name}
            item
            xs={input?.xs ?? 12}
            sm={input?.sm ?? 6}
            md={input?.md ?? 6}
          >
            <Controller
              name={input?.name}
              control={control}
              rules={{
                required: input?.required ? 'Este campo es requerido' : false,
              }}
              defaultValue={input?.defaultValue ?? null}
              render={({ field, fieldState: { error } }) => {
                const { required, ...restItem } = input
                const label = `${input?.label ?? input?.textFieldProps?.label ?? ''} ${
                  required ? '*' : ''
                }`
                return (
                  <Input
                    {...field}
                    {...restItem}
                    onChange={input.onChange ? input.onChange : field.onChange}
                    error={!!error}
                    label={label}
                    textFieldProps={{
                      ...input?.textFieldProps,
                      label: label,
                      error: !!error,
                    }}
                  />
                )
              }}
            />
          </Grid>
        )
      })}
    </>
  )
}

export default DynamicForm
