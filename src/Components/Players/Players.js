import React from 'react';
import data from '../../FakeData/fakeData.json';
import './Players.css';



const Players = () => {
    console.log(data);
    return (
        <div>
            {

                data.map(player => {
                    return(
                        <div className='player' key={player.id}>
                            <h2>{player.name}</h2>
                            <p>{player.salary}</p>
                            <img width='200px' src={player.image} alt=""/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Players;