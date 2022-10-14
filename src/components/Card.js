import React from 'react';

import './Card.css';


function Card({ creatureData }) {

  // TODO: Might want to put in something to sanitize the data (caps, etc.).

  return (
    <div className="creature-card max-w-sm rounded overflow-hidden shadow-lg">
      {creatureData.img_main
        ? <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
        : null
      }
      <div className="px-6 py-4">
        <div className="font-bold text-2xl">{creatureData.name}</div>
        <p className="text-center text-gray-500 text-xs">
          {creatureData.size} {creatureData.type}{creatureData.alignment ? `, ${creatureData.alignment}` : null}
        </p>
        <div className="top-stat-main grid grid-cols-4 gap-3 content-around justify-evenly">
          <div className="top-stat-block">
            <p className="font-bold text-3xl text-red-800">{creatureData.armor_class}</p>
            <div className="top-stat-footer text-sm mt-1">
              {creatureData.armor_desc}
            </div>
          </div>
          <div className="top-stat-block">Text</div>
          <div className="top-stat-block">Text</div>
          <div className="top-stat-block">Text</div>
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
