<template>
  <div>
    <Filters @updateFilters="updateFilters" :schedules="schedules" />
    <ScheduleTable :schedules="schedules" />
    <Pagination :totalPages="totalPages" @changePage="fetchData" />
  </div>
</template>


<script>
import { getSchedules } from '@/services/Api';
import FiltersComponent from '@/components/ScheduleFilters.vue';
import ScheduleTable from '@/components/ScheduleTable.vue';
import Pagination from '@/components/ComponentPagination.vue';

export default {
  components: {
    Filters: FiltersComponent,
    ScheduleTable,
    Pagination
  },
  data() {
    return {
      schedules: [],
      totalPages: 1,
      filters: {}
    };
  },
  methods: {
    async fetchData() {
      if (this.schedules.length === 0) {

        try {
          const data = await getSchedules();

          this.schedules = data;
          this.totalPages = Math.ceil(data.length / 10);
        } catch (error) {
          console.error('Erro ao buscar agendamentos:', error);
        }
      } return;
    },
    updateFilters(schedules, newFilters) {
      this.filters = newFilters;
      this.schedules = schedules

      this.fetchData();
    }
  },
  mounted() {
    this.fetchData();
  },
};
</script>
