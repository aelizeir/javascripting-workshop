'use strict'
const net = require('net')

function zeroFill (i) {
    return (i < 10 ? '0' : '') + i
}

function now () {
    const day = new Date()
    return day.getFullYear() + '-' +
    zeroFill(day.getMonth() + 1) + '-' +
    zeroFill(day.getDate()) + ' ' +
    zeroFill(day.getHours()) + ':' +
    zeroFill(day.getMinutes())
}

const server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))