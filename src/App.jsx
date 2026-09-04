import Profile from "./components/Profile";
import Card from "./components/card";


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
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}

export default App;