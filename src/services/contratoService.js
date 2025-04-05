import api from './api';

// STATUS CONTROLLER

// Atualizar um status existente
export const atualizarStatus = async (id, dados) => {
  return api.put(`/status/${id}`, dados);
};

// Deletar um status pelo ID
export const deletarStatus = async (id) => {
  return api.delete(`/status/${id}`);
};

// Cadastrar um novo status
export const criarStatus = async (dados) => {
  return api.post('/status/criarStatus', dados);
};

// Listar todos os status cadastrados
export const listarStatus = async () => {
  return api.get('/status/listarStatus');
};

// CONTRATO CONTROLLER

// Retorna um contrato pelo ID
export const buscarContrato = async (id) => {
  return api.get(`/contratos/${id}`);
};

// Atualizar um contrato
export const atualizarContrato = async (id, dados) => {
  return api.put(`/contratos/${id}`, dados);
};

// Deletar um contrato
export const deletarContrato = async (id) => {
  return api.delete(`/contratos/${id}`);
};

// Cadastrar um novo contrato
export const criarContrato = async (dados) => {
  return api.post('/contratos/criarContrato', dados);
};

// Atualizar apenas o status do contrato
export const atualizarStatusContrato = async (id, status) => {
  return api.patch(`/contratos/${id}/status`, { status });
};

// Retorna todos os contratos cadastrados
export const listarContratos = async () => {
  return api.get('/contratos/contratos');
};

// USUÁRIO CONTROLLER

// Login do usuário
export const loginUsuario = async (dados) => {
  return api.post('/usuario/login', dados);
};

// Criar um novo usuário
export const criarUsuario = async (dados) => {
  return api.post('/usuario/createUsuario', dados);
};

// Retornar todos os usuários cadastrados
export const listarUsuarios = async () => {
  return api.get('/usuario/usuarios');
};

// UTIL CONTROLLER

// Retorna todos os estados do Brasil e seus respectivos IDs
export const listarEstados = async () => {
  return api.get('/util/estados');
};

// Retorna todos os municípios de um estado específico pelo ID do estado
export const listarMunicipiosPorEstado = async (idEstado) => {
  return api.get(`/util/estados/${idEstado}/municipios`);
};

// Retorna informações de um CNPJ e verifica se é válido
export const buscarCnpj = async (cnpj) => {
  return api.get(`/util/cnpj/${cnpj}`);
};
