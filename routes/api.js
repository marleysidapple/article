var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');


//api for all the POST operation
router.route('/posts')

//creating a new post
.post(function(req, res){
	//save data to the database
	var post  = new Post();
	post.title = req.body.title;
	post.description = req.body.description;
	post.author = req.body.author;

	post.save(function(err, post){
		if (err){
			return res.send(500, err);
		}
		return res.json(post);
	});
})

//get all the post
.get(function(req, res) {

	//display list of all the post from the mongo db
	Post.find(function(err, data) {
		if (err) {
			res.send(500, err);
		}

		return res.send(data);
	});
});

router.route('/posts/:id')


//get all post
.get(function(req, res) {
	Post.findById(req.params.id, function(err, post) {
		if (err) {
			res.send(err);
		}
		res.json(post);
	});
})


//updating post using put method
.put(function(req, res){
	Post.findById(req.params.id, function(err, post){
		if (err){
			res.send(err);
		}
		post.title = req.body.title;
		post.description = req.body.description;
		post.author = req.body.author;
		post.save(function(err, post){
			if (err){
				res.send(err);
			}
			res.json(post);
		});
	});
})


//deleting posts
//delete specific post
.delete(function(req, res) {
	Post.remove({
		_id: req.params.id
	}, function(err) {
		if (err){
			res.send(err);
		}
		res.json("deleted :(");
	});
});




module.exports = router;