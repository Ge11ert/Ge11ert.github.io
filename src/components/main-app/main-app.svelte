<script>
  import Page, { Page__Stripe, Page__Content } from 'components/page';
  import Header from 'components/header';
  import Navigation from 'components/navigation';
  import HeaderBanner from 'components/header-banner';
</script>

<Page>
  <Page__Content>
    <Header mix="{['page__header']}">
      <Navigation mix="{['header__navigation']}"/>
      <HeaderBanner mix="{['header__banner']}"/>
    </Header>
  </Page__Content>
</Page>
