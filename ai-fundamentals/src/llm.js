import * as dotenv from 'dotenv'
import { ChatOpenAI } from "@langchain/openai"

// load the dotenv
dotenv.config()


// define the model
const model = new ChatOpenAI ({
    model : "gpt-4o-mini",
    temperature : 0.7,
    maxTokens : 50
});


console.log(await model.invoke("How are you ?"))