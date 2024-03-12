const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://jlopez:5lYFuCc6IcwG1fwW@cluster0.ffb1vdi.mongodb.net/`
  )
  .then(() => {
    console.log("Conectado");
  })
  .catch(error => console.log(error));

module.exports = mongoose;
