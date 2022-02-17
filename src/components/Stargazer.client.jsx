import { Suspense, useState } from "react";
import Button from "./Button.client";
import repos from "../model/repos";
import Repo from "./Repo.jsx";

const Stargazer = () => {
  // Maybe a debounce function, or some sort of caching is needed to avoid making a request on every click
  const [count, setCount] = useState(0);

  console.log(count);

  return (
    <div>
      <div className="counter">
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
      </div>

      {/* 
        {/* Ideally we would use an Error Boundary here, for a more idiomatic React 
        but getDerivedStateFromError it's not supported in RSCs */}
        <Repo repo={repos[count]} />
     {/* </Suspense>  */}

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
        div.counter {
          display: flex;
          justify-content: space-between;
        }

        div.counter p {
          margin-left: 2rem;
          margin-right: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Stargazer;
