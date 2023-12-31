var app = getApp()
Page({
  data: {
    courseName: '' as string
  },
  courseNameInputAction: function (options: { detail: any }) {
    this.data.courseName=options.detail.value
  },
  inputForm(){
    var that = this;
    wx.showLoading({
      title: "登录中"
    })
    wx.request({
      url: "http://localhost:3000/api/course/search",
      data: {
        "username": app.globalData.usernameDisplay,
        "courseName": that.data.courseName
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      responseType: 'text',

      success(res) {
        wx.hideLoading()
        if (res.statusCode == 404) {
          wx.showToast({
            title: '无结果',
            icon: 'error',
            duration: 2000
          });
          return
        }
        else {
          console.log("搜索成功")
          const id = (res.data as myDataType_course)._id
          wx.navigateTo({
            url: "../editXXX/editCourse/editInput?id=" + id,
          })
        }
        return
      },
      fail() {
        wx.hideLoading()
        console.log("未能连上服务器数据库")
      }
    })
  }
})



interface myDataType_course {
  username: string;
  courseName: string;
  whichDay: number;
  startTime: string;
  endTime: string;
  teacher: string;
  group: number;
  color: string;
  __v: number;
  _id: string;
}