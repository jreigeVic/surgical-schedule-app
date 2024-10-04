<template class="overflow-x-auto">
  <table class="min-w-full table-auto border-collapse border bg-[#FAFAFA] border-gray-300">
    <thead>
      <tr class="bg-finx-gray">
        <th class="text-left p-2 sm:p-4 " @click="sort('medico')">Médico</th>
        <th class="text-left p-2 sm:p-4 " @click="sort('paciente')">Paciente</th>
        <th class="text-left p-2 sm:p-4 " @click="sort('dataCriacao')">Data de Criação</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="schedule in sortedSchedules" :key="schedule.id">
        <td class="p-2 sm:p-4 border border-gray-300">{{ schedule.medico.nome }}</td>
        <td class="p-2 sm:p-4 border border-gray-300">{{ schedule.paciente.nome }} - {{ new
          Date(schedule.paciente.dataNascimento).toLocaleDateString() }}</td>
        <td class="p-2 sm:p-4 border border-gray-300">{{ new Date(schedule.dataCriacao).toLocaleDateString() }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    schedules: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      sortKey: null,
    };
  },
  computed: {
    sortedSchedules() {
      if (!this.sortKey) return this.schedules;
      return [...this.schedules].sort((a, b) => {
        const aValue = a[this.sortKey];
        const bValue = b[this.sortKey];

        if (aValue < bValue) return -1; // a menor vem primeiro  
        if (aValue > bValue) return 1; // a maior b vem primeiro
        return 0;
      });
    }
  },
  methods: {
    sort(key) {
      this.sortKey = key;
    }
  }
};
</script>
