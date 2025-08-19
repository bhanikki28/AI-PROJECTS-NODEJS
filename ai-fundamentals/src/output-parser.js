import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from '@langchain/core/prompts'
import { StringOutputParser, CommaSeparatedListOutputParser } from '@langchain/core/output_parsers'

import * as dotenv from 'dotenv'

// load the dotEnv
dotenv.config()

// define the model

const model = new ChatOpenAI({

    model : "gpt-3.5-turbo",
    tem50perature: 0.7,
    maxTokens: 50,
    verbose: false
});


// function that uses StringOutputParser for parsing

async function stringOutputParser() {

    // define the prompt
    const prompt = ChatPromptTemplate.fromMessages([
        ["system", "Generate a joke based on word provided by user"],
        ["human", "{input}"],
    ]);

    //Configure the parser
    const stringOutputParser = new StringOutputParser();

    // create chain
    const chain = prompt.pipe(model).pipe(stringOutputParser);

    // invoke the chain
    return await chain.invoke({
        input: "dog"
    });
}
const strResponse = await stringOutputParser();
console.log(strResponse);

async function callListOutputParser() {

    // defind the prompt
    const prompt = ChatPromptTemplate.fromTemplate('Provide 5 Synonyms for the given word :{input}');

    //Configure the parser
    const commaSeparatedParser = new CommaSeparatedListOutputParser();

    // create chain
    const chain = prompt.pipe(model).pipe(commaSeparatedParser);

    // invoke the chain
    return await chain.invoke({
        input: "Excellent"
    });
}

const response = await callListOutputParser();
console.log(response)