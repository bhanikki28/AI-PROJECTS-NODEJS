import { tool } from "@langchain/core/tools"
import {z} from "zod"


// Defining a tool
export const convertCurrency = tool(

    async(
        {fromCurrency,toCurrency, amount}
       
    ) => {
        console.log("Currency Conver Tool been called by Agent")
        const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
        const data = await response.json()
        const exchRate = data.rates[toCurrency]
        const convertedAmount =  exchRate * amount
        return {

            fromCurrency,
            toCurrency,
            exchRate,
            convertedAmount
        }


    },{
        name : "convertCurrency",
        description : "Tool to convert amount from source to target currency",
        schema: z.object({
            fromCurrency : z.string().describe(" The currency to convert from"),
            toCurrency : z.string().describe("The currency to conver to"),
            amount : z.number().describe("The amount to convert to")
        })

    }
)