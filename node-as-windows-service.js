const Service = require("node-windows").Service

const svc = new Service({
    name: "IsabellaAppDaemon",
    description :" Esta aplicación es para el manejo del inventario de la Pañalera Isabella",
    script:"C:\\Users\\DARWIN\\Documents\\isabella\\inventarioApp\\isabella-backend\\bin\\www",
    env: {
        name: "NODE_ENV",
        value: "production"
    },
})

svc.on('install', function(){
    console.log("instalado con exito!!!!")
    svc.start()
})

svc.on('alreadyinstalled ',function(){
    console.log("ya está iniciado!!!!");
    svc.restart()
})

svc.on('uninstall',function(){
    console.log('uninstall');
})

// svc.uninstall();
svc.install();
