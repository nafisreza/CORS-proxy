import express from 'express';

const app = express();

app.get('/', (req, res) =>{
    res.send('Server is serving');
})

const port = 3000; 

app.listen(port, ()=> {
   console.log(`Serving at https://localhost/${port}`) 
})