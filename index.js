var express = require('express')
var app = express()
const port = 3000
app.get('/getexcell',()=>{

})
app.use('',express.static('./public/'))
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })