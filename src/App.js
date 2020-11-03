import { Component } from "react";
import "./App.css";
import CharacterList from "./components/character-list/CharacterList";

class App extends Component {
  state = { characterList: [] };

  componentDidMount() {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results); // results está funcionando.
        this.setState({ characterList: res.results });
      });
  }

  render() {
    const { characterList } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <div></div>
          <CharacterList list={characterList} />
        </header>
      </div>
    );
  }
}

export default App;
