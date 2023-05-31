/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('categoryTbl').del()
  await knex('categoryTbl').insert([
    { categoryName: 'ギア' },
    { categoryName: '食材' },
    { categoryName: '調理器具' },
    { categoryName: '日用品' }
  ]);
};
