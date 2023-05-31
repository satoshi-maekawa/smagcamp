/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('itemphotoTbl').del()
  await knex('itemphotoTbl').insert([
    { itemPhoto: 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/y8Ngwq34_Ak' },
    { itemPhoto: 'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/-YHSwy6uqvk' }
  ]);
};
