/**
 * HotelController
 *
 * @description :: Server-side logic for managing hotels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var fs = require('fs');
module.exports = {
	getHotels: (req, res) => {
        console.log('getHotels')
        var fs = require('fs');
        var obj = JSON.parse(fs.readFileSync('assets/data/data.json', 'utf8'));
        res.send(obj)
    }
};

