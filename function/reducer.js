
const init = {
  todos:[
    {
      title : 'Nigga',
      completed : false
    },
    {
      title : 'Chigga',
      completed : true
    }
  ]
};

export default function reducer(state = init, action, args) {
  switch (action) {
    default:
      return state;
  }
}
