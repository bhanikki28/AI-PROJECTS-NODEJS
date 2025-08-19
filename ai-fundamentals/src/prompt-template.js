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
    verbose: true
});

// define the promptTemplate

const prompt = ChatPromptTemplate.fromTemplate('Please share interesting thing about place : {input}');
const chain = prompt.pipe(model)
console.log(await prompt.format({'input': 'Madurai'}));
const response = chain.invoke()
console.log(response)