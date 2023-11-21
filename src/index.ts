import express from 'express';
import { Aplicacao } from './App';

const app = express();
// GET http://localhost:8000/veiculo
app.listen(8000, () => {
  console.log('Server listening on port 8000');
});

// Imprimindo no Insomnia os dados de App.ts
app.get('/veiculo', (req, res) => {  
  const app = new Aplicacao();
  app.main();
  res.send(app);  
});

