const express = require('express');
const cors = require('cors');
require('dotenv').config();
const supabase = require('./src/config/db.js');

const app = express();
app.use(cors()); 
app.use(express.json()); 

app.get('/', (req, res) => {
    res.json({ mensaje: '¡Backend conectado vía API REST con Llave Secreta!' });
});

app.get('/api/servers', async (req, res) => {
    try {
        // Pedimos los datos directo a la tabla
        const { data, error } = await supabase
            .from('servers')
            .select('*')
            .order('id', { ascending: true });
            
        if (error) throw error;
        
        res.json(data);
    } catch (error) {
        console.error("Error en Supabase:", error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`=================================`);
    console.log(`🚀 Servidor Backend Activo (Vía API)`);
    console.log(`🔌 URL: http://localhost:${PORT}/api/servers`);
    console.log(`=================================`);
});
