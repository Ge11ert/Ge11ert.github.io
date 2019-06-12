export { default } from './page.svelte';
export { default as Page__Stripe } from './__stripe';
export { default as Page__Content } from './__content';

require('./__content/page__content.scss');
require('./__stripe/page__stripe.scss');

require('./page.scss');
