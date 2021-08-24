import { addItem } from './notion.js'
import { getKanye } from './kanye.js';
import pkg from '@slack/bolt';
const { App } = pkg

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN,
  });

// Listen for users opening your App Home
app.action('Snooze',async({ack})=>{
  await ack();
  await respond (www.google.com)
})

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
              "text": "*HeadsUp Newsfeed :fire:*"
            }
          },
          {
            "type": "divider"
          },
          {
            "type": "context",
            "elements": [
              {
                "type": "mrkdwn",
                "text": "1 min ago"
              }
            ]
          },
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "*<www.airtable.com|Airtable>* :raised_hands: Met all *Convert to Startup* :mortar_board: Criteria\nActivation: :white_check_mark:\nChecked out Pricing Page: :white_check_mark:\nMid Size Company on Trial: :white_check_mark:\nTop Decision Maker: *<www.fakeurl.com/|Andrew Thompson>*\nBest Champion: *<www.fakeurl.com/|Denzel Sacramento>*\nLatest Interactions: `Pricing Page Visited`, `Files Uploaded x 7`, `Files Edited`,`Files Shared`,`Champion Login`"
            },
            "accessory": {
              "type": "image",
              "image_url": "https://www.podfeet.com/blog/wp-content/uploads/2018/05/airtable-logo.png",
              "alt_text": "credit card"
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Chat on Intercom",
                  "emoji": true
                },
                "style": "primary",
                "value": "approve"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Snooze",
                  "emoji": true
                },
                "style": "danger",
                "value": "decline"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "View in Salesforce",
                  "emoji": true
                },
                "value": "details"
              }
            ]
          },
          {
            "type": "divider"
          },
          {
            "type": "context",
            "elements": [
              {
                "type": "mrkdwn",
                "text": "10 mins ago"
              }
            ]
          },
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "*<www.airtable.com|Amazon>* :tada: Met *Activation* Criteria for Convert to Startup:mortar_board:\nActivation: :white_check_mark:\nChecked out Pricing Page:\nMid Size Company on Trial: :white_check_mark:\nTop Decision Maker: *<www.fakeurl.com/|Andrew Thompson>*\nBest Champion: *<www.fakeurl.com/|Denzel Sacramento>*\nLatest Interactions: `File Uploaded x 24`, `Files Edited x 7`, `Files Deleted x 2`,`Dashboard Clicked`,`Dashboard Shared`"
            },
            "accessory": {
              "type": "image",
              "image_url": "https://www.seekpng.com/png/detail/122-1229893_10-amazon-gift-card-amazon-logo-square.png",
              "alt_text": "credit card"
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Add to Cadence",
                  "emoji": true
                },
                "style": "primary",
                "value": "approve"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Snooze",
                  "emoji": true
                },
                "style": "danger",
                "value": "decline"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "View in Salesforce",
                  "emoji": true
                },
                "value": "details"
              }
            ]
          },
          {
            "type": "divider"
          },
          {
            "type": "context",
            "elements": [
              {
                "type": "mrkdwn",
                "text": "55 mins ago"
              }
            ]
          },
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "*<www.airtable.com|Uber>* :raised_hands: Met all *Upsell Growth Plan* :sunglasses: Criteria\nAbout to hit Growth Usage Limits: :white_check_mark:\nChecked out Pricing Page: :white_check_mark:\nEnterprise Companies on Startup plan: :white_check_mark:\nTop Decision Maker: *<www.fakeurl.com/|Samantha Aniston>*\nBest Champion: *<www.fakeurl.com/|Ben Davidson>*\nLatest Interactions: `Files Uploaded x 10`, `Files Shared x 2`, `Teammate Invited`,`New User Signed Up`,`User Onboarded`"
            },
            "accessory": {
              "type": "image",
              "image_url": "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022017/untitled-1_140.jpg?itok=1oBwROXU",
              "alt_text": "credit card"
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Add to Cadence",
                  "emoji": true
                },
                "style": "primary",
                "value": "approve"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Snooze",
                  "emoji": true
                },
                "style": "danger",
                "value": "decline"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "View in Salesforce",
                  "emoji": true
                },
                "value": "details"
              }
            ]
          },
          {
            "type": "divider"
          },
          {
            "type": "context",
            "elements": [
              {
                "type": "mrkdwn",
                "text": "1 hour ago"
              }
            ]
          },
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "*<www.airtable.com|Mailchimp>* :octagonal_sign: Account at *Risk* \n Inactive: *7 days* :snail:\nTop Decision Maker: *<www.fakeurl.com/|Amy Jackson>*\nBest Champion: *<www.fakeurl.com/|Tim Ja>*\nLatest Interactions: `File Upload Error`, `Files Deleted`, `Champion Log Out`"
            },
            "accessory": {
              "type": "image",
              "image_url": "https://s3.amazonaws.com/www-inside-design/uploads/2018/10/mailchimp-sq.jpg",
              "alt_text": "credit card"
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Schedule Call",
                  "emoji": true
                },
                "style": "primary",
                "value": "approve"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Snooze",
                  "emoji": true
                },
                "style": "danger",
                "value": "decline"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "View in Salesforce",
                  "emoji": true
                },
                "value": "details"
              }
            ]
          },
          {
            "type": "divider"
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

//Listen to when someone joins the slack workspace -> onboarding message
app.event('team_join', async ({ event, client }) => {
  try {
    const result = await client.chat.postMessage({
      // Use the user ID associated with the event
      channel: "#introductions",
      text:`Welcome to the team, <@${event.user}>!🎉Introduce yourself with some background and fun facts!`
    });
    // const dm = await client.conversations.open({
    //   users: event.user,
    //   text:`Hello <@${event.user}>! Hope you are excited about getting started. Here's a [link]() to the HeadsUp Onboarding Documents`
    // })
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



