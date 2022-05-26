<template>
<header :class="[burgerIsActive ? 'active' : null]">
    <a href="#" class="logo">logo</a>
    <div class="burger" @click="burgerIsActive = !burgerIsActive"></div>
</header>
<app-navigation :burgerIsActive='burgerIsActive'/>
</template>

<script>
import AppNavigation from '@/components/navigation/AppNavigation.vue'
import { ref } from '@vue/reactivity'
export default {
  components: {AppNavigation},

  setup() {
    const burgerIsActive = ref(false)

    return{
      burgerIsActive
    }
  }
}
</script>

<style>

</style>