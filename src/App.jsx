import Card from "./components/card";

function User({ name, avatar, age, connected }) {
  const statusColor = connected ? "bg-green-500" : "bg-red-500";
  return (
    <section className="*mb-2 ml-4 flex items-center space-x-4 rounded-lg border-2 border-gray-300 bg-white p-4 shadow-md">
      <div>
      <img className="h-16 w-16 rounded-full"src={avatar} alt={name}/>
      <span
        className={`absolute right-0 bottom-0 block h-3 w-3 rounded-full ${statusColor}`}>
      </span>
      </div>
      <p>{name}</p>
      <p>Age: {age}</p>
      <div/>

      <button className="ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
          >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM10.53 6.22a.75.75 0 0 1 1.06-.02l3.69 3.53a.75.75 0 0 1 .22.53v7.69a.75.75 0 0 1-1.5 0v-7.08l-3.22-3.07a.75.75 0 0 1-.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </section>
  );
}

function App() {
  return (
    <div className="justify-left flex min-h-screen flex-col items-center bg-gray-100 p-4">
      <section className="bg-gray-200" flex items-center justify-center shadow-md rounded-lg p-4>
        <h1 className="pt-4 pl-4 text-3xl font-bold">Room</h1>
        <p className="mb-8 pl-4 text-gray-600">
          5 people are around right now !
        </p>
        <Card
          name="Dale Houston"
          job="Software Engineer"
          image="https://testingbot.com/free-online-tools/random-avatar/50"
        />
        <Card
          name="Jane Doe"
          job="Product Manager"
          image="https://testingbot.com/free-online-tools/random-avatar/60"
        />
        <Card
          name="John Smith"
          job="Designer"
          image="https://testingbot.com/free-online-tools/random-avatar/70"
        />
        <Card
          name="Alice Johnson"
          job="Data Scientist"
          image="https://testingbot.com/free-online-tools/random-avatar/80"
        />
        <Card
          name="Bob Williams"
          job="Sales Associate"
          image="https://testingbot.com/free-online-tools/random-avatar/90"
        />
      </section>
    </div>
  );
}

export default App;
