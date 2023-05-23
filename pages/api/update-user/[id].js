const User = require('@/models/userModel')
export default async function handler(req, res) {
    let data = JSON.parse(req.body)
    try {
        await User.update({ email: req.query.id },

            {
                $SET: data
            }

        )
        res.status(200).send('hello')
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}