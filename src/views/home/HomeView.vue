<template>
  <div class="main-banner">
    <h2 class="title"> VUE <span> разработчик</span></h2>
    <p>Всем привет! Меня зовут Владислав Бобырев <br/> I Love JS</p>
    <router-link to="/projects" class='btn primary'>Смотреть проекты</router-link>
  </div>
  <div class="img-box">
    <img src="../../assets/robot.png" class="img-left" alt="сайт портфолио с роботом">
    <img src="../../assets/robot.png" class="img-right" alt="it frontend javascript портфолио">
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