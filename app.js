const express = require( 'express' );
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const hbs = require( 'hbs' );

//handlebars
app.set( 'view engine' , 'hbs');

hbs.registerPartials( __dirname + '/views/partials')

app.use( express.static( 'public' ));

app.get( '/', ( req,res )=>{
    //controlador del render (callback)
    res.render( 'home',{
        nombre: 'Franco Ovalle',
        titulo: 'Curso de node'
    } );
});

app.get( '/generic', ( req,res )=>{
    res.render( 'generic',{
        nombre: 'Franco Ovalle',
        titulo: 'Curso de node'
    } );
});

app.get( '/elements', ( req,res )=>{
    res.render( 'elements',{
        nombre: 'Franco Ovalle',
        titulo: 'Curso de node'
    } );
});
//esto siempre debe estar al final
app.get( '*', ( req,res )=>{
    res.sendFile( __dirname + '/public/404.html');
});



app.listen( port, ()=>{
    console.log( `Este servidor esta escuchando a http://localhost:${ port }`);
});