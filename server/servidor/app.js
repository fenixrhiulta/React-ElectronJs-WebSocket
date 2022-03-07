import admapp from '../models/admapp';

export default function(socket) {

  
  socket.on('app/data/', async function(data, callback){
    console.log(callback);
    var xd = new Date();
    xd.setTime( xd.getTime() - new Date().getTimezoneOffset()*60*1000 );
    callback({data: xd})
    return;
  });
  

  socket.on('app/checkversion/', async function(data, callback){
    try{
      console.log(callback);
      const res = await admapp.findOne({
        where: {
            version: data.version,
            name: data.appname
        }
      })
      if(res == null){
        callback({data: true})
        return;
      }
      callback({data: false})
    }catch(e){
      console.log(e);
      callback({error: "fatal error server"})
    }
  });

};

