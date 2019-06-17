export { default } from './page.svelte';
export { default as Page__Stripe } from './__stripe';
export { default as Page__Content } from './__content';
export { default as Page__Main } from './__main';

require('./__content/page__content.scss');
require('./__stripe/page__stripe.scss');

require('./page.scss');
