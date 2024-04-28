import html from "../function/core.js";
import { connect } from "../function/store.js";
function footer({ todos, filter, filters }) {
  console.log(filters);
  return html`
    <footer class="footer">
      <span class="todo-count"
        ><strong>${todos.filter(filters.active).length}</strong> item left</span
      >
      <ul class="filters">
        ${Object.keys(filters).map(
          (type) => html`
            <li>
              <a
                class="${filter === type && "selected"}"
                onclick="dispatch('SWITCH','${type}')"
                href="#/"
                onclick="dispatch"
                >${type[0].toUpperCase() + type.slice(1)}</a
              >
            </li>
          `
        )}
      </ul>
      ${todos.filter(filters.completed).length > 0 &&
      html`<button class="clear-completed" onclick="dispatch('CLEAR_COMPLETE')">Clear completed</button>`}
    </footer>
  `;
}
export default connect()(footer);
