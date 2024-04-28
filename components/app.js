import html from "../function/core.js";
import { connect } from "../function/store.js";
import header from "../components/header.js";
import mainSect from "../components/main-section.js";
import footer from "../components/footer.js";

function app({ todos }) {
  return html`
    <section class="todoapp">
      ${header()}
      ${todos.length > 0 && mainSect()}
      ${todos.length > 0 && footer()}
    </section>
  `;
}
export default connect()(app);
