const server = require('./api/server.js')

const port = process.env.PORT

server.get('/', (req, res) => {
    res.send(__dirname + '/client/build/index.html')
  });

server.listen(port, () => {
    console.log('Listening to ' + (port))
})