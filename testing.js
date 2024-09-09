// Purpose ng file nato is for running local testings, wag kayo maglagay ng app.listen sa index.js kasi maba-block non yung sa vercel

import app from './index.js';

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
})
