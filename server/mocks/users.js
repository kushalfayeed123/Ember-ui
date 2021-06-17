'use strict';

module.exports = function (app) {
  const express = require('express');
  let usersRouter = express.Router();
  let archiveRouter = express.Router();

  usersRouter.get('/', function (req, res) {
    console.log(req.params);
    res.send(
      {
        "data": [
          {
            "id": "1",
            "type": "user",
            "attributes": {
              "name": "Albert Einstein",
              "image": "/images/Einstein.jpg",
              "value": "false",
              "archived": false
            }
          },
          {
            "id": "2",
            "type": "user",
            "attributes": {
              "name": "Walt Disney",
              "image": "/images/Walt.jpg",
              "value": "false",
              "archived": false

            }
          },
          {
            "id": "3",
            "type": "user",
            "attributes": {
              "name": "Bruce Lee",
              "image": "/images/Bruce.jpg",
              "value": "false",
              "archived": false

            }
          },
          {
            "id": "4",
            "type": "user",
            "attributes": {
              "name": "Neil Armstrong",
              "image": "/images/Neil.jpg",
              "value": "false",
              "archived": false

            }
          }
        ]
      }
    );
  });

  usersRouter.get('/:id', function(req, res) {
    switch (req.params.id) {
      case '1':
        res.send({
          'data' :  {
            "id": "1",
            "type": "user",
            "attributes": {
              "name": "Albert Einstein",
              "image": "/images/Einstein.jpg",
              "value": "false",
              "archived": false
            }
          }
        });
        break;
        case '2':
          res.send({
            'data' :  {
              "id": "2",
              "type": "user",
              "attributes": {
                "name": "Walt Disney",
                "image": "/images/Walt.jpg",
                "value": "false",
                "archived": false
  
              }
            },
          });
          break;
        case '3':
          res.send({
            'data' :  {
              "id": "3",
              "type": "user",
              "attributes": {
                "name": "Bruce Lee",
                "image": "/images/Bruce.jpg",
                "value": "false",
                "archived": false
  
              }
            },
          });
          break;
        case '4':
          res.send({
            'data' :  {
              "id": "4",
              "type": "user",
              "attributes": {
                "name": "Neil Armstrong",
                "image": "/images/Neil.jpg",
                "value": "false",
                "archived": false
  
              }
            }
          });
          break;
    
      default:
        break;
    }
    res.sendStatus(200);
    console.log(req.params);
  });
  usersRouter.patch('/:id', function (req, res) {
    switch (req.params.id) {
      case '1':
      res.send(
        {
          "data": [
            {
              "id": "1",
              "type": "user",
              "attributes": {
                "name": "Albert Einstein",
                "image": "/images/Einstein.jpg",
                "value": "false",
                "archived": true
              }
            },
            {
              "id": "2",
              "type": "user",
              "attributes": {
                "name": "Walt Disney",
                "image": "/images/Walt.jpg",
                "value": "false",
                "archived": false

              }
            },
            {
              "id": "3",
              "type": "user",
              "attributes": {
                "name": "Bruce Lee",
                "image": "/images/Bruce.jpg",
                "value": "false",
                "archived": false

              }
            },
            {
              "id": "4",
              "type": "user",
              "attributes": {
                "name": "Neil Armstrong",
                "image": "/images/Neil.jpg",
                "value": "false",
                "archived": false

              }
            }
          ]
        }
      );
        break;
    case '2':
    res.send(
      {
        "data": [
          {
            "id": "1",
            "type": "user",
            "attributes": {
              "name": "Albert Einstein",
              "image": "/images/Einstein.jpg",
              "value": "false",
              "archived": false
            }
          },
          {
            "id": "2",
            "type": "user",
            "attributes": {
              "name": "Walt Disney",
              "image": "/images/Walt.jpg",
              "value": "false",
              "archived": true

            }
          },
          {
            "id": "3",
            "type": "user",
            "attributes": {
              "name": "Bruce Lee",
              "image": "/images/Bruce.jpg",
              "value": "false",
              "archived": false

            }
          },
          {
            "id": "4",
            "type": "user",
            "attributes": {
              "name": "Neil Armstrong",
              "image": "/images/Neil.jpg",
              "value": "false",
              "archived": false

            }
          }
        ]
      }
    );
    case '3':
    res.send(
      {
        "data": [
          {
            "id": "1",
            "type": "user",
            "attributes": {
              "name": "Albert Einstein",
              "image": "/images/Einstein.jpg",
              "value": "false",
              "archived": false
            }
          },
          {
            "id": "2",
            "type": "user",
            "attributes": {
              "name": "Walt Disney",
              "image": "/images/Walt.jpg",
              "value": "false",
              "archived": false

            }
          },
          {
            "id": "3",
            "type": "user",
            "attributes": {
              "name": "Bruce Lee",
              "image": "/images/Bruce.jpg",
              "value": "false",
              "archived": true

            }
          },
          {
            "id": "4",
            "type": "user",
            "attributes": {
              "name": "Neil Armstrong",
              "image": "/images/Neil.jpg",
              "value": "false",
              "archived": false

            }
          }
        ]
      }
    );
    case '4' :
      res.send(
        {
          "data": [
            {
              "id": "1",
              "type": "user",
              "attributes": {
                "name": "Albert Einstein",
                "image": "/images/Einstein.jpg",
                "value": "false",
                "archived": false
              }
            },
            {
              "id": "2",
              "type": "user",
              "attributes": {
                "name": "Walt Disney",
                "image": "/images/Walt.jpg",
                "value": "false",
                "archived": false

              }
            },
            {
              "id": "3",
              "type": "user",
              "attributes": {
                "name": "Bruce Lee",
                "image": "/images/Bruce.jpg",
                "value": "false",
                "archived": false

              }
            },
            {
              "id": "4",
              "type": "user",
              "attributes": {
                "name": "Neil Armstrong",
                "image": "/images/Neil.jpg",
                "value": "false",
                "archived": true

              }
            }
          ]
        }
      );
      default:
        break;
    }

  });

  app.use('/api/users', usersRouter);
};
