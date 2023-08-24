import { InputLabelProps } from "@mui/material";


export interface FormFieldProps {
    name: "nome"| "email"| "cpf"| "nascimento"| "endereco"| "endereco.estado"| "endereco.cidade"| "endereco.rua"| "endereco.numero";
    defaultValue?: string | number; 
    type?: string;
    InputLabelProps?: Partial<InputLabelProps> | undefined;
    label: string;
    helperText?: string | undefined;
  }