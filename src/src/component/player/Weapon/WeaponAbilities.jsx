import { useState, useEffect } from "react";
import weapons from './weapons.json';


const WeaponAbilities = ({ Weapon, Level }) => {
    const [actions, setActions] = useState([]);
    const [passiveAbilities, setPassiveAbilities] = useState([]);
    const [semiActionAbilities, setSemiActionAbilities] = useState([]);
    const [bonusActions, setBonusActions] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            const correctWeapon = weapons[Weapon];

            if (correctWeapon) {
                setPassiveAbilities(correctWeapon['Passives'] || []);
                setActions(correctWeapon['Actions'] || []);
                setSemiActionAbilities(correctWeapon['Semi-Actions'] || []);
                setBonusActions(correctWeapon['Bonus Actions'] || []);
            }
        };

        fetchData();
    }, [Weapon]);

    // Filter abilities based on the level
    const levelFilteredActions = actions.filter(action => action.level <= Level);
    const levelFilteredPassives = passiveAbilities.filter(ability => ability.level <= Level);
    const levelFilteredSemiActions = semiActionAbilities.filter(semiAction => semiAction.level <= Level);
    const levelFilteredBonusActions = bonusActions.filter(bonusAction => bonusAction.level <= Level);

    return (
        <div>
            <h2>Weapon Abilities</h2>
            <h3>Passive Abilities</h3>
            <ul>
                {levelFilteredPassives.map((ability, index) => (
                    <li key={index}>{ability.Ability}</li> // Corrected here
                ))}
            </ul>
            <h3>Actions</h3>
            <ul>
                {levelFilteredActions.map((action, index) => (
                    <li key={index}>{action.Ability}</li> // Corrected here
                ))}
            </ul>
            <h3>Semi-Actions</h3>
            <ul>
                {levelFilteredSemiActions.map((semiAction, index) => (
                    <li key={index}>{semiAction.Ability}</li> // Corrected here
                ))}
            </ul>
            <h3>Bonus Actions</h3>
            <ul>
                {levelFilteredBonusActions.map((bonusAction, index) => (
                    <li key={index}>{bonusAction.Ability}</li> // Corrected here
                ))}
            </ul>
        </div>
    );
};

export default WeaponAbilities;