import { describe, it, expect, beforeEach, afterEach, vi, MockInstance } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from "../App"

describe('Formulário de Cadastro', () => {
  let logSpy: MockInstance<string[], void>;

  beforeEach(() => {
    logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it('deve renderizar o formulário de cadastro', async () => {
    render(<App />);
    expect(screen.getByText(/cadastro/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/cpf/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/data/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/estado/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/cidade/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/rua/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/numero/i)).toBeInTheDocument();
  });

  it('console.log deve ser chamado com os dados corretos quando o formulário é submetido', async () => {
    render(<App />);
    const user = userEvent.setup();


    await user.type(screen.getByLabelText(/nome/i), 'asdqq');
    await user.type(screen.getByLabelText(/email/i), 'asasf@asda.com');
    await user.type(screen.getByLabelText(/cpf/i), '12312312312');
    await user.type(screen.getByLabelText(/data/i), '1999-12-12'); 
    await user.type(screen.getByLabelText(/estado/i), 'sao paulo');
    await user.type(screen.getByLabelText(/cidade/i), 'floripa');
    await user.type(screen.getByLabelText(/rua/i), 'asdads');
    await user.type(screen.getByLabelText(/numero/i), '12');


    await user.click(screen.getByRole('button', { name: /registrar/i }));


    expect(logSpy).toHaveBeenCalled();

    const loggedObject = JSON.parse(logSpy.mock.calls[0][0]);
    expect(loggedObject).toEqual({
      nome: 'asdqq',
      email: 'asasf@asda.com',
      cpf: 12312312312,
      nascimento: '1999-12-12T02:00:00.000Z',
      endereco: {
        estado: 'sao paulo',
        cidade: 'floripa',
        rua: 'asdads',
        numero: 12
      }
    });
  });

  it('não deve submeter o formulário e chamar console.log se um campo obrigatório não for preenchido', async () => {
    render(<App />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/nome/i), 'Nome Teste');
    // Campo "email" não preenchido
    await user.type(screen.getByLabelText(/cpf/i), '12312312312');
    await user.type(screen.getByLabelText(/data/i), '2000-01-01');
    await user.type(screen.getByLabelText(/estado/i), 'Estado Teste');
    await user.type(screen.getByLabelText(/cidade/i), 'Cidade Teste');
    await user.type(screen.getByLabelText(/rua/i), 'Rua Teste');
    await user.type(screen.getByLabelText(/numero/i), '12');


    await user.click(screen.getByRole('button', { name: /registrar/i }));

    expect(logSpy).not.toHaveBeenCalled();
  });
});


