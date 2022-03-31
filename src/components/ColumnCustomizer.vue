<script setup lang="ts">
import { computed, ref } from "vue";
import { useDataStore } from "../store";
import { Column } from "../types/Columns";
import AddColumnDialog from "./AddColumnDialog.vue";

const dataStore = useDataStore();

const cols = computed({
  get() {
    return dataStore.columns;
  },
  set(newVal: Column[]) {
    dataStore.setColumns(newVal);
  },
});

function removeColumn(idx: number): void {
  const c = cols.value;
  c.splice(idx, 1);
  cols.value = c;
}

// Dialog controls
const showDialog = ref(false);
function addColumn() {
  showDialog.value = true;
}
</script>

<template>
  <h3>Customize Columns</h3>
  <!-- Current Columns TODO: make this draggable for order -->
  <ul class="pl-0">
    <li v-for="(col, idx) in cols" :key="idx" class="mb-2">
      <Card>
        <template #content>
          <strong class="mr-2">{{ col.displayName }}</strong>
          <span class="sub-text mr-2">Type: {{ col.dataType.ftype }}</span>
          <i
            class="pi pi-trash"
            @click="
              () => {
                removeColumn(idx);
              }
            "
          ></i>
        </template>
      </Card>
    </li>
  </ul>
  <!-- Add A Column -->
  <Button
    class="fit p-button-raised p-button-rounded"
    label="Add +"
    @click="addColumn"
  ></Button>
  <AddColumnDialog v-model="showDialog" />
</template>

<style scoped>
.fit {
  max-width: fit-content;
}

li {
  list-style: none;
  max-width: fit-content;
}

.card-height {
  min-height: 2em;
}

i {
  border-radius: 50%;
  padding: 0.5em;
}

i:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.25);
}
.sub-text {
  font-size: 0.9em;
}

.p-card :deep(.p-card-content) {
  padding: 0;
}
</style>
