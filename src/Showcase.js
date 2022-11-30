import bulbImg from "./images/bulbasaur.jpg";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = { type: "Grass", move: "Vine Whip" };
  const styleOne = {
    backgroundColor: "white",
    color: "green"
  };

  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <h2 style={{ backgroundColor: "green", color: "white" }}>
        Type :{pokeCharacteristics.type}
      </h2>
      <h2 style={styleOne}>Move on : {pokeCharacteristics.move}</h2>
      <img
        style={{ height: "100px", width: "100px" }}
        src={bulbImg}
        alt="bulbasaur"
      />
    </div>
  );
}

export default Showcase;
