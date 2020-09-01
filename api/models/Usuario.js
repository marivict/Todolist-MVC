/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore:'default',
  identity: 'Usuario',
  tableName: 'usuarios',

  attributes: {
    nombre: {type:'string', required:true},
    email: {type:'string',},
    check:{type:'number',},
      
  },

};

