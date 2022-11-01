// import Boxes from "./components/Boxes";
import cardBack from "./components/cardBack";
import Cards from "./components/Cards";
import Form from "./components/Form";
// import AddingButton from "./components/memeForm/AddingButton";
import Header from "./components/memeForm/Header";
import Meme from "./components/memeForm/Meme";

function App() {
  const cards = cardBack.map((card) => {
    return <Cards key={card.id} {...card} />;
  });
  return (
    <div className="container">
      <Header />
      <Meme />
      <div className="content"></div>
      {/* <AddingButton /> */}
      <h1 style={{ textAlign: "center" }}>Welcome To My Card Ventures</h1>
      <section className="card-stat">{cards}</section>
      <Form />
    </div>
  );
}

export default App;
