import Stargazer from "../components/Stargazer";

export default function Home() {
  return (
    <main> 
      <Stargazer /> 
      <style global jsx>{`
        body {
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0px;
          padding: 0px;
          height: 100vh;
        }
      `}</style>
    </main>
  );
}
