

export interface FormFieldProps {
    name: "nome"| "email"| "cpf"| "nascimento"| "endereco"| "endereco.estado"| "endereco.cidade"| "endereco.rua"| "endereco.numero";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: any;
    defaultValue?: string | number; 
    label: string;
    margin?: 'none' | 'dense' | 'normal'; 
    variant?: 'filled' | 'outlined' | 'standard'; 
    fullWidth?: boolean;
    helperText?: string | undefined;
    error?: boolean;
  }