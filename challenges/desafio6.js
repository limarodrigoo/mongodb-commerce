db.produtos
  .find({ curtidas: { $gte: 10, $lte: 100 } },
    { nome: true, _id: false, curtidas: true }).sort({ vendidos: 1 })
  .sort({ curtidas: 1 });