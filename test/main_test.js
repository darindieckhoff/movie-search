'use strict';

var chai = require('chai'),
  expect = require('chai').expect,
chaiHttp = require('chai-http'),
  server = require('../src/index');

//Test suite

chai.use(chaiHttp);

describe('/GET movie data from OMDb', function() {
  it("it should return movie data", function(done){
    var movie = 'Jaws';
    chai.request(server)
      .get('http://www.omdbapi.com/?s=' + movie)
      .end(function(err, res){
        expect(res.status).to.equal(200);
      });
    done();
  });
  it('it should return movie plot', function(done){
    var id = 'tt0073195';
    chai.request(server)
      .get('http://www.omdbapi.com/?s=' + id)
      .end(function(err, res){
        expect(res.status).to.equal(200);
      });
    done();  
  });
});

describe('/GET soundtrack data from spotify API', function() {
  it("it should return soundtrack data", function(done){
    chai.request(server)
      .get('https://api.spotify.com/v1/search?q=Jaws%20soundtrack&type=album')
      .end(function(err, res){
        expect(res.status).to.equal(200);
      });
    done();
  });
});

describe('/GET video data from youtube API', function() {
  it("it should return video data", function(done){
    chai.request(server)
      .get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=Jaws%20trailer&…Count&maxResults=12&type=video&key=AIzaSyAijyLR_0tU9NqhBgzkRZF5KdDyAVvZNcg')
      .end(function(err, res){
        expect(res.status).to.equal(200);
      });
    done();
  });
});
