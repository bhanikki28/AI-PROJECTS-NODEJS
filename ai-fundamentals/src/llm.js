import * as dotenv from 'dotenv'
import { ChatOpenAI } from "@langchain/openai"

// load the dotenv
dotenv.config()


// define the model
const model = new ChatOpenAI ({
    model : "gpt-4o-mini",
    openAIApiKey : OPENAI_API_KEY,
    temperature : 0.7,
    maxTokens : 50
});


console.log(model.invoke("How are you ?"))