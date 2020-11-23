import React, { Component } from "react";
import pokeball from "./img/Pokeball-icon@2x.png";
import axios from "axios";
import "./styles.css";
import PokeImg from "./PokeImg";

const apiPoke = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
});

class Pokezeres extends Component {
  state = {
    pokelist: []
  };

  async componentDidMount() {
    const response = await apiPoke.get();

    this.setState({
      pokelist: response.data.results
    });
  }

  render() {
    return (
      <div className="box-poke">
        <div className="box-ball-title">
          <img className="pokeball" src={pokeball} alt="pokeball" />
          <h1 className="title">Pokezeres</h1>
        </div>
        <div className="box-map">
          {this.state.pokelist.map((item, index) => (
            <div key={index} className="box-map-return">
              <PokeImg url={item.url} />
              <div className="box-subtitle-description">
                <h2 className="subtitle">{item.name}</h2>
                <p className="description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Pokezeres;
