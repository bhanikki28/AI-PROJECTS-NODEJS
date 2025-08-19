import * as dotenv from 'dotenv'
import { ChatOpenAI } from '@langchain/openai'
import { ChatPromptTemplate } from '@langchain/core/prompts'

// load the env variable
dotenv.config()

// define the model

const model = new ChatOpenAI({

    model : "gpt-3.5-turbo",
    temperature: 0.7,
    maxTokens:50,
    verbose: false
});

// define the promptTemplate

const prompt = ChatPromptTemplate.fromTemplate('Please share interesting thing about place : {input}');
const chain = prompt.pipe(model)
const response = await chain.invoke({'input': 'Madurai'})
console.log(response)