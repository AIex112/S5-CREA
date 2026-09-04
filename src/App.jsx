const name = "Hedy Lamarr";
const age = 30;
const monStyle = { backgroundColor: "lightgray", padding: "20px" };

function App() {
  return (
    <>
      <h1>{name}'s Todos</h1>
      <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" />
      <ul style={monStyle}>
        <li>Invent new traffic lights {age +1 }</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}

export default App;