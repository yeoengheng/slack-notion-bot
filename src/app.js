import pkg from '@slack/bolt';
const { App } = pkg

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

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



