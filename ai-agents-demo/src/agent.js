import { createReactAgent } from '@langchain/langgraph/prebuilt'
import { ChatOpenAI } from '@langchain/openai'
import { tool } from '@langchain/core/tools'
import { z } from 'zod'
import { convertCurrency } from './tools/currencyTool.js';


// Define the model


const model = new ChatOpenAI({
    model : 'gpt-4o-mini',
    temperature : 0.7,
    maxTokens : 50
});

// Create Agent

export const agent = createReactAgent({
    llm : model,
    tools: [convertCurrency]
})

