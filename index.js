import express from 'express';
import path from 'path';

const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '.')));

app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, '.', 'index.html'));
});

app.listen(port, () => {
    console.log(`*** Server is running on port 8000 ***`);
});
