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
      <Card name="Dale Houston" job="Software Engineer" image="https://testingbot.com/free-online-tools/random-avatar/50" />
      <Card name="Jane Doe" job="Product Manager" image="https://testingbot.com/free-online-tools/random-avatar/60" />
      <Card name="John Smith" job="Designer" image="https://testingbot.com/free-online-tools/random-avatar/70" />
      <Card name="Alice Johnson" job="Data Scientist" image="https://testingbot.com/free-online-tools/random-avatar/80" />
      <Card name="Bob Williams" job="Sales Associate" image="https://testingbot.com/free-online-tools/random-avatar/90" />
    </>
  );
}

export default App;