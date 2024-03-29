import express from "express"
import pg from "pg"
import cors from "cors"
import dotenv from "dotenv"

//express
const app = express();
//port
const port = process.env.PORT || 8000;
//dotenv path
dotenv.config({path: './.env'});
//pool
const { Pool } = pg;
const pool = new pg.Pool ({
    connectionString: process.env.DATABASE_URL
})

//server inst
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

//get all
app.get('/api/journal', async (req, res) => {
    const client = await pool.connect();
    try {
    
        const result = await client.query('SELECT * FROM journal', []);
        res.send(result.rows);
    } 
    catch (error) {
        res.status(500).send(error);
    }
    finally{
        client.release();
    }
});

//get one
app.get('/api/journal/:name', async (req, res) => {
    const client = await pool.connect();
    const {name} = req.params;
    try {
        const result = await client.query('SELECT * FROM journal WHERE name = $1', [name]);
        res.json(result.rows);
    } 
    catch (error) {
        res.status(500).send(error);
    }
    finally{
        client.release();
    }
});

//create one
app.post('/api/journal', async (req, res) => {
    const client = await pool.connect();
    const {name, firstquestion, secondquestion, thirdquestion, moodrating, addcomments} = req.body;
    console.log(req.body.song_title);
    try {
        const result = await pool.query('INSERT INTO journal (name, firstquestion, secondquestion, thirdquestion, moodrating, addcomments) VALUES ($1, $2, $3, $4, $5, $6)', [name, firstquestion, secondquestion, thirdquestion, moodrating, addcomments]);
        res.json(req.body);
    } 
    catch (error) {
        res.status(500).send(error);
    }
    finally{
        client.release();
    }
});


//put one
app.put('/api/journal/:id', async (req, res) => {
    const client = await pool.connect();
    const {name, firstquestion, secondquestion, thirdquestion, moodrating, addcomments} = req.body;
    const {id} = req.params;
    try {
        const result = await client.query('UPDATE journal SET name = $1, firstquestion = $2, secondquestion = $3, thirdquestion = $4, moodrating = $5, addcomments =$6 WHERE id = $7', [name, firstquestion, secondquestion, thirdquestion, moodrating, addcomments, id]);
        res.json(req.body);
    } 
    catch (error) {
        res.status(500).send(error);
    }
    finally{
        client.release();
    }
});

//delete one
app.delete('/api/journal/:id', async (req, res) => {
    const client = await pool.connect();
    const {id} = req.params;
    try {
        const result = await client.query('DELETE FROM journal WHERE id = $1', [id]);
        res.json(req.body);
    } 
    catch (error) {
        res.status(500).send(error);
    }
    finally{
        client.release();
    }
});

//listener
app.listen(port, () => {
    console.log('listening on port', port)
})