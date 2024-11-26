// veiculos
let veiculos = [
    { id: 1, modelo: 'Fusca', cor: 'azul', ano: 1975 },
    { id: 2, modelo: 'Civic', cor: 'preto', ano: 2020 }
  ];
  
  // Exporta as rotas para serem usadas no app
  module.exports = (app) => {
    
    // Rota para obter todos os veículos
    app.get('/api/veiculos', (req, res) => res.json(veiculos));
  
    // Rota para obter um veículo específico pelo ID
    app.get('/api/veiculos/:id', (req, res) => {
        // Encontra o veículo pelo ID
        const veiculo = veiculos.find(v => v.id === parseInt(req.params.id));
      
        // verifica se existe
        if (veiculo) {
            res.json(veiculo);
        } else {
            res.status(404).send('Veículo não encontrado');
        }
    });
  
    // Rota para adicionar um novo veículo
    app.post('/api/veiculos', (req, res) => {
      // Pega o veículo enviado no corpo da requisição
      const veiculo = req.body;
      
      // Um novo ID e adiciona ao array de veículos
      veiculo.id = veiculos.length + 1;
      veiculos.push(veiculo);
      
      // Retorna o veículo recém-adicionado com status 201 (Criado)
      res.status(201).json(veiculo);
    });
  
    // Rota para atualizar um veículo existente
    app.put('/api/veiculos/:id', (req, res) => {
      // Encontra o veículo pelo ID
      const veiculo = veiculos.find(v => v.id === parseInt(req.params.id));
  
      // Se o veículo for encontrado, atualiza e retorna o veículo atualizado
      if (veiculo) {
        veiculo.modelo = req.body.modelo || veiculo.modelo;
        veiculo.cor = req.body.cor || veiculo.cor;
        veiculo.ano = req.body.ano || veiculo.ano;
        res.json(veiculo);
      } else {
        // Se o veículo não for encontrado, da erro
        res.status(404).send('Veículo não encontrado');
      }
    });
  
    // Rota para excluir um veículo pelo ID
    app.delete('/api/veiculos/:id', (req, res) => {
      // Filtra o veículo que não será excluído
      veiculos = veiculos.filter(v => v.id !== parseInt(req.params.id));
      
      res.status(204).send();
    });
  };
  