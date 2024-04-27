import html from "../function/core.js";
import { connect } from "../function/store.js";
import mainItem from "../components/main-item.js";


function mainSect({ todos }) {
  console.log(todos);
  return html`
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${todos.map(todo => mainItem({todo}))}
      </ul>
    </section>
  `;
}
export default connect()(mainSect);
