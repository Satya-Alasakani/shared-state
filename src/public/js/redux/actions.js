// src/public/js/redux/actions.js
const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });

window.increment = increment;
window.decrement = decrement;