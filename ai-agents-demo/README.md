# Setting up the OpenAI Key


# Install libraries

    npm i express @langchain/openai @langchain/langgraph @langchain/core dotenv

# Configure OpenAI API Key in https://platform.openai.com/

# using dotenv lib , access the OpenAI_API_Key and set it in agent.js

# Define the model 
    - set the model name eg : gpt-4o-mini
    - set the temperature : 0.7 (for accuracy)
    - set maxTokens to be retrieved

# Create Agent
    - create the Agent by passing the model (llm ) and tools it can access to

# Test the agent 
    curl --location 'http://localhost:3001/agent' \
    --header 'Content-Type: application/json' \
    --data '{
    "message" : "hello, how are you?"
    }   '