/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    add: function(req, res){
        Usuario.find({}).exec(function(err, users){
            if(err){
                res.send(505, {error: 'Database Error'});
            }
            res.view('add', {usuarios:users})
        })
    },

    create: function(req, res){
        var nombre = req.body.nombre
        
        Usuario.create({nombre:nombre}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/usuario/add')
        })
    },

    delete: function(req, res){
        Usuario.destroy({id:req.params.id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/usuario/add')
        })
        return false
    },

    update: function(req, res){
        var check = 0
        if (check===0){
            check = 1
        }
        else{
            check = 0
        }

        Usuario.update({id: req.params.id}, {check:check}).exec(function (err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/usuario/add')

        })
    }
};

