// Importa o módulo express
const express = require('express');

// Criar o app 
const app = express();

// Importar as rotas de veículos e cliente
const veiculosRoutes = require('./routes/veiculosRoutes');
const clientesRoutes = require('./routes/clientesRoutes');

app.use(express.json());

// Usando as rotas
app.use('/api/veiculos', veiculosRoutes);
app.use('/api/clientes', clientesRoutes);

// Inicializando o servidor
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
