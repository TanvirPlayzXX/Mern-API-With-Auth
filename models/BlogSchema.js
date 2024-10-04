const mongoose = require('mongoose')

const BlogSchema = mongoose.Schema({
    heading: String,
    desc: String,
})

module.exports = mongoose.model('Blog', BlogSchema)