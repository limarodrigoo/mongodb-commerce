db.produtos.updateMany({nome: {$ne: 'McChicken'}, ingredientes: {$ne: 'ketchup'}}, {$push: {
  ingredientes: 'ketchup'
}});
db.produtos.find({}, {nome: true, ingredientes: true, _id: false})