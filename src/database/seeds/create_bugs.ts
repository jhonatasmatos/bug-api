import Knex from 'knex'

export async function seed(knex: Knex){
  await knex('bugs').insert([
    { 
      title: 'Layout - Fundo do front não está igual', 
      description: 'ao acessar a home a cor do background está diferente do protótipo',
      reporter: 'Jhonatas Matos', 
      status: 'aberto',
    }
  ]);
}