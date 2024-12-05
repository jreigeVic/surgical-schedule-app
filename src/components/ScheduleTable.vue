<template class="overflow-x-auto">
  <table class="min-w-full table-auto border-collapse border bg-[#FAFAFA] border-gray-300">
    <thead>
      <tr class="bg-finx-gray">
        <th class="text-left p-2 sm:p-4 cursor-pointer" @click="sort('medico')">
          Médico
          <span v-if="sortKey === 'medico'">
            <svg v-if="sortOrder === 'asc'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" class="inline w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="inline w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </th>
        <th class="text-left p-2 sm:p-4 cursor-pointer" @click="sort('paciente')">
          Paciente
          <span v-if="sortKey === 'paciente'">
            <svg v-if="sortOrder === 'asc'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" class="inline w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="inline w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </th>
        <th class="text-left p-2 sm:p-4 cursor-pointer" @click="sort('dataCriacao')">
          Data de Criação
          <span v-if="sortKey === 'dataCriacao'">
            <svg v-if="sortOrder === 'asc'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" class="inline w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              class="inline w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </th>
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
      sortOrder: 'asc',
    };
  },
  computed: { // aqui tem cache <----- melhor quando precisa ser reutilizado ou depende de outra prop
    sortedSchedules() {
      if (!this.sortKey) return this.schedules;
      return [...this.schedules].sort((a, b) => {
        const aValue = this.getValue(a, this.sortKey);
        const bValue = this.getValue(b, this.sortKey);

        if (aValue < bValue) return this.sortOrder === 'asc' ? -1 : 1;
        if (aValue > bValue) return this.sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    }
  },
  methods: { // aqui nao tem cache <--- melhor para resposta de chamada de metodos
    sort(key) {
      if (this.sortKey === key) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortKey = key;
        this.sortOrder = 'asc';
      }
    },
    getValue(item, key) {
      if (key === 'medico') {
        return item.medico.nome;
      } else if (key === 'paciente') {
        return item.paciente.nome;
      } else if (key === 'dataCriacao') {
        return new Date(item.dataCriacao).getTime();
      }
      return item[key];
    }
  }
};
</script>
