// Importando as funções que vamos testar diretamente no mesmo arquivo
function validarCNPJ(cnpj: string): boolean {
  const cnpjLimpo = cnpj.replace(/[^\d]+/g, '');
  return cnpjLimpo.length === 14;
}

interface Academia {
  nome: string;
  responsavel: string;
  cnpj: string;
  endereco: string;
  login: string;
  senha: string;
}

function cadastroAcademia(
  nome: string,
  responsavel: string,
  cnpj: string,
  endereco: string,
  login: string,
  senha: string
): { success: boolean; message: string } {
  if (!nome || !responsavel || !cnpj || !endereco || !login || !senha) {
      return { success: false, message: "Por favor, preencha todos os campos." };
  }

  if (!validarCNPJ(cnpj)) {
      return { success: false, message: "CNPJ inválido." };
  }

  // Cria e salva a nova academia
  const novaAcademia: Academia = { nome, responsavel, cnpj, endereco, login, senha };
  const academias: Academia[] = JSON.parse(localStorage.getItem("academias") || "[]");
  academias.push(novaAcademia);
  localStorage.setItem("academias", JSON.stringify(academias));

  return { success: true, message: "Academia cadastrada com sucesso!" };
}

// Mock de localStorage
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  key: jest.fn(),
  length: 0,
};

describe('Testes do formulário de cadastro', () => {

  it('Deve validar CNPJ corretamente', () => {
      expect(validarCNPJ('12.345.678/0001-95')).toBe(true);
      expect(validarCNPJ('12345678000195')).toBe(true);
      expect(validarCNPJ('12.345.678/0001-9')).toBe(false);
      expect(validarCNPJ('')).toBe(false);
  });

  it('Deve retornar erro se algum campo estiver vazio', () => {
      const resultado = cadastroAcademia('', 'Responsável', '12.345.678/0001-95', 'Endereço', 'login', 'senha');
      expect(resultado.success).toBe(false);
      expect(resultado.message).toBe('Por favor, preencha todos os campos.');
  });

  it('Deve retornar erro se o CNPJ for inválido', () => {
      const resultado = cadastroAcademia('Academia Teste', 'Responsável', '12.345.678/0001-9', 'Endereço', 'login', 'senha');
      expect(resultado.success).toBe(false);
      expect(resultado.message).toBe('CNPJ inválido.');
  });

  it('Deve salvar a academia quando todos os campos estiverem corretos', () => {
      const resultado = cadastroAcademia('Academia Teste', 'Responsável', '12.345.678/0001-95', 'Endereço', 'login', 'senha');
      
      expect(resultado.success).toBe(true);
      expect(resultado.message).toBe('Academia cadastrada com sucesso!');
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith(
          'academias',
          JSON.stringify([{ nome: 'Academia Teste', responsavel: 'Responsável', cnpj: '12.345.678/0001-95', endereco: 'Endereço', login: 'login', senha: 'senha' }])
      );
  });
});
