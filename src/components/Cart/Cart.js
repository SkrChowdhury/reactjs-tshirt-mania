import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveItem }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please buy at least one item!</p>;
  } else if (cart.length === 1) {
    message = (
      <div>
        <h3>Buy Another for me</h3>
        <p>Buy one for yourself</p>
        <p>
          <small>Buy another for me, please</small>
        </p>
      </div>
    );
  } else {
    message = <p>Thanks for buying</p>;
  }
  return (
    <div>
      <h3 className={cart.length === 2 ? `orange` : `purple`}>Order Summary</h3>
      <h5 className={`bold ${cart.length === 2 ? `blue` : `yellow`}`}>
        Order Quantity: {cart.length}
      </h5>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{' '}
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>
        </p>
      ))}
      {/* Conditional Rendering 1 */}
      {message}

      {/* Conditional Rendering ternary operator */}
      {cart.length === 3 ? (
        <p>3 items added</p>
      ) : (
        <p> more or less than 3 items</p>
      )}

      {/* Conditional Rendering &&(AND) operator */}

      <p>AND Operator</p>
      {cart.length === 2 && <h2>Double Items</h2>}

      {/* Conditional Rendering ||(OR) operator */}
      <p>OR Operator</p>
      {cart.length === 4 || <p>Not four items</p>}
    </div>
  );
};

export default Cart;

/*

COnditional Rendering:

1. use element in a variable and then use if-else to set value

2. ternary operator condition ? true : false

3. && operator (if condition is true, i want to display something)

4 || operator (if condition is false, i want to display something)

*/
