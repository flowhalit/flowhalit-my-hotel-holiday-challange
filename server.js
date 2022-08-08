const express =require('express');

const app = express();

app.use(express.static(__dirname +'/public',  {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '0',
    redirect: false,
    setHeaders:(res, path, stat) => res.set('x-timestamp', Date.now().toFixed(0)) 
  }))
  app.get('/',function(req,res) {
    res.sendFile(__dirname +'/public/index.html');
  });
  app.listen(8080,function(){
    console.log('Sunucu çalışıyor...');
  });