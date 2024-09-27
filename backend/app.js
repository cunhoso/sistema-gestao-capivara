const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '0000',
    database: process.env.MYSQL_DATABASE || 'capivaras_db',
    connectTimeout: 15000 
});

// Listar todas as capivaras
app.get('/capivaras', (req, res) => {
    db.query('SELECT * FROM capivaras', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Obter capivara específica por ID
app.get('/capivaras/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM capivaras WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error(err); // Log do erro
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
        if (results.length === 0) {
            console.log(`Capivara com ID ${id} não encontrada`);
            return res.status(404).json({ error: 'Capivara não encontrada' });
        }
        res.json(results[0]);
    });
});

// Adicionar nova capivara
app.post('/capivaras', (req, res) => {
    const { nome, idade, peso, status_saude, habitat, comportamento, dieta, observacoes } = req.body;
    const sql = 'INSERT INTO capivaras (nome, idade, peso, status_saude, habitat, comportamento, dieta, observacoes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [nome, idade, peso, status_saude, habitat, comportamento, dieta, observacoes], (err, results) => {
        if (err) throw err;
        res.status(201).json({ id: results.insertId, ...req.body });
    });
});

// Atualizar capivara
app.put('/capivaras/:id', (req, res) => {
    const { id } = req.params;
    const { nome, idade, peso, status_saude, habitat, comportamento, dieta, observacoes } = req.body;
    const sql = 'UPDATE capivaras SET nome = ?, idade = ?, peso = ?, status_saude = ?, habitat = ?, comportamento = ?, dieta = ?, observacoes = ? WHERE id = ?';
    db.query(sql, [nome, idade, peso, status_saude, habitat, comportamento, dieta, observacoes, id], (err) => {
        if (err) throw err;
        res.status(200).json({ id, ...req.body });
    });
});

// Deletar capivara
app.delete('/capivaras/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM capivaras WHERE id = ?';
    db.query(sql, [id], (err) => {
        if (err) throw err;
        res.status(204).send();
    });
});

// Inicializar o servidor
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
