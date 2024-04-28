# Simple TodoList Web App

This is a simple TodoList web app built using React.js with Redux for state management. The app allows users to add, delete, and mark tasks as completed. The application data is stored locally using browser's local storage, ensuring persistence even after page reloads.

## Features

- Add tasks to the TodoList.
- Mark tasks as completed.
- Delete tasks from the TodoList.
- Tasks are stored locally using browser's local storage.
- Redux for state management.

## Technologies Used

- React.js
- Redux
- HTML
- CSS

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/TienDatCactus/to_do_list_redux.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

3. You can now add, delete, and mark tasks as completed in the TodoList.

## Local Storage

The application uses browser's local storage to store the TodoList data locally. This ensures that the data persists even after page reloads or browser restarts.

## Redux State Management

Redux is used for state management in this application. It helps in managing the application state efficiently, making it easier to handle complex interactions and data flow.

## Redux Reducer and Actions

Below is the code snippet for the Redux reducer and actions used in the application:

```javascript
import storage from "./local-storage.js";

const init = {
  todos: storage.get(),
  filter: "all",
  filters: {
    all: () => true,
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  },
  editIndex: null,
};

const actions = {
  // Define your actions here...
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
}
