import express from 'express';

const app = express();

app.get('/rota', (req, res) => {
    return res.send('Salve!')
});

app.listen(3000, () => console.log('Server is running'));
