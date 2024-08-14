// src/public/js/react/increment-component.js
const { Provider, useDispatch } = ReactRedux;

const Increment = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(window.increment())}>Increment</button>
  );
};

ReactDOM.render(<Provider store={store}><Increment /></Provider>, document.querySelector('INCREMENT'));