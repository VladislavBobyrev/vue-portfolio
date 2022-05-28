<template>
  <nav :class="['navigation', burgerIsActive  ? 'active' : null]">
  <ul class="pages">
    <li><a href="#">about</a></li>
    <li><a href="#">projects</a></li>
    <li><a href="#">new</a></li>    
  </ul>

  <ul class="thumb" data-text="THEME">
    <li @click="changeTheme('lihght')"></li>
    <li class="invert" @click="changeTheme('dark')"></li>
  </ul>
</nav>
</template>

<script>
export default {
  props: ['burgerIsActive'],
  setup(){
    const setTheme = (theme) =>
    {
      const themeLink = document.querySelector('html[data-theme]')
      console.log(theme);
      themeLink.classList.add('color-theme-in-transition')
      themeLink.dataset.theme = theme  

      window.setTimeout(function() {
      themeLink.classList.remove('color-theme-in-transition')
      }, 300)
    }

    const getThemeLockalStorage = () =>
    {
      if (!localStorage.getItem('theme')) return 
      if (localStorage.getItem('theme') == 'dark') return
      setTheme(localStorage.getItem('theme'))
    }
    getThemeLockalStorage(localStorage.getItem('theme'))

    const setThemeLockalStorage = (theme) =>
    {
      localStorage.setItem('theme', theme)
    }

    const changeTheme = (theme) =>
    {
      console.log(theme)
      setTheme(theme)
      setThemeLockalStorage(theme)
    }

    return {
      changeTheme
    }
}

}
</script>

<style>
  
</style>