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
      cajaNumber: row.description,
      amount: parseFloat(row.amount.replace(",", ".")), // Convert comma to period and parse as number
    };
    operations.push(operation);
  });

// Endpoint "Listing"
app.get("/listing", (req, res) => {
    res.json({ operations });
});

// Start Server
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
