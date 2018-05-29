var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb:url';

module.exports = {
    signup: function(){
        // Code will be here
    }
}


getUserInfo: function(username, callback){
	MongoClient.connect(url, function(err, db){
		
		db.collection('user').findOne( { email : username 
		},function(err, result){
			if(result==null){
				callback(false)
			}
			else{
				callback(result);
			}
		});
        
	});
}

updateProfile: function(name, password, username, callback){
	MongoClient.connect(url, function(err, db) {
	  	db.collection('user').updateOne( 
	  		{ "email": username },
	  		{ $set: 
	  			{ "name" : name,
	  			  "password" : password 
	  			}
	  		},function(err, result){
			
	    	if(err == null){
	    		callback(true)
	    	}
	    	else{
	    		callback(false)
	    	}
		});
	});
}