export default function handler(req,res) {
try {
    res.status(200).send('hello')
} catch (error) {
    res.status(400).send(error)
}
}