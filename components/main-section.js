import html from "../function/core.js";
import { connect } from "../function/store.js";
import mainItem from "../components/main-item.js";

function mainSect({ todos,filter, filters }) {
  
  return html`
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        onchange="dispatch('TOGGLE_ALL',this.checked)"
        ${todos.every(filters.completed) && 'checked'}
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${todos.filter(filters[filter]).map((todo, index) => mainItem({ todo, index }))}
      </ul>
    </section>
  `;
}
export default connect()(mainSect);
