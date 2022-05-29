<template>
  <app-header/>
  <app-main/>

  <app-loading/>
</template>

<script>
import '@/style/style.scss'
import {defineComponent} from 'vue'
import AppHeader from '@/layout/AppHeader/AppHeader.vue'
import AppMain from '@/layout/AppMain/AppMain.vue'
import AppLoading from '@/components/loading/AppLoading.vue'

export default defineComponent({
  components: {AppHeader, AppMain, AppLoading}
})
</script>