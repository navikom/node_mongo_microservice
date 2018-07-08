const Dashboard = function(req, res) {
  let user = req.user.id;
  return res.json({success: true, message: 'it worked', data: `user name is : ${user.name}`});
};
module.exports.Dashboard = Dashboard;