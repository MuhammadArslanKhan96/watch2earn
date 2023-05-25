import Video from "../../models/videosModel";

function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}


export default async function handler(req, res) {
    try {
        const videos = JSON.parse(req.body).videos;
        const video = new Video({
            videos,
            id:create_UUID()
        });

        try {
            await video.save();
            res.status(200).send('hello')
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    } catch (error) {
        res.status(400).send(error)
    }
}