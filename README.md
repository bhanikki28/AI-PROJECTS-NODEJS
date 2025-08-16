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


