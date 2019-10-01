<script>
  export let mods = {};
  export let mix = [];

  $: currentYear = (new Date()).getFullYear();
</script>

<footer class="{b('footer', { mods, mix})}">
  <p class="{b('footer__copyright')}">
    &#169; ge11ert, {currentYear}
  </p>
  <a href="#" class="{b('footer__up-link')}">
    Наверх
  </a>
</footer>
