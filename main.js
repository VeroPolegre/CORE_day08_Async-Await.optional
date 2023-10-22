const getRandomPokemon = async () => {
  try {
    let pokemon = Math.floor(Math.random() * 248);
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

getRandomPokemon();

const printImageAndName = async () => {
  try {
    const pokemon = Math.floor(Math.random() * 248);
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const name = res.data.name;
    const img = res.data.sprites.front_default;
    console.log(name, img);
    pokePrint = document.getElementById("poke-print");
    pokePrint.innerHTML = `<section>
    <img src="${img}"><h2>${name}</h2>
    </section>`;
  } catch (error) {
    console.error(error);
  }
};

printImageAndName();
