import React from 'react';

import './Card.css';


function Card({ creatureData }) {

  // TODO: Might want to put in more data sanitizing (caps, etc.).

  if (!creatureData.perception) {
    if (creatureData.wisdom % 2 === 0) {
      creatureData.perception = creatureData.perception = (creatureData.wisdom - 10) / 2;
    } else {
      creatureData.perception = creatureData.perception = (creatureData.wisdom - 10) / 2 - .5;
    }
  };

  const moveAssist = () => {
    // const speeds = {walk: 10, fly: 20, swim: 30};
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
        return <div>
          <div className="top-stat-block flex flex-col justify-center content-center">
            <p><span className="font-bold text-xl text-red-800">{Object.values(speeds)[0]}</span> <span className="text-sm">{Object.keys(speeds)[0].charAt(0).toUpperCase() + Object.keys(speeds)[0].slice(1)}</span></p>
            <p><span className="font-bold text-xl text-red-800">{Object.values(speeds)[1]}</span> <span className="text-sm">{Object.keys(speeds)[1].charAt(0).toUpperCase() + Object.keys(speeds)[1].slice(1)}</span></p>
          </div>
        </div>
        // Doesn't have handing for >3 speeds, but I don't think anything has that.
    } else {
        return <div>
          <div className="three-speed top-stat-block flex flex-col justify-center content-center ">
            <p><span className="font-bold text-red-800">{Object.values(speeds)[0]}</span> <span>{Object.keys(speeds)[0].charAt(0).toUpperCase() + Object.keys(speeds)[0].slice(1)}</span><br />
            <span className="font-bold text-red-800">{Object.values(speeds)[1]}</span> <span>{Object.keys(speeds)[1].charAt(0).toUpperCase() + Object.keys(speeds)[1].slice(1)}</span><br />
            <span className="font-bold text-red-800">{Object.values(speeds)[2]}</span> <span>{Object.keys(speeds)[2].charAt(0).toUpperCase() + Object.keys(speeds)[2].slice(1)}</span></p>
          </div>
        </div>
      };


    // const speeds = creatureData.speed;
    // console.log(speeds);
    // for (const movement in speeds) {
    //   console.log(speeds[movement], movement)
    //   return <div>
    //     <div className="top-stat-block flex flex-col justify-center content-center">
    //       <p className="font-bold text-xl text-red-800">{speeds[movement]}</p>
    //       <p className="text-sm">{movement.charAt(0).toUpperCase() + movement.slice(1)}</p>
    //     </div>
    //   </div>
    // };
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
