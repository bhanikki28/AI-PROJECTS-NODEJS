## Setting up the project

    npm init -y

## Required Libraries

    For API Fundamentals project
        - openai
        - dotenv
        - nodemon
    run command 
        1. npm i openai dotenv
        2. npm i nodemon --save-dev ( dev dependency )

## Setting Up OpenAI account and getting the key

    https://platform.openai.com/docs/overview
    Log in to : https://openai.com/
    1. https://openai.com/
    2. https://platform.openai.com/settings/organization/api-keys
    3. Create a key for the project 


## Define Model, Message Parameters and Generate response

    1. Construct OpenAI Chat Completion object using openai.chat.completions.create passing 
       model, maxToken, Message parameter
    2. Generate/Receive response using completion.choices[0].message.content


## llm.js

    1. import required library - import { ChatOpenAI } from @langchain/openai
    2. Define the model 
            const model = new ChatOpenAI({
                model : "gpt-4o-mini",
                openAIApiKey : OPENAI_API_KEY,
                temperature : 0.7,
                maxTokens : 50
            })
            - model : modelName
            - temperature : to control the prediction
            - maxToken : to limit the response ( cost)

    Run the model - model.invoke();
    const response = await model.invoke("Hello");

    Model can be invoked through below options
        - invoke
        - batch
        - stream
        - streamLog
        
## prompt-template.js

    - import ChatPromptTemplate and use fromTemplate method to pass in the query
    - chain the prompt with model
    - call chain.invoke()

    const prompt = ChatPromptTemplate.fromTemplate('Please share interesting thing about place : {input}');
    const chain = prompt.pipe(model)
    const response = await chain.invoke({'input': 'Madurai'})

