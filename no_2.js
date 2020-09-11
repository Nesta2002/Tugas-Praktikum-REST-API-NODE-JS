const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded ({ extended : true }))
app.use(cors())

app.get("/convert/celcius/:suhu", (req, res) => {
    let suhu = req.params.suhu

    let r = 4/5 * suhu
    let f = (9/5 * suhu) + 32
    let k = (suhu * 1) + 273

    let response = {
        celcius : suhu,
        result : {
            reamur : r,
            fahrenheit : f,
            kelvin : k
        }
    }

    res.json(response)
})

app.get("/convert/reamur/:suhu", (req, res) => {
    let suhu = req.params.suhu

    let c = 5/4 * suhu
    let f = (9/4 * suhu) + 32
    let k = (5/4 *suhu) + 273

    let response = {
        reamur : suhu,
        result : {
            celcius : c,
            fahrenheit : f,
            kelvin : k
        }
    }

    res.json(response)
})

app.get("/convert/kelvin/:suhu", (req, res) => {
    let suhu = req.params.suhu

    let c = suhu - 273
    let f = (9/5 * (suhu - 273)) + 32
    let r = 4/5 * (suhu - 273)

    let response = {
        kelvin : suhu,
        result : {
            celcius : c,
            fahrenheit : f,
            reamur : r
        }
    }

    res.json(response)
})

app.get("/convert/fahrenheit/:suhu", (req, res) => {
    let suhu = req.params.suhu

    let c = 5/9 * (suhu - 32)
    let r = 4/9 * (suhu - 32)
    let k = (5/9 * (suhu - 32)) + 273

    let response = {
        fahrenheit : suhu,
        result : {
            celcius : c,
            reamur : r,
            kelvin : k
        }
    }

    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000")
})