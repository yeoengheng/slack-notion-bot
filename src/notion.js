import { Client, LogLevel } from "@notionhq/client"
const notion = new Client({ 
  auth: process.env.NOTION_KEY,
  logLevel: LogLevel.DEBUG, 
})
const landscapeId = 'ca5141e1a6c7475daf88f36a4b6ad789'
const globalToDosId = '23caf49f5b8c488d824af9aa1a3bce1c'
// Adding Items 
export async function addItem(text,content) {
  try {
    await notion.request({
      path: "pages",
      method: "POST",
      body: {
        parent: { database_id: landscapeId,
         },
        properties: {
          title: { 
            title:[
              {
                "text": {
                  "content": text
                }
              }
            ]
          }
        },
        children: [{
          object:'block',
          type:'paragraph',
          paragraph: {
            text: [
              {
                type: 'text',
                text:{
                  content:content
                }
              }
            ]
          }
        }
      ]
      },
    })
    console.log("Success! Entry added.")
    return true
  } 
  catch (error) {
    console.error(error.body)
  }
}

// searching DB
export const searchDB = async ()=>{
  try {
    const result = await notion.request({
      path:'search',
      method:'POST',
      body:{
        sort:{
          direction: 'ascending',
          timestamp:'last_edited_time'
        }
      }
    })
  console.log(result.results)
  }
  catch(error){
    console.error(error.body)
  }
} 

// Retrieving Items from Global Todos that belongs to you 
export const getToDos = async () =>{
  try {
    const result = await notion.request({
      method: 'GET',
      path:`databases/${globalToDosId}`
    })
    console.log(result)
  }
  catch(error){
    console.error(error.body)
  }
}
