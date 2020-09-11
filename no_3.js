const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded ({ extended : true }))
app.use(cors())

app.post("/decimal", (req, res) => {
    let dec = Number(req.body.dec)

    let bin = parseInt(dec, 10).toString(2)
    let okt = parseInt(dec, 10).toString(8)
    let hex = parseInt(dec, 10).toString(16)

    let response = {
        Decimal : dec,
        Result : {
            Biner : bin,
            Oktal : okt,
            Hexadecimal : hex
        }
    }

    res.json(response)
})

app.post("/biner", (req, res) => {
    let bin = Number(req.body.bin)

    let dec = parseInt(bin, 2).toString(10);
    let okt = parseInt(bin, 2).toString(8);
    let hex = parseInt(bin, 2).toString(16);

    let response = {
        Biner : bin,
        Result : {
            Decimal : dec,
            Oktal : okt,
            Hexadecimal : hex
        }
    }

    res.json(response)
})

app.post("/oktal", (req, res) => {
    let okt = Number(req.body.okt)

    let dec = parseInt(okt, 8).toString(10);
    let bin = parseInt(okt, 8).toString(2);
    let hex = parseInt(okt, 8).toString(16);

    let response = {
        Oktal : okt,
        Result : {
            Decimal : dec,
            Biner : bin,
            Hexadecimal : hex
        }
    }

    res.json(response)
})

app.post("/hexadecimal", (req, res) => {
    let hex = Number(req.body.hex)

    let dec = parseInt(hex, 16).toString(10);
    let bin = parseInt(hex, 16).toString(2);
    let okt = parseInt(hex, 16).toString(8);

    let response = {
        Hexadecimal : hex,
        Result : {
            Decimal : dec,
            Biner : bin,
            Oktal : okt
        }
    }

    res.json(response)
})

app.listen(6000, () => {
    console.log("Server run on port 6000")
})