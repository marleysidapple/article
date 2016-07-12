var mongoose = require('mongoose');


//creating blog schema

var postSchema = new mongoose.Schema({
	title: String,
	description: String,
	/*author: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		}]*/
    author: String
});


//declare models
mongoose.model('Post', postSchema);

