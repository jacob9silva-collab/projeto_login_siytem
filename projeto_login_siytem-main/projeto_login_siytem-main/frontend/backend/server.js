const express = require ( 'express' );
 const cors = require ( 'cors' )
 const path = require ( 'path' );

 //Importando as rotas criadas
 const authRouts = require ( "./routers/auth" )

 const app = express ();
 const PORTA = 3001 ;

 // Middlewares principais
app.use(cors());

// Escreve e lê requisições de arquivos JSON
app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend')));

app.use("/api", authRouts);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORTA, () => {
    console.log('Servidor rodando em http://localhost:${PORTA}');
});
