<script>
  import SocialList from 'components/social-list';
  import photo from 'data/about-me';
  export let mods = {};
  export let mix = [];
</script>

<div class="{b('about-me')}">
  <div class="about-me__info-container">
    <div class="about-me__photo-container">
      <picture>
        <source media="(min-width: 980px)" srcset="{photo.desktop.url}">
        <img src="{photo.mobile.url}" class="about-me__photo" alt="Моё фото">
      </picture>
    </div>

    <div class="about-me__info">
      <p class="about-me__name">
        Артём Абрамянц
      </p>
      <SocialList
        mods="{{ for: 'about-me' }}"
        mix="{['about-me__social-list']}"
      />
    </div>
  </div>

  <div class="about-me__greeting">
    <p class="about-me__text">
      Привет!
    </p>
    <p class="about-me__text">
      Я&nbsp;&mdash; начинающий фронтенд-разработчик из&nbsp;Москвы.
    </p>
    <p class="about-me__text">
      Владею HTML5, CSS3 и&nbsp;JavaScript. В&nbsp;процессе разработки я&nbsp;уделяю внимание не&nbsp;только максимальному соответствию макету, но&nbsp;и&nbsp;семантичности, доступности, гибкости вёрстки.
    </p>
    <p class="about-me__text">
      Умею верстать адаптивно и&nbsp;кроссбраузерно, соблюдая законы валидной разметки W3C.
    </p>
    <p class="about-me__text">
      Стремлюсь развиваться как разработчик в&nbsp;целом и&nbsp;особенно в&nbsp;качестве JS-программиста.
    </p>
  </div>
</div>
