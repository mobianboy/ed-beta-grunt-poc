
// Builds index.html
console.log('cwd: '+process.cwd());

// Build Dev or Prod? (default: dev)
var dev = true;
process.argv.forEach(function(val, index, array){
  if( val === 'prod' || val === 'production' ){
    dev = false;
  }
});

console.log("Building "+(dev ? 'development' : 'production')+" version of index.html");

// Load Node Packages
var fs = require('fs'),
    //fileOut,
    bStats;// = fs.statSync('build');

// This is a fully sync version
try{

  // Check to see if need to make build directory 
  bStats = fs.statSync('build');
  if( typeof bStats === 'undefined' || !bStats.isDirectory() ){
    throw {};
  }

} catch(e) {

  // Make build dir
  fs.mkdirSync('build');

} finally {

  // Write File from src/views/index.html
  fs.writeFileSync('build/index.html', fs.readFileSync('src/views/index.html'), {encoding:'utf8'});

}


// Original async version didn't work in grunt :(

/*
if( typeof bStats === 'undefined' || !bStats.isDirectory() ){

}

fileOut = fs.createWriteStream('build/index.html');


fs.stat('build', function(err, stats){
  if( err || typeof stats === 'undefined' || !stats.isDirectory() ){
    //console.log('error in fs.stat');
    //console.log(err);
    //console.log(stats);
    console.log('Error getting stats for build folder, will try to mkdir');
    fs.mkdirSync('build');
  }

  // Create File Stream
  fileOut = fs.createWriteStream('build/index.html');

  // Read src/views/index.html and output to new file
  fs.readFile('src/views/index.html', function(err, data){
    if( err ){
      console.log('error in readFile:34');
      console.log(err);
    } else {
      fileOut.write(data, 'utf8', function(err, data){
        if( err ){
          console.log('error in fileOut.write:39');
          console.log(err);
        }
        console.log('file written');
      });
    }
  });

});


// Make build dirrectory
fs.mkdir('build', function(err){
  if( err ){
    console.log('error in fs.mkdir:21');
    console.log(err);
  }

});


fs.readFile('src/views/index.html', function(err, data){
  if(err){
    console.log('error:');
    console.log(err);
  } else {
    fileOut.write(data, 'utf8', function(err, data){
      console.log('file written');
    });
  }
});
*/
