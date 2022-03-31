<script setup lang="ts">
import { computed, ref } from "vue";
import { useDataStore } from "../store";

const dataStore = useDataStore();

const _amount = ref(dataStore.rowCount);
const amount = computed({
  get() {
    return _amount.value;
  },
  set(newVal: number) {
    _amount.value = newVal;
    dataStore.setRowCount(_amount.value);
  },
});

const _genMultiple = ref(true);
const genMultiple = computed({
  get() {
    return _genMultiple.value;
  },
  set(newVal: boolean) {
    _genMultiple.value = newVal;
    if (_genMultiple.value) amount.value = 2;
    else if (!_genMultiple.value) amount.value = 1;
  },
});
</script>

<template>
  <div class="flex align-items-stretch">
    <h3 class="mr-3">Generate Multiple Rows</h3>
    <InputSwitch v-model="genMultiple" class="inline-block my-auto" />
  </div>
  <span v-if="genMultiple" class="flex align-items-center">
    <Slider
      v-model="amount"
      :min="10"
      :max="1000"
      :step="10"
      class="inline-block fill mx-4"
    />
    <span class="flex flex-column">
      <span>
        Rows: <span class="bold">{{ amount }}</span>
      </span>
    </span>
  </span>
</template>

<style scoped>
.fill {
  min-width: 10rem;
}

.bold {
  font-weight: bold;
}
</style>
