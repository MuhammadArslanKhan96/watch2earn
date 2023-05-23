const screenshot = require('screenshot-desktop')
export default function handler(req, res) {
    try {
        screenshot().then((img) => {
            // img: Buffer filled with jpg goodness
            res.status(200).send(img)
            // ...
        }).catch((err) => {
            res.status(400).send(err)
            // ...
        })

    } catch (error) {
        res.status(400).send(error)
    }
}