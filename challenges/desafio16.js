const todayDate = new Date();
db.produtos
  .updateOne({ nome: "Big Mac" },
    {
      $set: {
        ultimaModificacao: todayDate,
      },
    });
db.produtos.find({
  ultimaModificacao:
    { $exists: true },
},
  { nome: true, _id: false });