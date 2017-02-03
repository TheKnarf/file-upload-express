var express = require('express');
var app = express();
var fileUpload = require('express-fileupload');

app.use(express.static('public'));
app.use(fileUpload());

var fileUpload = function(req, res) {
  console.log(req.files);
  var sampleFile;
 
  if (!req.files) {
    res.send('No files were uploaded.');
    return;
  }
 
  sampleFile = req.files.content;
 
  // Use the mv() method to place the file somewhere on your server 
  sampleFile.mv('files/' + sampleFile.name, function(err) {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.send('File uploaded!');
    }
  });

}

app.post('/upload', fileUpload);
app.put('/upload', fileUpload);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
