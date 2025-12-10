const formConfig = {
  // Provider options: 'rd-station', 'custom-endpoint', 'none'
  provider: 'rd-station', 
  
  rdStation: {
    token: '1f8c12a5a4fffa12fa0a913e76d237f9',
    formId: 'leads-c012a1399ae98558e6da'
  },
  
  fields: [
    { name: 'nome', label: 'Nome', type: 'text', required: true, placeholder: 'Seu nome' },
    { name: 'email', label: 'E-mail', type: 'email', required: true, placeholder: 'seuemail@exemplo.com' },
    { name: 'telefone', label: 'Telefone', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
    { name: 'mensagem', label: 'Mensagem', type: 'textarea', required: true, placeholder: 'Digite sua mensagem' }
    { name: 'id_projeto', label: 'Projeto', type: 'tex', required: true, placeholder: 'Digite sua mensagem' }

  ],

  messages: {
    successTitle: 'Mensagem Enviada!',
    successText: 'Obrigado pelo seu contato. Recebemos sua mensagem e retornaremos em breve.',
    loadingText: 'ENVIANDO...',
    submitText: 'ENVIAR MENSAGEM'
  }
};
