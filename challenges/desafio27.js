db.produtos.countDocuments(
  { nome: { $regex: /mc/i } },
  { _id: false, nome: true },
);