const dynamoose = require("dynamoose");
const schema = new dynamoose.Schema(
    {
        videos: {
            type: String,
            required: true,
        },
        id:{
            type:String,
            required:true,
            hashKey: true,
        }
    },
    {

        saveUnknown: ["*.**"],
        timestamps: true,
        throughput: "ON_DEMAND",
    }
);

const Video = dynamoose.model(
    `${process.env.TABLE_PREFIX}_VIDEOS`,
    schema,
    {
        create: true,
    }
);
console.log(Video.table().hashKey)
module.exports = Video;