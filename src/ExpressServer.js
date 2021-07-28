import express from "express";
import path from "path";
const bodyParser = require('body-parser');
const router = express.Router();

/**
 *  Example of using ES6 syntectic sugar to create Express JS server
 */
class ExpressServer {
  constructor(hostname = process.env.LOCAL_HOST, port = process.env.DEFAULT_PORT) {
    this.serverName = 'Express Server';
    this.hostname = hostname;
    this.port = port;

    //Auto Start Server
    this.initServer()
    
  }

  initServer=()=> {
    //Create Server
    this.server = express();

    this.server.use(bodyParser.json()); // for parsing application/json
    this.server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    this.server.use('/', router);

    //this.server.use('/css', express.static(path.join(_dirname, 'node_modules/bulma/css')));
    this.server.use(express.static(path.join(__dirname, '/')));

    this.server.get('/', (req, res, /* next */)=> {
      res.sendFile(path.join(__dirname+'/index.html'));
      //next();
    })
    
    //Start Listening
    this.server.listen(this.port, () => {
      console.log(`${this.serverName} Started at http://${this.hostname}:${this.port}/`);
    })
  }
}

//EXPORT MODULE
module.exports = ExpressServer

