<script setup lang="ts">
import { computed, ref } from "vue";
import { useDataStore } from "../store";
// need to rename import since we use a component called 'Column'
import * as CT from "../types/Columns"; // ColumnTypes
import { FilterMatchMode } from "primevue/api";

const dataStore = useDataStore();

const dtRef = ref({});
function exportCSV() {
  (dtRef.value as any).exportCSV();
}

const data = ref([] as any[]);
const tableSearch = ref("");

function generateData(newCols: CT.Column[], count: number): void {
  const newData = [];
  for (let i = 0; i < count; i++) {
    const row = {} as any;
    newCols.forEach((col) => {
      row[col.internalId] = col.dataType.func();
    });
    newData.push(row);
  }
  data.value = newData;
}

const cols = computed(() => {
  generateData(dataStore.columns, dataStore.rowCount);
  return dataStore.columns;
});

const colFields = computed(() => {
  return dataStore.columns.map((x) => x.internalId);
});

const fullFilters = computed(() => {
  const f = {
    global: { value: tableSearch.value, matchMode: FilterMatchMode.CONTAINS },
  } as any;
  colFields.value.forEach((colId) => {
    f[colId] = { value: null, matchMode: FilterMatchMode.CONTAINS };
  });
  return f;
});
</script>

<template>
  <Card>
    <template #title> Data </template>
    <template #content>
      <DataTable
        ref="dtRef"
        :value="data"
        :paginator="true"
        :rows="10"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 20, 50]"
        :globalFilterFields="colFields"
        :filters="fullFilters"
        responsiveLayout="scroll"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        showGridlines
      >
        <template #header>
          <div class="flex justify-content-between">
            <Button
              icon="pi pi-external-link"
              label="Export"
              @click="exportCSV()"
              style="max-width: 10em"
            />
            <span class="p-input-icon-left" style="max-width: 20em">
              <i class="pi pi-search" />
              <InputText v-model="tableSearch" placeholder="Keyword Search" />
            </span>
          </div>
        </template>
        <Column
          v-for="col in cols"
          :field="col.internalId"
          :filterField="col.internalId"
          :key="col.internalId"
          :header="col.displayName"
        ></Column>
      </DataTable>
    </template>
  </Card>
</template>
