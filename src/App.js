import "./styles.css";

function App() {
  const name = "Kauan";
  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }
  const url =
    "https://r.search.yahoo.com/_ylt=Awrhbi1jj9Vk9ncJYTX.6Qt.;_ylu=c2VjA2ZwLWF0dHJpYgRzbGsDcnVybA--/RV=2/RE=1691746275/RO=11/RU=http%3a%2f%2fwww.imagenesdegatos.net%2ffotos%2f/RK=2/RS=5l8CP628M.CsMUy6UK8EsdHmOvc-/150px";

  return (
    <div className="App">
      <h1>aqui JSX</h1>
      <p>Ola,{newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="foto de gato" />
    </div>
  );
}
export default App;
