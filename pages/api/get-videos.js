import Video from "../../models/videosModel";
export default async function handler(req, res) {
    try {
        const videos = await Video.scan().exec();
        res.status(200).send(videos)
    } catch (error) {
        res.status(400).send(error)
    }
}