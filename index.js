const express = require('express')


const app = express()

const db = require('./models')

app.use(express.json())

const { User } = require('./models')


app.get('/select', (req, res) => {
    User.findAll({
        where: {
            name: "Pedro"
        }
    }).then((user) => {
        res.send(user);

    }).catch((err) => {
        console.log(err);

    })
})
app.post('/insert', (req, res) => {
    User.create({
        name: "Pedro",
        email: "aa@aa.com",
        phoneNumber: "432432"
    }).catch(err => {
        if (err) {
            console.log(err);
        }
    })
    res.send("insert")
})
app.get('/delete', (req, res) => {
    User.destroy({
        where: {
            id: 1
          }
    })
    res.send("deleted")
})
app.get('/update', (req, res) => {
    res.send('select')
   
})
app.get('/select', (req, res) => {
    res.send('select')
})

// (async()=>{
//     await db.sequelize.sync();
// })();

db.sequelize.sync().then((req) => {
    app.listen(5001, () => {
        console.log("Server is running 5001")
    })
})
