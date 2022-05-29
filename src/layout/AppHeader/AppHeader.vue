<template>
<header :class="[burgerIsActive ? 'active' : null]">
  <router-link to="/" class="logo"><span>MR. BOBYREV</span></router-link>
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