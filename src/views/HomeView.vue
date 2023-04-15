<template>
  <div>{{ nicknameRef }} {{ sloganRac.content }}</div>
  <h2>x: {{ Math.round(pointX) }} </h2>
  <h2>y: {{ y }}</h2>
  <!-- 自动导入 自定义组件 -->
  <wd-comp></wd-comp>
</template>
<script setup>

/**
 * 自动导入 vue 的api
 */
const nicknameRef = ref('WD--')
const sloganRac = reactive({ content: 'hello world' })
/**
 * 自动导入 vueUse 的api
 */
const { x } = useMouse()
const pointX = useTransition(x, { duration: 2000 })

/**
 * 自动导入自定义 hook
 */
const { y } = usePosition()
</script>
<style lang="scss" scoped></style>
