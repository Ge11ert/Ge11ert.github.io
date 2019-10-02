<script>
  import SocialList from 'components/social-list';
  export let mods = {};
  export let mix = [];
</script>

<div class="{b('contacts', { mods, mix })}">
  <p class="contacts__motto">
    Есть вопросы или предложения?
    <br>
    Свяжитесь со&nbsp;мной любым удобным способом!
  </p>

  <div class="contacts__details">
    <p class="contacts__email">
      <span class="contacts__label">
        E-mail:
      </span>
      <a href="mailto:gellert94@mail.ru" class="contacts__link">
        gellert94@mail.ru
      </a>
    </p>
    <SocialList mix="contacts__social-list"/>
  </div>

  <form
    action="https://formspree.io/gellert94@mail.ru"
    method="post"
    class="contacts__form"
  >
    <p class="contacts__field-container">
      <input
        type="text"
        class="contacts__text-field"
        id="name"
        name="name"
        required
      >
      <label
        class="{b('contacts__form-label', { mods: { type: 'text' } })}"
        for="name"
      >
        Ваше имя*
      </label>
    </p>
    <p class="contacts__field-container">
      <input
        type="email"
        class="contacts__text-field"
        id="email"
        name="email"
        required
      >
      <label
        class="{b('contacts__form-label', { mods: { type: 'text' } })}"
        for="email"
      >
        Ваш e-mail*
      </label>
    </p>
    <p class="contacts__field-container">
      <textarea
        class="contacts__message"
        name="message"
        id="message"
        cols="30"
        rows="8"
      ></textarea>
      <label
        class="{b('contacts__form-label', { mods: { type: 'message' } })}"
        for="message"
      >
        Текст сообщения
      </label>
    </p>
    <p class="contacts__actions">
      <button
        type="submit"
        class="contacts__submit"
      >
        Отправить
      </button>
    </p>
  </form>
</div>
