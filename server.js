const express = require('express')
const app = express()

const server = require('http').createServer(app)
const {Server} = require('socket.io')

const io = new Server(server)

// routes

app.get('/', (req,res) => {
    res.send('Working')
})

io.on('connection', (socket) => {
    console.log('User Connected');
})

const port = process.env.PORT || 5000
server.listen(port, () => {
    console.log('Server is running on port', port);
})