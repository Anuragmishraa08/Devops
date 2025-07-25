const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

let feedbacks = [];

app.use(cors());
app.use(express.json());

app.post('/api/feedback', (req, res) => {
    const { name, message } = req.body;
    if (!name || !message) {
        return res.status(400).json({ error: 'Name and message are required' });
    }
    feedbacks.push({ name, message, time: new Date() });
    res.json({ success: true, message: 'Feedback received!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
