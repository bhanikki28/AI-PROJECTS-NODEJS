import * as dotenv from 'dotenv'
import { OpenAI } from 'openai/client.js'

// load the env variable into the context
dotenv.config()
console.log('AI Fundamentals using NodeJS')

// get the OPENAI_API_KEY from the env variable
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

// create an instance of the OpenAI class
const openai = new OpenAI(OPENAI_API_KEY)

const main = async() => {
    
    try {

    // Construct the openai.chat.completion with model, message and maxTokens attribute

    const completion = await openai.chat.completions.create({
        model : "gpt-4o",
        messages: [
            { role : "system", content : "You are a helpful AI Assistant"},
            {role  : "user", content : "Tell me a beautiful thing about Madurai"}
        ],
        maxTokens : 150,
    });

    //Log the completion
    console.log(completion.choices[0].message.content)
    } catch (error) {
            console.log("Exception in processing OpenAI API",error.message)
    }
}
main()