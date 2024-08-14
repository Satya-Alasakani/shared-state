// src/public/js/react/decrement-component.js
const { Provider, useDispatch } = ReactRedux;

const Decrement = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(window.decrement())}>Decrement</button>
  );
};

ReactDOM.render(<Provider store={store}><Decrement /></Provider>, document.querySelector('DECREMENT'));