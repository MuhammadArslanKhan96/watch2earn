const User = require('@/models/userModel')

let userData = {
    tokens: '',
    channels: '',
    videos: ''
}

const getUser = async (email) => {
    try {
        const docSnap = (await User.get(email));
        return docSnap;
    } catch (error) {
        console.log(error)
    }
};
export default async function handler(req, res) {

    const data = JSON.parse(req.body);

    const user = new User({ ...data, ...userData });
    try {
        const docSnap = await getUser(data.email);
        if (docSnap) {

            res.status(200).send(docSnap.toJSON())
        } else {
            await user.save();

            const docSnap = await getUser(data.email);
            res.status(200).send(docSnap.toJSON())

        }
    } catch (error) {
        res.status(400).send(error)
    }
}