<script setup lang="ts">
import { ref } from "vue";

const genMultiple = ref(true);
const amount = ref(5);
</script>

<!-- TODO: update store -->
<!-- TODO: add column list with selection -->

<template>
  <Card>
    <template #title>Configure</template>
    <template #content>
      <div>
        <h3>Generate Multiple Rows</h3>
        <div class="flex">
          <InputSwitch v-model="genMultiple" class="inline-block mr-4" />
          <span v-if="genMultiple" class="flex align-items-center">
            <Slider
              v-model="amount"
              :min="1"
              :max="100"
              :step="1"
              class="inline-block fill mr-4"
            />
            <span class="flex flex-column">
              <span>
                Rows: <span class="bold">{{ amount }}</span>
              </span>
            </span>
          </span>
        </div>
      </div>
      <div>
        <h3>Customize Columns</h3>
      </div>
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
