import { Client } from "@notionhq/client"
console.log(process.env.NOTION_Key)
const notion = new Client({ auth: process.env.NOTION_KEY })
const databaseId = 'ca5141e1a6c7475daf88f36a4b6ad789'

// Adding Item 
async function addItem(text,content) {
  try {
    await notion.request({
      path: "pages",
      method: "POST",
      body: {
        parent: { database_id: databaseId,
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
  } catch (error) {
    console.error(error.body)
  }
}

addItem("Page Title","Content")