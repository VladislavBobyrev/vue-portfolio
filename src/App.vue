<template>
  <app-header/>
  <app-main/>

  <app-loading/>
</template>

<script>
import '@/layout/style/style.scss'
import {defineComponent} from 'vue'
import AppHeader from '@/layout/components/AppHeader.vue'
import AppMain from '@/layout/components/AppMain.vue'
import AppLoading from '@/components/loading/AppLoading.vue'

export default defineComponent({
  components: {AppHeader, AppMain, AppLoading}
})
</script>