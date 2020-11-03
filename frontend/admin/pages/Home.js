/**
 * Home page
 */
import React, { useEffect, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked Home{count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Home;