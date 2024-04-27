import html from "../function/core.js";
import header from "../components/header.js";
import mainSect from "../components/main-section.js";
import footer from "../components/footer.js";

function app() {
  return html` <section class="todoapp">
  ${header()} 
  ${mainSect()}
  ${footer()}

  </section> `;
}
export default app;
