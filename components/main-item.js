import html from "../function/core.js";
import { connect } from "../function/store.js";
function mainItem({ todo, index, editIndex }) {
  /* ${todo.completed ? 'class="completed"' : ""  can be used ass class="${todo.completed && 'completed'}"*/
  return html`
    <li
      class="${todo.completed && "completed"} ${editIndex === index &&
      "editing"}"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          ${todo.completed && "checked"}
          onchange="dispatch('TOGGLE',${index}) "
        />
        <label ondblclick="dispatch('EDIT',${index})">${todo.title}</label>
        <button class="destroy" onclick="dispatch('DESTROY',${index})"></button>
      </div>
      <input
        class="edit"
        value="${todo.title}"
        onkeyup="event.keyCode === 13  && dispatch('END_EDIT',this.value.trim()) ||event.keyCode === 27 && dispatch('CANCEL_EDIT')"
        onblur="dispatch('END_EDIT',this.value.trim())"
      />
    </li>
  `;
}
export default connect()(mainItem);
