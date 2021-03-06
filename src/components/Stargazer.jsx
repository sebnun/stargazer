import { Suspense, useState } from "react";
import Button from "./Button";
import repos from "../model/repos";
import Repo from "./Repo.jsx";

const Stargazer = () => {
  // Maybe a debounce function, is needed to avoid making a request on every click
  const [count, setCount] = useState(0);

  return (
    <div className="container">
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

      <Repo repoId={repos[count]} />

      <style jsx>{`
        div.counter {
          display: flex;
          justify-content: space-around;
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
