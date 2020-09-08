/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    add: function(req, res){
        Task.find({}).exec(function(err, item){
            if(err){
                res.send(505, {error: 'Database Error'});
            }
            res.view('task/add', {items:item})
        })
    },

    create: function(req, res){
        var nombre = req.body.nombre
        
        Task.create({nombre:nombre}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/task/add')
        })
    },

    delete: function(req, res){
        Task.destroy({id:req.params.id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/task/add')
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

        Task.update({id: req.params.id}, {check:check}).exec(function (err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/task/add')

        })
    }
};

