//https.get() method - HTTP Requests
const https = require('https');
const request = https.get('https://www.azlyrics.com/lyrics/beck/bluemoon.html',(response)=>{
    let body = "";
    //response.on(,function(){}) is an asynchronous function
    response.on('data', (chunk) =>{ 
        body += chunk;
    });
    response.on('end', ()=>{
        if(response.statusCode === 200){
            try {
                console.log(body);
            }catch(e){
                console.log('Error!');
            }
        }
    })
})
//node http-request.js
//curl https://www.google.ca/
