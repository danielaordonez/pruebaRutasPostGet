var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/pruebaDaniela', function(req,res,next){
  var datosGenerales = [
                {"nombre":"daniela"},
                {"apellido":"ordonez"},
                {"direccion":"col Hato de Enmedio"},
                {"telefono":"3369-0359"},
                {"tipo de sangre":"O+"},
                {"identidad":"0101-1995-01854"}
              ];
  res.json(datosGenerales);
});

router.get('/informacion', function(req,res,next){
  res.render('Mensaje',{"txtmensaje":""});
});

var mensaje=[];

router.post('/informacion', function(req,res,next){
  console.log(req.body);
  mensaje.push(req.body.txtmensaje.concat(" prueba"));
  var msgs =mensaje;
  var rtObject={};
  rtObject.txtmensaje=req.body.txtmensaje;
  rtObject.msg=msgs;
  res.render('Mensaje', rtObject);
});

module.exports = router;
