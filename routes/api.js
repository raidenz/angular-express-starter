/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  res.json({
<<<<<<< HEAD
    name: 'Bob',
    telo: 'isitelo'
=======
    name: 'Bob'
>>>>>>> c7c7e25c8a5e52436686d4f454fc2dfd72e6ca36
  });
};