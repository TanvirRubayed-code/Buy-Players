import React from 'react';
import './Shop.css';

const Shop = (props) => {
    const { name, image, salary } = props.player;
    return (
        <div className="player-shop">
            <div>
                <img src={image} alt="" />
                <div className='information'>
                    <h3>{name}</h3>
                    <h6>Salary: {salary}</h6>
                    <button onClick={() => {
                        props.handleAddclub(props.player);
                    } } className='button'>Add to Club</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;