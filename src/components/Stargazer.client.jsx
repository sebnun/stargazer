import { useState } from "react";
import Button from "./Button.client";
import repos from "../model/repos";

const Stargazer = () => {
  // Maybe a debounce function, or some sort of caching is needed to avoid making a request on every click
  const [count, setCount] = useState(0);

  console.log(count);

  return (
    <div>
      <Button
        onClickHandler={() =>
          setCount(count === 0 ? repos.length - 1 : (count -= 1))
        }
      >
        - DECREMENT
      </Button>

      <p>Counter: {count}</p>

      <Button
        onClickHandler={() =>
          setCount(count === repos.length - 1 ? 0 : (count += 1))
        }
        isPrimary
      >
        + INCREMENT
      </Button>

      <style global jsx>{`
        body {
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0px;
          height: 100vh;
        }
      `}</style>

      <style jsx>{`
        div {
          display: flex;
          justify-content: space-between;
        }

        div p {
          margin-left: 2rem;
          margin-right: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Stargazer;
