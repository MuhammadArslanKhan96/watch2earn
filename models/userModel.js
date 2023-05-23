const dynamoose = require("dynamoose");
const schema = new dynamoose.Schema(
    {
        email: {
            type: String,
            required: true,
            hashKey: true,
            unique: true,
        },
        name: { type: String },
        image: { type: String },
        tokens: { type: String },
        channels: { type: String },
        playlists: { type: String },
        videos: { type: String },
    },
    {

        saveUnknown: ["*.**"],
        timestamps: true,
        throughput: "ON_DEMAND",
    }
);

const User = dynamoose.model(
    `${process.env.TABLE_PREFIX}_USERS`,
    schema,
    {
        create: true,
    }
);
console.log(User.table().hashKey)
module.exports = User;