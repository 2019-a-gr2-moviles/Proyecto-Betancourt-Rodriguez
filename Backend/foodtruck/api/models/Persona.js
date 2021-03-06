/**
 * Persona.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre_prs: {
      type: 'string',
      minLength: 3,
      maxLength: 15,
      required: true,
    },
    apellido_prs: {
      type: 'string',
      minLength: 4,
      maxLength: 15,
      required: true,
    },
    cedula: {
      type: 'string',
      required: true,
      unique: true,
      minLength: 10,
      maxLength: 25,
    },
    fecha_nacimiento: {
      type: 'string',
      maxLength: 10,
      required: true
    },
   // foodtruckDePersona: {     // Nombre atributo de la relación
 //     collection: 'foodtruck', // Nombre del modelo a relacionar
  //    via: 'id_prs'       // Nombre del campo a hacer la relacion
  //  },
 //   clientePersona: {     // Nombre atributo de la relación
 //     collection: 'cliente', // Nombre del modelo a relacionar
///      via: 'id_prs'        // Nombre del campo a hacer la relacion
    //},
  },
};

