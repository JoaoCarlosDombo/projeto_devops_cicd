import  'express';
const app = express();

app.get('/', (req, res) => {
  res.send(<    h1>Minha Aplicacao Devops e ci/CD</h1>);
});

app.listen(3000, () => {
  console.log('Server rodando na porta 3000');
}); 