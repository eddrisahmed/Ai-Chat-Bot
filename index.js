const express = require('express');
const app = express();

app.use(express.json());

app.post('/chatbot', (req, res) => {
    const message = req.body.message.toLowerCase();

    if (message.includes('সাইটের') && message.includes('কাজ') && message.includes('কি')) {
        res.send('আমাদের এখানে মূলত কাজ হল বিজনেস।');
    } else if (message.includes('নাম') && message.includes('কি')) {
        res.send('আমার নাম FBM।');
    } else {
        res.send('দুঃখিত, আমি বুঝতে পারিনি।');
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
