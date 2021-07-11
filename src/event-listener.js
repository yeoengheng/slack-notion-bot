
// Message Listener 
const BOOM = () => {
  app.message('BOOM', async ({ message, say }) => {
    await say('hello');
  });
} 

export default BOOM 