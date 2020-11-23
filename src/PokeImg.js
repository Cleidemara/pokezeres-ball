import React, { Component } from "react";
import axios from "axios";

class PokeImg extends Component {
  state = {
    img: []
  };

  async componentDidMount() {
    const response = await axios.get(this.props.url);
    console.log(response);
    this.setState({
      img: response.data.sprites.other.dream_world.front_default
    });
  }

  render() {
    return (
      <div>
        <img className="pokemon" src={this.state.img} alt="" />
      </div>
    );
  }
}
export default PokeImg;
