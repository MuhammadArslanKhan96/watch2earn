import S3 from 'aws-sdk/clients/s3'

const s3 = new S3({
    region: 'us-east-1',
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    signatureVersion: 'v4'
});


export const config = {
    api: {
        bodyParser: {
            sizeLimit: '8mb'
        }
    }
}


export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(400).send(`Method not Allowed`)
    }

    try {
        let { name, type } = JSON.parse(req.body);
        console.log(name)
        const fileParams = {
            Bucket: process.env.BUCKET_NAME,
            Key: name,
            Expires: 600,
            ContentType: type,
            ACL: 'public-read'
        }

        const url = await s3.getSignedUrlPromise('putObject', fileParams);
        res.status(200).send(url)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}