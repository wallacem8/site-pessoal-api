require('./config/dotenv');

const express = require('express');
const { initDatabase } = require('./config/db');
const cors = require('cors');

const experienciasRoute = require('./routes/experienciasRoutes'); 
const portfolioRoute = require('./routes/portfolioRoutes');
const informacoesRoute = require('./routes/informacoesRoutes');
const authRoute = require('./routes/authRoutes')

const app = express();

const port = process.env.APP_PORT || 5000;

app.get('/', (req, res) => {
    res.send('Seja Bem-vindo à API do Meu site pessoal');
});

app.use(cors());

app.use(express.json());

app.use('/api/experiencias', experienciasRoute);
app.use('/api/portfolio', portfolioRoute);
app.use('/api/informacoes', informacoesRoute);
app.use('/api/auth', authRoute);

initDatabase();

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});