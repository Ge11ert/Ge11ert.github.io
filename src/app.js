import picturefill from 'picturefill';
import 'components/document';

import App from 'components/main-app';

const app = new App({
  target: document.getElementById('svelte-app'),
});

picturefill();

export default app;
