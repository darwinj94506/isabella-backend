const Service = require("node-windows").Service

const svc = new Service({
    name: "IsabellaAppDaemon",
    description :" Esta aplicación es para el manejo del inventario de la Pañalera Isabella",
    script:"C:\\Users\\DARWIN\\Documents\\isabella\\inventarioApp\\isabella-backend\\bin\\www"
})

svc.on('install', function(){
    svc.start()
})

svc.install()
