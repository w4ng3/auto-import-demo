<script setup>
const titleRef = ref('看那昏黄的路灯')
const objRac = reactive({ list: ['我们像是在池塘的水底', '从一个月亮走向另一个月亮'] })
</script>
<template>
  <div style="border: 1px solid yellowgreen;">
    <span style="color: pink;">{{ titleRef }}</span>
    <p>{{ objRac.list }}</p>
  </div>
</template>

<style lang="scss" scoped></style>