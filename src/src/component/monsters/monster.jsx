import React, { useState, useEffect } from 'react';
import Ability from '../player/ability';
import Monsters from './monsters.json'; // Or your fetch/axios import
import Monster from './item';

const AllMonsters = () => {
    const [monsters, setMonsters] = useState([]); // Initialize as empty array

    useEffect(() => {
        // If using fetch or axios:
        // fetch('./monsters.json')
        //   .then(res => res.json())
        //   .then(data => setMonsters(data.monsters))
        //   .catch(error => console.error("Error loading JSON:", error));

        // If using direct import (as you are currently):
        setMonsters(Monsters.monsters);
    }, []); // Empty dependency array ensures this runs only once

    if (monsters.length === 0) {
        return <div>Loading...</div>; // Display a loading message
    }

    return (
        <div>
            {monsters.map((monster, index) => (
                <Monster key={index} name={monster.name} type={monster.type} desc={monster.description} />
            ))}
        </div>
    );
};

export default AllMonsters;