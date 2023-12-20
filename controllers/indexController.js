// Rendering the single home page
function getHome(req, res) {
    res.render("index");
}

// Exporting for routes
module.exports = {
    getHome
}