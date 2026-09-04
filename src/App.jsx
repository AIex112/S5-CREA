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
    <div className="flex flex-col items-center justify-left min-h-screen bg-gray-100 p-4">
    <section className="bg-gray-200 " flex items-center justify-center>
      <h1 className="text-3xl font-bold pl-4 pt-4">Room</h1>
      <p className="text-gray-600 mb-8 pl-4">5 people are around right now !</p>
      <Card name="Dale Houston" job="Software Engineer" image="https://testingbot.com/free-online-tools/random-avatar/50" />
      <Card name="Jane Doe" job="Product Manager" image="https://testingbot.com/free-online-tools/random-avatar/60" />
      <Card name="John Smith" job="Designer" image="https://testingbot.com/free-online-tools/random-avatar/70" />
      <Card name="Alice Johnson" job="Data Scientist" image="https://testingbot.com/free-online-tools/random-avatar/80" />
      <Card name="Bob Williams" job="Sales Associate" image="https://testingbot.com/free-online-tools/random-avatar/90" />
    </section>
    </div>
  );
}

export default App;