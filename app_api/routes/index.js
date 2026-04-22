const express = require("express"); //Express App
const router = express.Router();    //Router Logic

//This is where we import controllers we will route
const tripsController = require("../controllers/trips");

//Define trips routes for endpoint
router
    .route("/trips")
    .get(tripsController.tripsList) //GET method routes tripsList
    .post(tripsController.tripsAddTrip); //POST method routes tripsAddTrip

//GET method routes tripsFindByCode - requires parameter
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;
