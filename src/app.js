const express = require('express')
const path = require('path')
const hbs = require('hbs')
const forecast = require('./utils/Forecast')
const geocode = require('./utils/geocode')


const app = express()
const PORT = process.env.PORT || 3030



// define paths for express config
const publicDirPath = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../templates/views')
const partialsPath =  path.join(__dirname,'../templates/partials')

//Set up handlebars engine nd views location
app.set('view engine','hbs') 
app.set('views',viewspath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirPath))

app.get('',(req,res)=>{
    res.render('index',  {
        title: 'weather App',
        name: 'Elie Alarou'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        link: '/img/pic.webp',
        title: 'About Me: ',
        name: 'Elie Alarou'
    })
})


app.get('/help',(req,res)=>{
    res.render('help',{
        message : 'enter your message help here!',
        title: 'Help Page!',
        name:'Elie Alarou'
    })
})

app.get('/products',(req,res)=>{
   
 if(!req.query.search)
  {
     return res.send({
        error: ' you must provide an search term'
     })
  }

    console.log(req.query.search)
    res.send({
        products:[],
    })

    
})

app.get('/Weather',(req,res)=>{

    if(!req.query.adress)
    {
        return res.send({

            error:'Please provide an adress'
            
        })
    }


    geocode.getGeocode(req.query.adress,(error,{latitude,longitude,location} = {} )=>{

        if(error)
        {
           return res.send({error})
        }

    forecast(latitude,longitude, (error, data) => {

        if(error)
      {
        return res.send({error})
      }
        
        res.send(
        {
                location:  location,
                forecast: "actual temperature is " + data[0] + " and it feels like  " + data[1],
                pressure: data[2],
                windspeed: data[3],
        })
    
      
    })  })
    
})

app.get('/help/*',(req,res)=>{

    res.render('helperror',{
        title:"Help",
        errormsg:"Help article not found",
        name:'Elie alarou'
    })
})

app.get('*',(req,res)=>{

    res.render('404',{
        errormsg: "Page not found!",
        title: "404",
        name:'Elie alarou'
    })
})

app.listen(PORT, () =>{
    console.log('server is up on port 3000')
})  




