import express from 'express';
import 'dotenv/config';

const app = express();

app.get('/', (req, res) =>{
    res.send('Server is serving');
})

const port = process.env.PORT || 3000; 

// get a list of 5 jokes

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "question": "What did one pirate say to the other when he beat him at chess?",
            "answer": "Checkmatey"
        },
        {
            "id": 2,
            "question": "Why did I quit my job at the coffee shop the other day?",
            "answer": "It was just the same old grind over and over."
        },
        {
            "id": 3,
            "question": "Why should you never buy anything that has Velcro with it?",
            "answer": "It's a total rip-off."
        },
        {
            "id": 4,
            "question": "What is the most groundbreaking invention of all time?",
            "answer": "The shovel."
        },
        {
            "id": 5,
            "question": "Did you hear about the famous Italian chef that recently died?",
            "answer": "He pasta way."
        },
    ];
    res.send(jokes);
})

app.listen(port, ()=> {
   console.log(`Serving at https://localhost/${port}`) 
})
