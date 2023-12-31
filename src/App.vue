<script setup lang="ts">
import {RouterView,RouterLink} from 'vue-router'
</script>

<template>
 <div id="app">
<router-link to="/home" style="margin-right: 20px;">首页</router-link>
<router-link to="/login" style="margin-right: 20px;">登录</router-link>
<router-link to="/caseHome" style="margin-right: 20px;">案例</router-link>
    <div style="border: 1px solid #000; width: 100%; height: 300px;">
<router-view></router-view>
    </div>
     
 </div>
</template>

<style scoped>

</style>
