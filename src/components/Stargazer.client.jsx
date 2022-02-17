import Button from "./Button.client";

const Stargazer = () => {
  return (
    <div>
      <Button onClickHandler={() => undefined} isPrimary>
        - DECREMENT
      </Button>

      <style global jsx>{`
        body {
          font-family: Arial, Helvetica, sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Stargazer;
