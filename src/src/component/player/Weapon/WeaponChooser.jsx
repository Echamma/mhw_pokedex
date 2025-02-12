import React, { useEffect, useState } from 'react';

const WeaponChooser = ({ setWeapon }) => {
    const [weapons, setWeapons] = useState([]);

    const fetchWeaponData = async () => {
        const response = await fetch('./weapons.json');
        const weaponsData = await response.json(); 
        return weaponsData;
    };

    useEffect(() => {
        const loadWeapons = async () => {
            const weaponsData = await fetchWeaponData();
            setWeapons(Object.keys(weaponsData)); 
        };

        loadWeapons();
    }, []);

    return (
        <select onChange={(e) => setWeapon(e.target.value)}>
            {weapons.map((weaponName, index) => (
                <option key={index} value={weaponName}>
                    {weaponName}
                </option>
            ))}
        </select>
    );
};

export default WeaponChooser;