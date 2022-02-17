// On a more complex app we would import a 'reset' list of CSS styles

const Button = ({ isPrimary, onClickHandler, children }) => (
  <button onClick={onClickHandler} className={isPrimary && "primary"}>
    {children}
    <style jsx>{`
      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;

        background-color: white;
        color: black;
        border-color: black;
        border: 1px solid black;
        padding: 1rem;
        border-radius: 2rem;
        font-weight: bold;
      }

      button:hover {
        background-color: black;
        color: white;
        border-color: black;
      }

      button.primary {
        background-color: hotpink;
        color: white;
        border-color: hotpink;
      }

      button.primary:hover {
        background-color: rebeccapurple;
        color: white;
        border-color: rebeccapurple;
      }
    `}</style>
  </button>
);

export default Button
