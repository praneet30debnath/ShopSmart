// ShopPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incremented,decremented,loggedIn } from '../../Redux/Store';

const ShopPage = () => {

  const dispatch = useDispatch();
  const counterValue = useSelector(state => state.value);

  const handleIncrement = () => {
    dispatch(incremented());
  };

  const handleDecrement = () => {
    dispatch(decremented());
  };

  const handleLogIn = () => {
    dispatch(loggedIn({ value: true }));
  };

  const handleLogout = () => {
    dispatch(loggedIn({ value: false }));
  };

  return (
    <div>
      <h1>Counter Value: {counterValue}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default ShopPage;
