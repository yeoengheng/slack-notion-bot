import pkg from '@slack/bolt';
import { bot_token, slack_token, channel } from './constants.js';
const { App } = pkg

const app = new App({
  signingSecret:slack_token,
  token: bot_token
})

// start App
async function startApp(){
  await app.start(process.env.PORT || 3000);
  console.log("app started")
}
startApp()

// Sending message via the Web API
async function sendMessage(channel, message){
  await web.chat.postMessage({
    channel:channel,
    text:message,
  });
}

// Message Listener 
app.message('hello sir', async ({ message, say }) => {
  await sendMessage("hello", channel)
  console.log("hello")
});



