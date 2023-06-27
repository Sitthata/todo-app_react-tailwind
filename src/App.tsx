import Layout from "./components/Layout";

function App() {
  return (
    <>
      <div className="fixed h-[40vh] inset-0 z-[-1] bg-hero-pattern-dark dark:bg-hero-pattern-light bg-no-repeat bg-cover bg-top"></div>
      <Layout />
    </>
  );
}

export default App;
