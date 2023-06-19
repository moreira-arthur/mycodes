const express = require('express');
const app = express();
const port = 3000;
// app.use(express.static('./c/Codes/HTML'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/first.html')
})
app.listen(port, () =>  {
    console.log(`Example app listening on port ${port}!`)
})