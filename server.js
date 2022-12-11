const app = require("./app")
require("dotenv").config()
const port = process.env.PORT || 3000 //señalamos un puerto
//buscar en .env el puerto si no hay pone en el 3000 clase 3

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})