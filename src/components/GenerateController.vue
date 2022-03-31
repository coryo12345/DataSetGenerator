<script setup lang="ts">
import CountSelector from "./CountSelector.vue";
import ColumnCustomizer from "./ColumnCustomizer.vue";
</script>

<template>
  <Card>
    <template #title>Configure</template>
    <template #content>
      <CountSelector />
      <ColumnCustomizer />
    </template>
  </Card>
</template>

<style scoped>
.fill {
  min-width: 10rem;
}

.bold {
  font-weight: bold;
}
</style>
