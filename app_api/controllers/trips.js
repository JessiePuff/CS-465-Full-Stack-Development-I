const mongoose = require('mongoose');
const Trip = require('../models/travlr');  //Register model
const Model = mongoose.model('trips');

//GET: /trips - list all trips
//Regardles of outcome, response must include HTML staus code
//and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
    .find({}) //No filter, return all records
    .exec();

    // Uncomment the following line to show results of query
    //on the console
    //console.log(q);

    if(!q)
    { //Database returned no data
        return res
                .status(404)
                .json(err);
    } else { //Return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

// GET: /trips :/tripcode - lists a single trip
// Regardles of outcome, response must include HTML status code
//and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) //Return Single Record
        .exec();

        //Uncomment the following line to show results of query
        //on the console
        //console.log(q);

        if(!q)
        {//Database returned no data
            return res
                    .status(404)
                    .json(err);
        } else { //Return resulting trip list
            return res
                .status(200)
                .json(q);               
        }
};
module.exports = {
    tripsList,
    tripsFindByCode
};