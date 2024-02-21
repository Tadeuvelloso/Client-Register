import { Box, Button, Grid, Paper, Typography, styled, useMediaQuery } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { userRegisterSchema } from "./schemas/registerSchema";
import { PrimaryInputType } from "./interfaces/primaryInputProps";
import PrimaryInput from "./components/PrimaryInput";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
  const methods = useForm({
    resolver: yupResolver(userRegisterSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: PrimaryInputType) => {

    const formattedData = {
      ...data,
      cpf: String(data.cpf),
      nascimento: data.nascimento.toISOString().split('T')[0], 
      endereco: {
        ...data.endereco,
        numero: String(data.endereco.numero), 
      }
    };

    console.log(formattedData);
  };
  

  const isScreenAbove900px = useMediaQuery('(min-width: 900px)');

  return (
    <FormProvider {...methods}>
      <Main>
        <Paper elevation={20}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box px={3} py={2}>
              <Typography variant="h4" align="center" margin="dense">
                Cadastro
              </Typography>
              <PrimaryInput name="nome" label="Nome" />
              <PrimaryInput name="email" label="Email" />
              <PrimaryInput name="cpf" label="Cpf" />
              <PrimaryInput
                name="nascimento"
                label="Data"
                type="date"
                InputLabelProps={{ shrink: true }}
              />
              <Typography align="center" margin="dense"  marginTop={2}>
                Endereço
              </Typography>
              <Grid container justifyContent={"center"} marginBottom={2}>
                <Grid xs={isScreenAbove900px ? 12 : 5.5} sm={isScreenAbove900px ? 12 : 5.5} >
                  <PrimaryInput name="endereco.estado" label="Estado" />
                </Grid>
                <Grid sm={isScreenAbove900px ? 12 : 5.5} xs={isScreenAbove900px ? 12 : 5.5} marginLeft={isScreenAbove900px ? 0 : 2}>
                  <PrimaryInput name="endereco.cidade" label="Cidade" />
                </Grid>
                <Grid xs={isScreenAbove900px ? 12 : 8.5} sm={isScreenAbove900px ? 12 : 8} >
                  <PrimaryInput name="endereco.rua" label="Rua" />
                </Grid>
                <Grid xs={isScreenAbove900px ? 12 : 3} sm={isScreenAbove900px ? 12 : 3} marginLeft={isScreenAbove900px ? 0 : 2}>
                  <PrimaryInput name="endereco.numero" label="Numero" />
                </Grid>
              </Grid>
              <Button variant="contained" color="primary" type="submit">
                Registrar
              </Button>
            </Box>
          </form>
        </Paper>
      </Main>
    </FormProvider>
  );
}

export default App;

const Main = styled(Box)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
`;
