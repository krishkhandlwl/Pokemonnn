import React from "react";
// import "./Pokeinfo.css"; // Import additional CSS file for Pokeinfo styling

const Pokeinfo = ({ data }) => {
    return (
        <div className="poke-info-container">
            {data && (
                <>
                    <h1 className="poke-name">{data.name}</h1>
                    <img
                        className="poke-image"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                        alt={`Image of ${data.name}`}
                    />
                    <div className="abilities">
                        {data.abilities.map((poke) => (
                            <div key={poke.ability.name} className="group">
                                <h2>{poke.ability.name}</h2>
                            </div>
                        ))}
                    </div>
                    <div className="base-stat">
                        {data.stats.map((poke) => (
                            <h3 key={poke.stat.name}>
                                {poke.stat.name}: {poke.base_stat}
                            </h3>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Pokeinfo;
