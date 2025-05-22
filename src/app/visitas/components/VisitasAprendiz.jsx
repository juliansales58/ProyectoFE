import { BasicButton, BasicTitle, DynamicForm, DynamicTable } from '@/lib'
import { Box, Button, Grid } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { columnsTableVisits, inputsSolicitVisit } from '../constants/visitasContants'

const VisitasAprendiz = () => {
  const form = useForm()
  const [isSoliciting, setIsSoliciting] = useState(false)

  return (
    <>
      <Box
        display='flex'
        width='100%'
        justifyContent='space-between'
        alignItems='center'
        flexDirection='row'
        p={10}
      >
        <BasicTitle
          title={isSoliciting ? 'Solicitar Visita' : 'Solicitudes'}
          onClick={isSoliciting ? () => setIsSoliciting(false) : undefined}
        />
        {!isSoliciting && (
          <BasicButton
            onClick={() => setIsSoliciting(true)}
            title='Solicitar'
          />
        )}
      </Box>

      {isSoliciting ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: 3,
          }}
        >
          <Grid
            container
            spacing={12}
            sx={{ width: '60%' }}
            justifyContent='center'
          >
            <DynamicForm
              control={form.control}
              inputs={inputsSolicitVisit}
            />
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                variant='contained'
                color='success'
                sx={{
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  boxShadow: 'none',
                  px: 3,
                  ml: 12,
                  py: 1,
                  '&:hover': {
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                Solicitar
              </Button>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box
          sx={{
            bgcolor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '95vh',
            p: 8,
            pb: 4,
            pt: 0,
          }}
        >
          <DynamicTable columns={columnsTableVisits} />
        </Box>
      )}
    </>
  )
}

export default VisitasAprendiz
