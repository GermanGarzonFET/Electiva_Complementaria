const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//inicio
const app = express();

//configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars.js')

}));
app.set('view engine', '.hbs');

//peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//variables globales
app.use((req, res, next) => {
    next();

});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));
app.use('/parcial', require('./routes/parcial'));


app.use('/notas', require('./routes/notas'));

app.use('/estudiantes', require('./routes/estudiantes'));

app.use('/docentes', require('./routes/docentes'));

app.use('/materias', require('./routes/materias'));

app.use('/peracademico', require('./routes/peracademico'));

app.use('/asigmateria', require('./routes/asigmateria'));









//public
app.use(express.static(path.join(__dirname, 'public')));

//iniciar el server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});