var http = require('http');

var sass = require('node-sass');
var fs = require('fs');


http.createServer(function(request,response){
    
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    response.end('Inside Joffer test run\n');
    
}).listen(8909);

/*
 *calling Sass compiler
 */
sass.render({
    
    file: '../resources/css/SimpleWebSiteGenerator_sass_.scss',
    outFile: '../resources/css/SimpleWebSiteGenerator.css'
    
}, function(err, result) {
    
    if( err ) {
        
        console.log("Display error msg =>");
        console.log(err);
        
    } else {
        
        fs.writeFile( '../resources/css/SimpleWebSiteGenerator.css', result.css, function(err) {
            
            if(err) {
                console.log("show error while writing css file");
                console.log(err);
            } else {
                
            }
            
        } );
        
    }
    
});
