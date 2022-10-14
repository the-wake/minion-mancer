import React from 'react';

import './Card.css';


function Card({ creatureData }) {

  // TODO: Might want to put in something to sanitize the data (caps, etc.).

  if (!creatureData.perception) {
    if (creatureData.wisdom % 2 === 0) {
      creatureData.perception = creatureData.perception = (creatureData.wisdom - 10) / 2;
    } else {
      creatureData.perception = creatureData.perception = (creatureData.wisdom - 10) / 2 - .5;
      console.log(`Rounding down to ${creatureData.perception}.`);
    }
  };

  const moveAssist = () => {
    if (Object.keys(creatureData.speed).length === 1) {
      return <div>
        <div className="top-stat-block flex flex-col justify-center content-center">
          <p className="font-bold text-xl text-red-800">{creatureData.speed.walk}</p>
          <p className="text-sm">Walk</p>
        </div>
      </div>
    } else {
      return <div>Dogs and cats living together!</div>
    };
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
            <p className="top-stat-footer top-stat-footer-xs mt-0 flex justify-center items-center text-center content-center">{creatureData.armor_desc}</p>
          </div>
          <div className="top-stat-block flex flex-col justify-center content-center">
            <p className="font-bold text-xl text-red-800">{creatureData.hit_points} HP</p>
            <p className="top-stat-footer top-stat-footer-xs mt-0 w-full">{creatureData.hit_dice}<br />Hit Dice</p>
          </div>
          <div className="top-stat-block flex flex-col justify-center content-center">
            <p className="font-bold text-xl text-red-800">{creatureData.perception}</p>
            <p className="top-stat-footer top-stat-footer-xs mt-0 w-full">Passive <br /> Perception</p>
          </div>
          {moveValue}
        </div>
        <div className="asm-container grid grid-cols-3 gap-4 content-around justify-evenly">
          <div className="asm-block">
            <div className="font-bold text-3xl text-red-800">{creatureData.strength}</div>
            <p>STR</p>
          </div>
          <div className="asm-block">
            <div className="font-bold text-3xl text-red-800">{creatureData.dexterity}</div>
            <p>DEX</p>
          </div>
          <div className="asm-block">
            <div className="font-bold text-3xl text-red-800">{creatureData.constitution}</div>
            <p>CON</p>
          </div>
          <div className="asm-block">
            <div className="font-bold text-3xl text-red-800">{creatureData.intelligence}</div>
            <p>INT</p>
          </div>
          <div className="asm-block">
            <div className="font-bold text-3xl text-red-800">{creatureData.wisdom}</div>
            <p>WIS</p>
          </div>
          <div className="asm-block">
            <div className="font-bold text-3xl text-red-800">{creatureData.charisma}</div>
            <p>CHA</p>
          </div>
        </div>
        <p className="text-gray-700 text-base mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>
  );
};

export default Card;
