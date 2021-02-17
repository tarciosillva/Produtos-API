
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('produto').del()
    .then(function () {
      // Inserts seed entries
      //category, product_Name, value, imageURL
      return knex('produto').insert([
        {id: 1, category: 'Smartphone', product_Name: 'Xiami Mi A3', value: '300', imageURL: 'https://i.zst.com.br/thumbs/12/6/34/867873514.jpg'},
      ]);
    });
};
