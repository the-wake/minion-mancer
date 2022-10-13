import React from 'react';

import './Card.css';


function Card({ creatureData }) {

  return (
    <div className="creature-card max-w-sm rounded overflow-hidden shadow-lg">
      {creatureData.img_main
        ? <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
        : null
      }
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{creatureData.name}</div>
        <p className="text-center text-gray-500 text-xs">
          {creatureData.size} {creatureData.type} {creatureData.alignment ? `, ${creatureData.alignment}` : null}
        </p>
        <div className="asm-container grid grid-cols-3 gap-4 content-around justify-evenly">
          <div className="asm-block">
            <div className="font-bold text-3xl">{creatureData.strength}</div>
            <p>Strength</p>
          </div>
          <div className="asm-block">
            <div className="font-bold text-3xl">{creatureData.dexterity}</div>
            <p>Dexterity</p>
          </div>
          <div className="asm-block">
            <div className="font-bold text-3xl">{creatureData.constitution}</div>
            <p>Constitution</p>
          </div>
          <div className="asm-block">
            <div className="font-bold text-3xl">{creatureData.intelligence}</div>
            <p>Intelligence</p>
          </div>
          <div className="asm-block">
            <div className="font-bold text-3xl">{creatureData.wisdom}</div>
            <p>Wisdom</p>
          </div>
          <div className="asm-block">
            <div className="font-bold text-3xl">{creatureData.charisma}</div>
            <p>Charisma</p>
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
