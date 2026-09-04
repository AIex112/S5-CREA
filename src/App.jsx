import Profile from "./components/Profile";

function User({name, age}) {
  return (
    <div className="bg-amber-900 text-white p-4 m-4 rounded-lg shadow-md">
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <User name="Hedy Lamarr" age={101} />
      <User name="Ada Lovelace" age={207} />
      <User name="Grace Hopper" age={155} />
    </>
  );
}

export default App;