const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const app = express();
const port = 3000;

const operations = [];

fs.createReadStream("data.csv")
  .pipe(csv())
  .on("data", (row) => {
    // Process each row and add it to the operations array
    const operation = {
      id: parseInt(row.id),
      paymentType: row.type,
      paymentDescription: row.title,
      boxNumber: row.description,
      amount: parseFloat(row.amount.replace(",", ".")), // Convert comma to period and parse as number
    };
    operations.push(operation);
  });

// Endpoint "Operations"
app.get("/operations", (req, res) => {
    res.json({ operations });
});

// Endpoint "Operation Details"
app.get('/operation/:id', (req, res) => {
  const requestedId = parseInt(req.params.id);

  // Buscar la operación con el ID solicitado
  const operation = operations.find(op => op.id === requestedId);

  if (operation) {
    res.json({ operation });
  } else {
    res.status(404).json({ error: 'Operation not found' });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
