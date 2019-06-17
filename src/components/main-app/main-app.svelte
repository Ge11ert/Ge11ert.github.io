<script>
  import Page, { Page__Stripe, Page__Content, Page__Main } from 'components/page';
  import PageTitle from 'components/page-title';
  import Header from 'components/header';
  import Navigation from 'components/navigation';
  import HeaderBanner from 'components/header-banner';
  import ContentSection from 'components/content-section';
</script>

<Page>
  <Page__Content>
    <Header mix="{['page__header']}">
      <Navigation mix="{['header__navigation']}"/>
      <HeaderBanner mix="{['header__banner']}"/>
    </Header>

    <Page__Main>
      <PageTitle
        mods={{ hidden: true }}
        mix="{['page__title']}"
      >
        Персональная страница фронтенд-разработчика
      </PageTitle>

      <Page__Stripe>
        <ContentSection
          title="Обо мне"
          mods="{{ type: 'about-me' }}"
        >
          TODO
        </ContentSection>
      </Page__Stripe>

      <Page__Stripe>
        <ContentSection
          title="Мои навыки"
          mods="{{ type: 'skills' }}"
        >
          TODO
        </ContentSection>
      </Page__Stripe>

      <Page__Stripe>
        <ContentSection
          title="Образование"
          mods="{{ type: 'education' }}"
        >
          TODO
        </ContentSection>
      </Page__Stripe>

      <Page__Stripe>
        <ContentSection
          title="Мои работы"
          mods="{{ type: 'projects' }}"
        >
          TODO
        </ContentSection>
      </Page__Stripe>

      <Page__Stripe>
        <ContentSection
          title="Контакты"
          mods="{{ type: 'contacts' }}"
        >
          TODO
        </ContentSection>
      </Page__Stripe>
    </Page__Main>
  </Page__Content>
</Page>
