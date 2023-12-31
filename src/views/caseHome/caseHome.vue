<template>
  <div id="case_home">
    <div class="list_box">
      <div class="item" v-for="(item, index) in list" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])
</script>

<style scoped lang="scss">
#case_home {
  width: 100%;
  height: 100vh;
  background-color: #000;
  @include flex();
  .list_box {
    width: 100%;
    height: 300px;
    background-color: #fff;
    display: flex;
    overflow-y: auto;
    .item {
      flex: 0 0 auto; // 阻止拉伸
      width: 250px;
      height: 250px;
      margin-right: 20px;
      border: 1px solid #000;
      border-radius: 10px;
      box-sizing: border-box;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
