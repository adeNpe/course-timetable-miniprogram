const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/classMG", {

})
    .then(() => {
        console.log("数据库连接成功！")
    })
    .catch((err) => {
        console.log("数据库连接失败！", err);
    })


const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: { type: String },
    admin: { type: Boolean },
    accountStatus: { type: Number }
})
const User = mongoose.model('User', UserSchema)

const CourseSchema = new mongoose.Schema({
    username: { type: String },
    courseName: { type: String },
    whichDay: { type: Number },
    startTime: { type: String },
    endTime: { type: String },
    teacher: { type: String },
    group: { type: Number },
    color: { type: String }
})
const Course = mongoose.model('Course', CourseSchema)

const BacklogSchema = new mongoose.Schema({
    username: { type: String },
    title: { type: String },
    createTime: { type: String },
    reminderOrNot: { type: Number },
    reminderTime: { type: String },
    shouldIRemind: { type: Boolean },
    content: { type: String }
})
const Backlog = mongoose.model('Backlog', BacklogSchema)

const AnnouncementSchema = new mongoose.Schema({
    username: { type: String },
    createTime: { type: String },
    lastEditTime: { type: String },
    title: { type: String },
    content: { type: String }
})
const Announcement = mongoose.model('Announcement', AnnouncementSchema)

//User.db.dropCollection('users')
//Course.db.dropCollection('courses')
//Announcement.db.dropCollection('announcements')
//Backlog.db.dropCollection('backlogs')
//console.log("delete ok!")

module.exports = {
    User,
    Course,
    Backlog,
    Announcement
}