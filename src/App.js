import { Component } from "react";
import "./App.css";
import Form from "./components/Form/Index";
import CharacterList from "./components/character-list/CharacterList";
import axios from "axios";

class App extends Component {
  state = {
    characterList: [],
    nextUrl: "https://rickandmortyapi.com/api/character/",
    contador: 0,
    searchByName: "",
  };
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ characterList: res.results });
        console.log({ res });
      });
    this.getCharacters(this.state.nextUrl);
  }

  getCharacters(url) {
    const { characterList } = this.state;

    fetch(url)
      .then((res) => res.json())
      .then((body) => {
        this.setState({
          // Fazendo o spread do estado atual e dos novos resultados e jogando tudo em novo array.
          characterList: [...characterList, ...body.results],
          nextUrl: body.info.next, // se não houver próxima página, o next será null
          contador: body.info.count,
        });
      });
  }
  componentDidUpdate(_prevProps, _prevState, _snapshot) {
    if (this.state.nextUrl !== null) {
      this.getCharacters(this.state.nextUrl);
    }
  }

  // aqui vai o request para o search filter
  inputHandler = (e) => {
    this.setState({ searchByName: e.target.value });
  };

  clickHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?name=${this.state.searchByName}`
      )
      .then((res) => {
        console.log({ res });
        this.setState({ characterList: res.data.results });
      });
  };

  render() {
    const { characterList } = this.state;
    console.log(this.state.searchByName);
    return (
      <div className="App">
        <div className="App-filter">
          <Form
            clickHandler={this.clickHandler}
            inputHandler={this.inputHandler}
            counter={this.state.contador}
          />
        </div>

        <div className="App-header">
          <div></div>
          <CharacterList list={characterList} />
        </div>
      </div>
    );
  }
}
export default App;
