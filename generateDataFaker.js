// TODO: For some reason this file isn't working, If I have time I'll back to solve this problems

const fs = require('fs');
const { faker } = require('@faker-js/faker');


const generateSchedules = (num) => {
  const schedules = [];

  for (let i = 0; i < num; i++) {
    const schedule = {
      id: i + 1,
      medico: {
        nome: faker.name.findName(),
      },
      paciente: {
        nome: faker.name.findName(),
        dataNascimento: faker.date.past(30).toISOString().split('T')[0],
      },
      dataCriacao: faker.date.recent().toISOString(),
    };
    schedules.push(schedule);
  }

  return schedules;
};

const data = {
  data: generateSchedules(50), 
  paginacao: {
    paginaAtual: 1,
    itensPorPagina: 10,
    totalDePaginas: 5,
    totalDeItens: 50,
  },
};
 
fs.writeFileSync('./db.json', JSON.stringify(data, null, 2));
console.log('Dados gerados com sucesso!');
