var app = getApp()
Page({
  data: {
  },

  onLoad() {//这里查信息也是要用post，因为你传入的也有！！！
    var that = this
    wx.request({
      url: "http://localhost:3000/api/course/get-all-courses",
      data: {
        username: app.globalData.usernameDisplay
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',

      success(res) {
        console.log("信息获取成功")
        that.setData({
          list: res.data
        })
        return
      },
    })
  },

  onReady() {

  },


  onShow() {

  },

  onHide() {

  },


  onUnload() {

  },


  onPullDownRefresh() {

  },

  onReachBottom() {

  },


  onShareAppMessage() {

  }
})