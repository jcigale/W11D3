import React from 'react';
import { Link } from "react-router-dom";

class PokemonIndexItem extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        const { poke } = this.props;
        return (
            <li className="pokemon-index-item" >
                <Link to='/pokemon/:pokemonId'>
                    <span>{poke.id}</span>
                    <img src={poke.imageUrl} />
                    <span>{poke.name}</span>
                </Link>
            </li>
        )
    }

}

export default PokemonIndexItem;



