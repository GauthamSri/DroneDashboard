(function(sockets){

    var socketio = require("socket.io");
    var drone = require("../controllers/drone");
    var constants = require("ar-drone/lib/constants");

    var options = ( 1 << constants.options.DEMO | 
    1 << constants.options.VISION_DETECT | 
    1 << constants.options.MAGNETO | 
    1 << constants.options.WIFI | 
    1 << constants.options.ALTITUDE | 
    1 << constants.options.ZIMMO_3000 );



    var client = drone.client;

sockets.init = function(server){
   var io = socketio.listen(server);

   io.sockets.on("connection",function(socket){
      console.log("socket was connected");
      client.config("general:navdata_options", options); 
      client.config("video:video_channel", 0); 
      client.config("detect:detect_type", 12);

   client.on("navdata", function(data) { 
       //console.log("Flying:  " + data.droneState.flying); 
       //console.log("Battery %:  " + data.demo.batteryPercentage); 
       socket.emit("data",{ data: data.demo.batteryPercentage });
    });

   });

   

};


})(module.exports);