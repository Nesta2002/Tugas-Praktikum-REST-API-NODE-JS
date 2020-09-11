const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded ({ extended : true }))
app.use(cors())

app.post("/kubus", (req, res) => {
    let s = Number(req.body.s)

    let volume = s**3

    let luasPermukaan = 6 * (s**2)

    let response = {
        Sisi : s,
        Volume : volume,
        Luas_Permukaan : luasPermukaan
    }

    res.json(response)
})

app.post("/bola", (req, res) => {
    let r = Number(req.body.r)
    let phi = 3.14

    let volume = 4/3 * phi * r**3

    let luasPermukaan = 4 * phi * r**2

    let response = {
        Jari_Jari : r,
        Volume : volume,
        Luas_Permukaan : luasPermukaan
    }

    res.json(response)
})

app.post("/tabung", (req, res) => {
    let r = Number(req.body.r)
    let t = Number(req.body.t)
    let phi = 3.14

    let volume = phi * r**2 * t

    let luasPermukaan = 2 * (phi * r**2) + (2 * phi * r * t)

    let response = {
        Jari_Jari : r,
        Tinggi : t,
        Volume : volume,
        Luas_Permukaan : luasPermukaan
    }

    res.json(response)
})

app.post("/balok", (req, res) => {
    let p = Number(req.body.p)
    let l = Number(req.body.l)
    let t = Number(req.body.t)

    let volume = p * l * t

    let luasPermukaan = 2 * ( (p * l) + (l * t) + (p * t) )

    let response = {
        Panjang : p,
        Lebar : l,
        Tinggi : t,
        Volume : volume,
        Luas_Permukaan : luasPermukaan
    }

    res.json(response)
})

app.listen(7000, () => {
    console.log("Server run on port 7000")
})