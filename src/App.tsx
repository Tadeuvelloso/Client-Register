import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { userRegisterSchema } from "./schemas/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { PrimaryInputType } from "./interfaces/primaryInputProps";
import PrimaryInput from "./components/PrimaryInput";


function App() {
  const defaultDateValue = new Date();

  const methods = useForm({
    resolver: yupResolver(userRegisterSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data: PrimaryInputType) => {
    console.log('ola')
    console.log(JSON.stringify(data, null, 2));
  };


  return (
    <FormProvider {...methods}>
      <Main>
        <Paper elevation={20}>
         
            <Box px={3} py={2}>
              <Typography variant="h4" align="center" margin="dense">
                Cadastro
              </Typography>
              <Grid container spacing={1}>
                <PrimaryInput
                  name="nome"
                  control={control}
                  defaultValue=""
                  label="Nome completo"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  helperText={errors.nome?.message}
                  error={!!errors.nome}
                />
                <PrimaryInput
                  name="email"
                  control={control}
                  defaultValue=""
                  label="Email"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  helperText={errors.email?.message}
                  error={!!errors.email}
                />
                <Grid item xs={12} sm={12}>
                  <Controller
                    name="nascimento"
                    control={control}
                    defaultValue={defaultDateValue}
                    render={({ field }) => (
                      <TextField
                        id="date"
                        type="date"
                        label="Data de nascimento"
                        margin="dense"
                        variant="outlined"
                        fullWidth
                        error={!!errors.nascimento}
                        helperText={errors.nascimento?.message}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Typography align="left" margin="dense">
                  Endereço
                </Typography>
                <PrimaryInput
                  name="endereco.estado"
                  control={control}
                  defaultValue=""
                  label="Estado"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  helperText={errors.endereco?.estado?.message}
                  error={!!errors.endereco?.estado}
                />
              <PrimaryInput
                  name="endereco.cidade"
                  control={control}
                  defaultValue=""
                  label="Cidade"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  helperText={errors.endereco?.cidade?.message}
                  error={!!errors.endereco?.cidade}
                />
                <PrimaryInput
                  name="endereco.rua"
                  control={control}
                  defaultValue=""
                  label="Rua"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  helperText={errors.endereco?.rua?.message}
                  error={!!errors.endereco?.rua}
                />
                <PrimaryInput
                  name="endereco.numero"
                  control={control}
                  defaultValue={0}
                  label="numero"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  helperText={errors.endereco?.numero?.message}
                  error={!!errors.endereco?.numero}
                />
              </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  Registrar
                </Button>
            </Box>
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
