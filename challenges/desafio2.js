db.produtos.find({},
  { nome: true, _id: false, vendidos: true }).sort({ vendidos: 1 });