var Elasticsearch = require('aws-es');
 var $config = {
        endpoint:'',
		accessKeyId:'',
		secretAccessKey:'',
		region:'',
		apiVersion:'',
		service:'',
		 host:''
    };
elasticsearch = new Elasticsearch($config);


//////////


var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {


 	elasticsearch.search({
            index: 'animal',
            type: 'badger',
            body: {
                query: {
                    query_string: {
                        query: 'Cain Ullah'
                    }
                }
            },
            defaultOperator: 'AND'
        }, function(err, data) {
            console.log(data);
        });

  res.render('index', { title: 'Express' });
});

module.exports = router;
