const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()


const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT ||3000

app.set('view engine', 'hbs')


app.use(express.static(publicPath))

app.get('', (req,res) => {
  res.render('index')
})

app.listen(port, () =>{
  console.log('Server running on port '+ port)
})
