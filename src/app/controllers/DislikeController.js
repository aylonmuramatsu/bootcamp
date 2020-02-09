const Dev = require('../models/Dev');

module.exports = {
    async store(req,res){
        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user);
        let targetDev = null;

        try{
            targetDev = await Dev.findById(devId);
        }
        catch(error){
            return res.status(400).json({ error: 'Dev not exists' });
        }

 
        if(!loggedDev.dislikes.includes(targetDev._id)){
            let likedUserIndex = loggedDev.likes.findIndex((i) => i._id == targetDev._id);
            loggedDev.likes.splice(likedUserIndex, 1);

            loggedDev.dislikes.push(targetDev._id);
        }
        
        await loggedDev.save();

        return res.json(loggedDev);
    }
}