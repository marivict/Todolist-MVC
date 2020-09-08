/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore:'default',
  identity: 'Task',
  tableName: 'tasks',

  attributes: {
    nombre: {type:'string', required:true}
  },

};

