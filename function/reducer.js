const init = {
  todos: [
    {
      title: "Nigga",
      completed: false,
    },
    {
      title: "Chigga",
      completed: true,
    },
  ],
};

const actions = {
  ADD({ todos }, title) {
    todos.push({ title, completed: false });
  },
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
  // switch (action) {
  //   case "ADD":
  //     const [title] = args;
  //     return {
  //       ...state,
  //       todos: [
  //         ...state.todos,
  //         {
  //           title,
  //           completed: false,
  //         },
  //       ],
  //     };
  //   default:
}
