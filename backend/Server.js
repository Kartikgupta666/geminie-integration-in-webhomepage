const express = require('express')
const generate = require('./geminie_integration')
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.json()); 

const port = 8000;

app.post("/", async (req, res) => {
    const { message, apikey } = req.body
    // console.log(message)
    if (!message) {
        console.log("mesage required")
    }
    try {
        const result = await generate(message, apikey)
        return res.json(result)
    }
    catch (e) {

        // Extracting the 'reason' field
        // console.log(e.errorDetails[0].reason)
        return res.json(e.errorDetails[0].reason)
    }
})

app.listen(port, () => {
    console.log(`server listen on port ${port}`)
})