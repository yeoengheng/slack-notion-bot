import { addItem } from './notion.js'
import { getKanye } from './kanye.js';
import pkg from '@slack/bolt';
const { App } = pkg

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN,
  });

// Listen for users opening your App Home
app.event('app_home_opened', async ({ event, client }) => {
  try {
    // Call views.publish with the built-in client
    const result = await client.views.publish({
      // Use the user ID associated with the event
      user_id: event.user,
      view: {
        "type": "home",
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "*Welcome <@" + event.user + "> :house:*"
            }
          },
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "Store highlights lowlights here"
            }
          }
        ]
      }
    });

    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
});

/////UPDATE DB 
// Listen for a slash command invocation
app.command('/landscape', async ({ ack, body, client }) => {
  // Acknowledge the command request
  await ack();

  try {
    // Call views.open with the built-in client
    const result = await client.views.open({
      // Pass a valid trigger_id within 3 seconds of receiving it
      trigger_id: body.trigger_id,
      // View payload
      view: {
        type: 'modal',
        // View identifier
        callback_id: 'view_1',
        title: {
          type: 'plain_text',
          text: 'Add to Landscape'
        },
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: 'Good find. Add your notes here and it would be automatically updated in Notion'
            }
          },
          {
            type: 'input',
            block_id: 'input_a',
            label: {
              type: 'plain_text',
              text: 'Company Name'
            },
            element: {
              type: 'plain_text_input',
              action_id: 'dreamy_input',
              multiline: false
            }
          },
          {
            type: 'input',
            block_id: 'input_c',
            label: {
              type: 'plain_text',
              text: 'Notes?'
            },
            element: {
              type: 'plain_text_input',
              action_id: 'dreamy_input',
              multiline: true
            }
          }
        ],
        submit: {
          type: 'plain_text',
          text: 'Submit'
        }
      }
    });
    //console.log(result);
  }
  catch (error) {
    console.error(error);
  }
});
// Handle a view_submission event
app.view('view_1', async ({ ack, body, view, client }) => {
  // Acknowledge the view_submission event
  await ack();
  const title = view['state']['values']['input_a']['dreamy_input']['value'];
  const content = view['state']['values']['input_c']['dreamy_input']['value'];;
  let msg = '';
  const results = await addItem(title,content)
  if (results) {
    // DB save was successful
    msg = 'Your submission was successful';
  } else {
    msg = 'There was an error with your submission';
  }

  // Message the user
  try {
    await client.chat.postMessage({
      channel: '#eng-heng-test',
      text: msg
    });
  }
  catch (error) {
    console.error(error);
  }

});

//Kanye Listener  
app.message('What would Kanye say?', async ({ message, say }) => {
  const results = await getKanye()
  say(`Hello, <@${message.user}>, Kanye says `+ results);
  });

// Onboarding 
// Listen to new join in #introduction channel
app.event('member_joined_channel', async ({ event, client }) => {
  try {
    const result = await client.chat.postMessage({
      // Use the user ID associated with the event
      channel: "#introductions",
      text:`Welcome to the team, <@${event.user}>!🎉Introduce yourself with some background and fun facts!`
    });

    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
});
//Listen to when someone joins the slack workspace -> onboarding message
app.event('member_joined_channel', async ({ event, client }) => {
  try {
    const result = await client.chat.postMessage({
      // Use the user ID associated with the event
      channel: "#introductions",
      text:`Welcome to the team, <@${event.user}>!🎉Introduce yourself with some background and fun facts!`
    });

    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
});


// start the App
async function startApp(){
  await app.start(process.env.PORT || 3000);
  console.log("app started")
}
startApp()



