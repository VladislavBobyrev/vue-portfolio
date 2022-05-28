<template>
  <div class="main-banner">
    <h2> VUE <span> разработчик</span></h2>
    <p>Всем привет! Меня зовут Владислав, I love javascript</p>
    <a href="#">Смотреть проекты</a>
  </div>
  <div class="img-box">
    <img src="../assets/robot.png" alt="">
    <div class="circle"></div>
    <svg>
      <filter id='wavy'>
        <feTurbulence x='0' y='0' baseFrequency='0.009' numOctaves='5' seed='2'>
          <animate attributeName='baseFrequency' dur='120s' values='0.02;0.005;0.02' repeatCount='indefinite'></animate>
        </feTurbulence>
        <feDisplacementMap in='SourceGraphic' scale='30'></feDisplacementMap>
      </filter>
    </svg>
  </div>
</template>