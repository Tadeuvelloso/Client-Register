import { Box, Button, Grid, Paper, TextField, Typography, styled } from '@mui/material'
import { useForm } from 'react-hook-form';
import { userRegisterSchema } from './schemas/registerSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryInput } from './interfaces/primaryInputProps';



function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegisterSchema),
  })

  const onSubmit = (data: PrimaryInput) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <Main>
      <Paper elevation={20}>
        <Box px={3} py={2}>
          <Typography variant='h6' align='center' margin='dense'>
            Cadastro
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField id="nome" label="Nome completo" margin='dense' variant="outlined" {...register("nome")} fullWidth error={errors.nome ? true : false} />
              <Typography variant='inherit' color="textSecondary">
                {errors.nome?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField id="email" label="Email" margin='dense' variant="outlined" {...register("email")} fullWidth error={errors.email ? true : false} />
              <Typography variant='inherit' color="textSecondary">
                {errors.email?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField id="cpf" label="Cpf" margin='dense' variant="outlined" {...register("cpf")} fullWidth error={errors.cpf ? true : false} />
              <Typography variant='inherit' color="textSecondary">
                {errors.cpf?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField id="date" type='date' label="Data de nascimento" margin='dense' variant="outlined" {...register("nascimento")} fullWidth error={errors.nascimento ? true : false} InputLabelProps={{
                shrink: true
              }} />
              <Typography variant='inherit' color="textSecondary">
                {errors.nascimento?.message}
              </Typography>
            </Grid>
          </Grid>
          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Registrar
            </Button>
          </Box>
        </Box>
      </Paper>
    </Main>
  )
}

export default App

const Main = styled(Box)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
`
