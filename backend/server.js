import express from 'express';
import 'dotenv/config';

const app = express();

app.get('/', (req, res) =>{
    res.send('Server is serving');
})

const port = process.env.PORT || 3000; 

app.listen(port, ()=> {
   console.log(`Serving at https://localhost/${port}`) 
})