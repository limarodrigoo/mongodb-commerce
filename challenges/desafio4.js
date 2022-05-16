db.produtos
  .find({ vendidos: { $gte: 50, $lte: 100 } },
    { nome: true, _id: false, vendidos: true })
  .sort({ vendidos: 1 });