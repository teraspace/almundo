/**
 * Hotel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
      id: {
        type: 'integer',
        required: true
      },
      name: {
        type: 'string',
        required: true
      },
      stars: {
        type: 'integer',
        required: true
      },
      "price": {
        type: 'integer',
        required: true
      },
      "image": {
        type: 'string',
        required: true
      }
      // "amenities": [
      //   "safety-box",
      //   "nightclub",
      //   "deep-soaking-bathtub",
      //   "beach",
      //   "business-center"
      // ]
    }
  
};

