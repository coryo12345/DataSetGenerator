<script setup lang="ts">
import { computed, ref } from "vue";
import { useDataStore } from "../store";
import { Column } from "../types/Columns";
import { definedTypes, DataType } from "../types/DataTypes";

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", val: boolean): void;
}>();

function visibleModel(val: boolean) {
  emit("update:modelValue", val);
}

// store
const dataStore = useDataStore();

// data
const name = ref("");
const columnType = ref("");
const filterText = ref("");
const filteredTypes = computed(() => {
  return filterText.value.length
    ? definedTypes.filter((x) =>
        x.ftype.toLowerCase().includes(filterText.value.toLowerCase())
      )
    : definedTypes;
});

const saveAllowed = computed((): boolean => {
  return name.value.length > 0 && columnType.value.length > 0;
});

function addCol() {
  const col = new Column(
    definedTypes.find((x) => x.ftype === columnType.value) as DataType,
    name.value
  );
  dataStore.addColumn(col);
  visibleModel(false);
  name.value = "";
  columnType.value = "";
}
</script>

<template>
  <Dialog
    :visible="modelValue"
    @update:visible="visibleModel"
    :modal="true"
    :draggable="false"
    id="add-column-dialog"
  >
    <!-- Header -->
    <template #header>
      <h3>Add A Column</h3>
    </template>
    <!-- Column name selection -->
    <div class="p-float-label mt-4 w-full">
      <InputText
        type="text"
        v-model="name"
        name="dname"
        class="w-full"
      ></InputText>
      <label for="dname">Display Name</label>
    </div>
    <div class="group-border mt-4">
      <!-- Filter types -->
      <div class="p-float-label w-full">
        <InputText
          type="text"
          v-model="filterText"
          name="filter"
          class="w-full"
        ></InputText>
        <label for="filter">Filter Types</label>
      </div>
      <!-- Column Type Selection -->
      <ScrollPanel class="mt-1 h-10rem">
        <div
          v-for="dtype in filteredTypes"
          :key="dtype.ftype"
          class="ml-2 my-3"
        >
          <RadioButton
            :name="dtype.ftype"
            :value="dtype.ftype"
            v-model="columnType"
            class="mr-2"
          />
          <label :for="dtype.ftype">{{ dtype.ftype }}</label>
        </div>
      </ScrollPanel>
    </div>
    <!-- Save -->
    <template #footer>
      <Button @click="addCol" label="Add" :disabled="!saveAllowed"></Button>
    </template>
  </Dialog>
</template>

<style lang="scss">
#add-column-dialog {
  min-width: 30em;

  .p-dialog-header {
    padding-bottom: 0;
  }

  .p-scrollpanel-bar {
    opacity: 1 !important;
  }

  .group-border {
    border: 1px solid #eee;
  }
}
</style>
