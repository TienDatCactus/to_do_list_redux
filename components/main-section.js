import html from "../function/core.js";
import mainItem from "../components/main-item.js";
function mainSect() {
  return html`
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${mainItem()}
      </ul>
    </section>
  `;
}
export default mainSect;
