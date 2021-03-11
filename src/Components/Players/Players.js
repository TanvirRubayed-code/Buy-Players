import React, { useState } from 'react';
import data from '../../FakeData/fakeData.json';
import Shop from '../Shop/Shop';
import './Players.css';



const Players = () => {


    const [list, setPlayerList] = useState([]);
    const total = list.reduce((total,ply) => total+ply.salary,0)

    const handleAddclub = (player) => {
        const newList = [...list, player];
        setPlayerList(newList);
    }

    console.log(list);
    return (
        <div className='player'>
            <div className="player-container">
                {
                    data.map(player => <Shop player={player} handleAddclub={handleAddclub}></Shop>)
                }
            </div>
            <div className="cart-container">
                <h2>{list.length} Players Added</h2>

                <h4>Selected players name: </h4>
                <ol className='cartstyle'>
                    {list.map(player => <li><h2>{player.name}</h2><small> <b>salary:</b> {player.salary}</small></li>)}
                </ol>
                <h3>Total Budget: {total}</h3>
            </div>
        </div>
    );
};

export default Players;