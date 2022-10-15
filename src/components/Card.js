import React from 'react';

import './Card.css';


function Card({ creatureData }) {

  // const abilityScores = [
  //   {
  //     name: 'Strength',
  //     slug: 'strength',
  //     abbrev: 'str'
  //   },
  //   {
  //     name: 'Dexterity',
  //     slug: 'dexterity',
  //     abbrev: 'dex'
  //   },
  //   {
  //     name: 'Constitution',
  //     slug: 'constitution',
  //     abbrev: 'con'
  //   },
  //   {
  //     name: 'Intelligence',
  //     slug: 'intelligence',
  //     abbrev: 'int'
  //   },
  //   {
  //     name: 'Wisdom',
  //     slug: 'wisdom',
  //     abbrev: 'wis'
  //   },
  //   {
  //     name: 'Charisma',
  //     slug: 'charisma',
  //     abbrev: 'cha'
  //   },
  // ];

  // const abilityScores = {
  //   strength: creatureData.strength,
  //   dexterity: creatureData.dexterity,
  //   constitution: creatureData.constitution,
  //   intelligence: creatureData.intelligence,
  //   wisdom: creatureData.wisdom,
  //   charisma: creatureData.charisma,
  // };

  const getASM = (ability) => {
    if (creatureData[ability] % 2 === 0) {
      return (creatureData[ability] - 10) / 2;
    } else {
      return (creatureData[ability] - 10) / 2 - .5;
    }
  };

  if (!creatureData.perception) {
    creatureData.perception = creatureData.perception = getASM('wisdom') + 10;
  };

  const moveAssist = () => {
    // const speeds = { walk: 10, fly: 20, swim: 30 };
    const speeds = creatureData.speed;
    if (Object.keys(speeds).length === 1) {
      return <div>
        <div className="top-stat-block flex flex-col justify-center content-center">
          <p className="font-bold text-xl text-red-800">{Object.values(speeds)[0]}</p>
          <p className="text-sm">{Object.keys(speeds)[0].charAt(0).toUpperCase() + Object.keys(speeds)[0].slice(1)}</p>
        </div>
      </div>
    } else
      if (Object.keys(speeds).length === 2) {
        return <div className="top-stat-block flex flex-col justify-center content-center grid grid-rows-2 grid-cols-5">
          <span className="font-bold text-red-800 col-span-2">{Object.values(speeds)[0]}</span> <span className="col-span-3">{Object.keys(speeds)[0].charAt(0).toUpperCase() + Object.keys(speeds)[0].slice(1)}</span>
          <span className="font-bold text-red-800 col-span-2">{Object.values(speeds)[1]}</span> <span className="col-span-3">{Object.keys(speeds)[1].charAt(0).toUpperCase() + Object.keys(speeds)[1].slice(1)}</span>
        </div>
        // Doesn't have handing for >3 speeds, but I don't think anything has that.
      } else {
        return <div className="three-speed top-stat-block flex flex-col justify-center content-center grid grid-rows-3 grid-cols-5">
          <span className="font-bold text-red-800 col-span-2">{Object.values(speeds)[0]}</span> <span className="col-span-3">{Object.keys(speeds)[0].charAt(0).toUpperCase() + Object.keys(speeds)[0].slice(1)}</span>
          <span className="font-bold text-red-800 col-span-2">{Object.values(speeds)[1]}</span> <span className="col-span-3">{Object.keys(speeds)[1].charAt(0).toUpperCase() + Object.keys(speeds)[1].slice(1)}</span>
          <span className="font-bold text-red-800 col-span-2">{Object.values(speeds)[2]}</span> <span className="col-span-3">{Object.keys(speeds)[2].charAt(0).toUpperCase() + Object.keys(speeds)[2].slice(1)}</span>
        </div>
      };
  };

  const attacks = creatureData.actions.map((action) => {
    return <div className="my-3 grid grid-cols-5 justify-between align-center">
      <p className="font-bold">{action.name}</p>
      <p className="col-span-4">{action.desc}</p>
    </div>
  });

  const setAttacks = () => {
    // Stuff goes here
  };

  const moveValue = moveAssist();

  return (
    <div className="creature-card max-w-sm rounded overflow-hidden shadow-lg">
      {creatureData.img_main
        ? <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
        : null
      }
      <div className="px-2 py-2">
        <div className="font-bold text-2xl">{creatureData.name}</div>
        <p className="text-center text-gray-500 text-xs">
          {creatureData.size} {creatureData.type}{creatureData.alignment ? `, ${creatureData.alignment}` : null}
        </p>
        <div className="top-stat-main grid grid-cols-4 gap-x-3 content-around justify-between">
          <div className="top-stat-block flex flex-col justify-center content-center">
            <p className="font-bold text-xl text-red-800">AC {creatureData.armor_class}</p>
            <p className="top-stat-footer xxs-text mt-0 flex justify-center items-center text-center content-center">{creatureData.armor_desc}</p>
          </div>
          <div className="top-stat-block flex flex-col justify-center content-center">
            <p className="font-bold text-xl text-red-800">{creatureData.hit_points} HP</p>
            <p className="top-stat-footer xxs-text mt-0 w-full">{creatureData.hit_dice}<br />Hit Dice</p>
          </div>
          <div className="top-stat-block flex flex-col justify-center content-center">
            <p className="font-bold text-xl text-red-800">{creatureData.perception}</p>
            <p className="top-stat-footer xxs-text mt-0 w-full">Passive <br /> Perception</p>
          </div>
          {moveValue}
        </div>
        <div className="asm-container mt-4 grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-1 content-around justify-evenly">
          <div>
            <div className="asm-block">
              <div className="font-bold text-xl text-red-800">{creatureData.strength}</div>
              <p>STR</p>
            </div>
            <span className="font-bold">Save: {creatureData.strength_save ? creatureData.strength_save : getASM('strength')}</span>
          </div>
          <div>
            <div className="asm-block">
              <div className="font-bold text-xl text-red-800">{creatureData.dexterity}</div>
              <p>DEX</p>
            </div>
            <span className="font-bold">Save: {creatureData.dexterity_save ? creatureData.dexterity_save : getASM('dexterity')}</span>
          </div>
          <div>
            <div className="asm-block">
              <div className="font-bold text-xl text-red-800">{creatureData.constitution}</div>
              <p>CON</p>
            </div>
            <span className="font-bold">Save: {creatureData.constitution_save ? creatureData.constitution_save : getASM('constitution')}</span>
          </div>
          <div>
            <div className="asm-block">
              <div className="font-bold text-xl text-red-800">{creatureData.intelligence}</div>
              <p>INT</p>
            </div>
            <span className="font-bold">Save: {creatureData.intelligence_save ? creatureData.intelligence_save : getASM('intelligence')}</span>
          </div>
          <div>
            <div className="asm-block">
              <div className="font-bold text-xl text-red-800">{creatureData.wisdom}</div>
              <p>WIS</p>
            </div>
            <span className="font-bold">Save: {creatureData.wisdom_save ? creatureData.wisdom_save : getASM('wisdom')}</span>
          </div>
          <div>
            <div className="asm-block">
              <div className="font-bold text-xl text-red-800">{creatureData.charisma}</div>
              <p>CHA</p>
            </div>
            <span className="font-bold">Save: {creatureData.charisma_save ? creatureData.charisma_save : getASM('charisma')}</span>
          </div>
        </div>
        <div className="mid-area mt-4">
          <div className="sense-container">
            {creatureData.senses}
          </div>
        </div>
        {/* {attacks
          ? <div className="attack-container text-gray-700 text-base mt-4">
            {attacks}
          </div>
          : null
        } */}
      </div>
    </div>
  );
};

export default Card;
