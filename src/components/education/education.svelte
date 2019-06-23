<script>
  export let mods = {};
  export let mix = [];
</script>

<div class="{b('education', { mods, mix })}">
  <table class="education__table">
    <thead class="education__head">
      <tr class="education__row">
        <th class="education__header">
          Тип обучения
        </th>
        <th class="education__header">
          Организация
        </th>
        <th class="education__header">
          Период
        </th>
      </tr>
    </thead>
    <tbody class="education__body">
      <tr class="education__row">
        <td class="{b('education__cell', { mods: { type: 'kind' } })}">
          Высшее
        </td>
        <td class="{b('education__cell', { mods: { type: 'organisation' } })}">
          <p class="education__name">
            МГТУ им. Н.Э. Баумана
            <small class="education__kind">
              (Высшее)
            </small>
          </p>
          <div class="education__details">
            <table class="education__inner-table">
              <tr>
                <td class="{b('education__cell', { mods: { type: 'inner' } })}">Фак&#8209;т:&nbsp;</td>
                <td class="{b('education__cell', { mods: { type: 'inner' } })}">Информатика и системы управления</td>
              </tr>
              <tr>
                <td class="{b('education__cell', { mods: { type: 'inner' } })}">Каф.:&nbsp;</td>
                <td class="{b('education__cell', { mods: { type: 'inner' } })}">Системы автоматического управления летательных аппаратов</td>
              </tr>
            </table>
          </div>
        </td>
        <td class="{b('education__cell', { mods: { type: 'period' } })}">
          2011&nbsp;&mdash; 2017
        </td>
      </tr>
      <tr class="education__row">
        <td class="{b('education__cell', { mods: { type: 'kind' } })}">
          Курсы
        </td>
        <td class="{b('education__cell', { mods: { type: 'organisation' } })}">
          <p class="education__name">
            HTML Academy
            <small class="education__kind">
              (Курсы)
            </small>
          </p>
          <div class="education__details">
            Профессия &laquo;Фронтенд-разработчик&raquo;
          </div>
        </td>
        <td class="{b('education__cell', { mods: { type: 'period' } })}">
          Август&nbsp;&mdash; декабрь 2017&nbsp;г.
        </td>
      </tr>
    </tbody>
  </table>
</div>
