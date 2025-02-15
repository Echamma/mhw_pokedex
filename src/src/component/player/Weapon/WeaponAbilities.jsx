import { useState, useEffect } from "react";
import weapons from './weapons.json';
import Ability from "../ability";
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

    const levelFilteredActions = actions.filter(action => action.level <= Level);
    const levelFilteredPassives = passiveAbilities.filter(ability => ability.level <= Level);
    const levelFilteredSemiActions = semiActionAbilities.filter(semiAction => semiAction.level <= Level);
    const levelFilteredBonusActions = bonusActions.filter(bonusAction => bonusAction.level <= Level);

    return (
        <div className="container abilityContainer mt-5 scroll-auto">
            <h2 className="flex justify-center">Weapon Abilities</h2>
            
            {/* Passives Section */}
            {levelFilteredPassives.length > 0 && (
                <div>
                    {levelFilteredPassives.map((ability, index) => (
                        <Ability
                            key={`passive-${index}`}
                            name={ability.Ability}
                            type={`Passive-${ability.level}`} 
                            desc={ability.Description}
                        />
                    ))}
                </div>
            )}

            {/* Actions Section */}
            {levelFilteredActions.length > 0 && (
                <div>
                    {levelFilteredActions.map((action, index) => (
                        <Ability
                            key={`action-${index}`}
                            name={action.Ability}
                            type={`Action-${action.level}`} 
                            desc={action.Description}
                        />
                    ))}
                </div>
            )}

            {/* Semi-Actions Section */}
            {levelFilteredSemiActions.length > 0 && (
                <div>
                    {levelFilteredSemiActions.map((semiAction, index) => (
                        <Ability
                            key={`semi-${index}`}
                            name={semiAction.Ability}
                            type={`Semi-${semiAction.level}`} 
                            desc={semiAction.Description}
                        />
                    ))}
                </div>
            )}

            {/* Bonus Actions Section */}
            {levelFilteredBonusActions.length > 0 && (
                <div>
                    {levelFilteredBonusActions.map((bonusAction, index) => (
                        <Ability
                            key={`bonus-${index}`}
                            name={bonusAction.Ability}
                            type={`Bonus-${bonusAction.level}`} 
                            desc={bonusAction.Description}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default WeaponAbilities;