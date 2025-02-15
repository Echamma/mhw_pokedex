import React, { useEffect, useState } from 'react';
import weapons from './weapons.json'

const WeaponChooser = ({ setWeapon }) => {
    const [weapon, setWeapons] = useState([]);

    useEffect(() => {
        const fetchWeaponData = () => {
            try {
                const weaponsData = weapons;
                console.log(weaponsData)
                setWeapons(Object.keys(weaponsData));
            } catch (error) {
                console.error("Failed to load weapons:", error);
            }
        };

        fetchWeaponData();
    }, []);

    return (
        <select onChange={(e) => setWeapon(e.target.value)} className='container abilityContainer'>
            <option>Choose a weapon</option>
            {weapon.map((weaponName) => (
                <option key={weaponName} value={weaponName}>
                    {weaponName}
                </option>
            ))}
        </select>
    );
};

export default WeaponChooser;