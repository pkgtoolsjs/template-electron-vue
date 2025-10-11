<script setup lang="ts">
const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <h1>Hello World!</h1>
</template>
