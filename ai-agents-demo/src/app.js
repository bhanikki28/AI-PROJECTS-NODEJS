import express from 'express';
import * as dotenv from 'dotenv'
import { agent } from './agent.js';
import { HumanMessage } from '@langchain/core/messages';

dotenv.config()
const port = process.env.PORT || '5001'

const app = express();

//middleware
app.use(express.json())

// routing

app.post("/agent",  async (req,res) => {
    console.log(req.body)
    try {
        const result =  await agent.invoke({
            messages:[
                new HumanMessage(req.body.message)
            ]
        })
        console.log(result.messages[result.messages.length - 1].content)
        res.send(result.messages[result.messages.length - 1].content)
        console.log("Calling the AI Agent")
    } catch (error) {
        console.error('Error:', error)
    }
})


app.listen(port,() => {
    console.log(`Server listening on Port :${port}`)
})