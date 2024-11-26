// clientes 
let clientes = [
    { id: 1, nome: 'Fernando', email: 'fernando@gmail.com' },
    { id: 2, nome: 'FulanodeTal', email: 'fulano@gmail.com' }
  ];
  
  // Exporta as rotas para serem usadas no app
  module.exports = (app) => {
    
    // Rota para obter todos os clientes
    app.get('/api/clientes', (req, res) => {
      // Retorna a lista de clientes em formato JSON
      res.json(clientes);
    });
  
    // Rota para obter um cliente específico pelo ID
    app.get('/api/clientes/:id', (req, res) => {
      // Busca o cliente pelo ID
      const cliente = clientes.find(c => c.id === parseInt(req.params.id));
      
      // Encontrar o cliente
      if (cliente) {
        res.json(cliente);
      } else {
        res.status(404).send('Cliente não encontrado');
      }
    });
  
    // Rota para adicionar um novo cliente
    app.post('/api/clientes', (req, res) => {
      // Pega os dados do cliente enviados no corpo da requisição
      const cliente = req.body;
      
      // Cria um novo ID para o cliente e adiciona ao array
      cliente.id = clientes.length + 1;
      clientes.push(cliente);
      
      res.status(201).json(cliente);
    });
  
    // Rota para atualizar os dados de um cliente
    app.put('/api/clientes/:id', (req, res) => {
      // Busca o cliente pelo ID
      const cliente = clientes.find(c => c.id === parseInt(req.params.id));
  
      // Se o cliente for encontrado, atualiza os dados
      if (cliente) {
        cliente.nome = req.body.nome || cliente.nome;
        cliente.email = req.body.email || cliente.email;
        res.json(cliente);  // Retorna o cliente atualizado
      } else {
        res.status(404).send('Cliente não encontrado');  // Retorna erro se não encontrar
      }
    });
  
    // Rota para excluir um cliente
    app.delete('/api/clientes/:id', (req, res) => {
      // Filtra o cliente a ser removido do array
      clientes = clientes.filter(c => c.id !== parseInt(req.params.id));
      
      res.status(204).send();
    });
  };
  