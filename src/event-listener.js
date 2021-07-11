// Message Listener 
export const BOOM = () => {
  app.message('BOOM', async ({ message, say }) => {
    await say('hello');
  });
} 

