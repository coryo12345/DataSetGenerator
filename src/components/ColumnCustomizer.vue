<script setup lang="ts">
import { computed, ref } from "vue";
import { useDataStore } from "../store";
import { Column } from "../types/Columns";
import AddColumnDialog from "./AddColumnDialog.vue";
import draggable from "vuedraggable";

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
  <!-- Current Columns -->
  <draggable v-model="cols">
    <template #item="{ element, index }">
      <Card class="mb-2">
        <template #content>
          <i class="pi pi-ellipsis-v grabbable"></i>
          <strong class="mr-2">{{ element.displayName }}</strong>
          <span class="sub-text mr-2">Type: {{ element.dataType.ftype }}</span>
          <i
            class="pi pi-trash iclick"
            @click="
              () => {
                removeColumn(index);
              }
            "
          ></i>
        </template>
      </Card>
    </template>
  </draggable>
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

.p-card {
  max-width: fit-content;
}

.card-height {
  min-height: 2em;
}

.grabbable {
  cursor: pointer;
  width: 2em;
}

.iclick {
  border-radius: 50%;
  padding: 0.5em;
}

.iclick:hover {
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
