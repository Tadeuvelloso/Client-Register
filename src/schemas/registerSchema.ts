import * as yup from 'yup';
import { PrimaryInputType } from '../interfaces/primaryInputProps';
import moment from 'moment';

export const userRegisterSchema = yup.object<PrimaryInputType>().shape({
    nome: 
    yup.string().min(3, 'O nome precisa ter pelo menos 3 caracteres').required('O nome é obrigatório'),
    email: 
    yup.string().email('Email inválido').required('O Email é obrigatório'),
    cpf: 
    yup.number().min(10000000000, 'Precisa conter 11 Dígitos').max(99999999999, 'Precisa conter 11 Dígitos').required('O CPF é obrigatório'),
    nascimento: 
    yup.date().required('A data de nascimento é obrigatória').max(moment().subtract(18, 'years'), 'Você precisa ter pelo menos 18 anos'),
    endereco: yup.object().shape({
        estado: yup.string().required('O estado é obrigatório'),
        cidade: yup.string().required('A cidade é obrigatória'),
        rua: yup.string().required('A rua é obrigatória'),
        numero: yup.number().min(1, 'informe um número valido').required('O número é obrigatório'),
      }),
});

