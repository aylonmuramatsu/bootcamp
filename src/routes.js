const express = require('express');
const DevController = require('./app/controllers/DevController');
const LikeController = require('./app/controllers/LikeController');
const DislikeController = require('./app/controllers/DislikeController');
const MatchController = require('./app/controllers/MatchController');
const routes = express.Router();

routes.get('/devs/:userId', DevController.show);
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);
routes.post('/devs/matchs', MatchController.index);

module.exports = routes;