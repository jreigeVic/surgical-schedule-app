<template>
  <div class="filters flex flex-row gap-1 my-1">
    <input v-model="filters.medico" placeholder="Filtrar por Médico" />
    <input v-model="filters.paciente" placeholder="Filtrar por Paciente" />
    <input v-model="filters.dataCriacao" type="date" placeholder="Filtrar por Data" />
    <button class="bg-[#1496E6] text-finx-gray rounded-full p-1 px-2 active:bg-finx-light-blue" @click="applyFilters">Aplicar Filtros</button>
  </div>
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
      filters: {
        medico: '',
        paciente: '',
        dataCriacao: ''
      }
    };
  },
  methods: {
    applyFilters() {
      let filteredSchedules = this.schedules

      if (this.filters.medico) {
        filteredSchedules = filteredSchedules.filter(schedule => schedule.medico.nome.includes(this.filters.medico));
      }
      if (this.filters.paciente) {
        filteredSchedules = filteredSchedules.filter(schedule => schedule.paciente.nome.includes(this.filters.paciente));
      }
      if (this.filters.dataCriacao) {
        console.warn(this.dataCriacao)
        filteredSchedules = filteredSchedules.filter(schedule => schedule.dataCriacao.includes(this.filters.dataCriacao));
      }

      this.$emit('updateFilters', filteredSchedules, this.filters);
    },
  }
};
</script>