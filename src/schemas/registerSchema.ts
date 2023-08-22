import * as yup from 'yup';
import { PrimaryInput } from '../interfaces/primaryInputProps';
import moment from 'moment';

export const userRegisterSchema = yup.object<PrimaryInput>().shape({
    nome: 
    yup.string().min(3).required(),
    email: 
    yup.string().email().required(),
    cpf: 
    yup.number().min(10000000000, 'Precisa conter 11 Dígitos').max(99999999999, 'Precisa conter 11 Dígitos').required(),
    nascimento: 
    yup.date().required().max(moment().subtract(18, 'years'), 'Você precisa ter pelo menos 18 anos'),
});

