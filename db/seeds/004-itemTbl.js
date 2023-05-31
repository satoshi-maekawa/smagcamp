/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('itemTbl').insert([
    { id: 1, itemName: 'テント', isBring: false, accunt_id: 1, categoryName_id: 1, itemPhoto_id: 1, isComp: false },
    { id: 2, itemName: '肉', isBring: false, accunt_id: 1, categoryName_id: 2, itemPhoto_id: 2, isComp: false },

  ]);
};
