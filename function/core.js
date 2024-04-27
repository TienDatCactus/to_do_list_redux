export default function html([first, ...strings], ...values) {
  return values
    .reduce((acc, curr) => acc.concat(curr, strings.shift()), [first])
    .filter((x) => (x && x !== true) || x === 0)
    .join("");
}

export function createStore(reducer) {
  let state = reducer();
  const root = new Map();
  function render() {
    for (const [htmlRoot, components] of root) {
      const output = components();
      htmlRoot.innerHTML = output;
    }
  }

  return {
    attach(components, htmlRoot) {
      root.set(htmlRoot, components);
      render();
    },
    connect(selector = (state) => state) {
      return (components) =>
        (props, ...args) =>
          components(Object.assign({}, props, selector(state), ...args));
    },
    dispatch(action, ...args) {
      state = reducer(state, action, args);
      render();
    },
  };
}
