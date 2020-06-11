var app = require('./server')

// Settings PORT 
app.set('port', process.env.PORT || 7000)

// Server in listening

app.listen(app.get('port'), () => console.log(`Ejecutando demo en http://localhost:${app.get('port')} 🚀`))