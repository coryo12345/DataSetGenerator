<script setup lang="ts">
import { ref } from "vue";
const dtRef = ref({});
function exportCSV() {
  (dtRef.value as any).exportCSV();
}
</script>

<template>
  <Card>
    <template #title> Data </template>
    <template #content>
      <DataTable
        ref="dtRef"
        :value="[{ name: 'asd' }]"
        :paginator="true"
        :rows="10"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 20, 50]"
        responsiveLayout="scroll"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        showGridlines
      >
        <template #header>
          <div class="inline-block">
            <Button
              icon="pi pi-external-link"
              label="Export"
              @click="exportCSV()"
            />
            <!-- todo: search -->
          </div>
        </template>
        <Column field="name" header="Name" :sortable="true"></Column>
      </DataTable>
    </template>
  </Card>
</template>
