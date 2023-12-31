<template>
  <div id="home">
    <div @click="routerTo({ name: 'login' })">登录</div>
    <div @click="routerTo({ name: 'caseHome' })">案例</div>
  </div>
</template>

<script setup lang="ts">
import useRouter from '@/hooks/useRouter/useRouter'
const { routerTo } = useRouter()
</script>

<style scoped lang="scss">
#home {
  width: 100%;
  height: 200px;
  background-color: burlywood;
  @include flex();
  justify-content: space-between;
  > div {
    width: 200px;
    height: 80px;
    border: 1px solid #000;
  }
}
</style>
