import redis from "redis";
import Profile from "../models/profile.model.js";

// create a new redis client
const redisClient = redis.createClient({
    password: 'HUrJWkJrKJEVGjZNn9fBHQC39OeMMqCG',
    socket: {
        host: 'redis-18869.crce179.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 18869
    }
});

export const cacheProfile = async (uid, field, operation) => {
    try {
        await redisClient.connect();
        console.log("Connected to Redis");

        let userInfo;
        let profile;

        // check the redis store for the data first
        userInfo = await redisClient.get(uid);
        
        if(userInfo && operation === "get") {
            console.log("Cache hit");
            const parsedUserInfo = JSON.parse(userInfo);
            profile = parsedUserInfo.profile;
        }
        else {
            console.log("Cache miss");            
            profile = await Profile.findOne({uid});
            userInfo = {};
            userInfo.profile = profile;
            
            if(userInfo.profile) {
                await redisClient.setEx(uid, 10, JSON.stringify(userInfo));
            }            
        }

        redisClient.quit();

        if(operation === "update") return;

        if(field === "all") {
            return profile;
        } else {
            const fields = field.split(" ");
            let customProfile = {};
            fields.map((property) => {
                customProfile[property] = profile[property];
            });

            return customProfile;
        }
    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }
}