var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username_value: {
      type: String
    },
    password_value: {
      type: String
    }
  },
  inputForm(data: { detail: { value: { username_value: any; password_value: any } } }) {
    wx.showLoading({
      title: "登录中"
    })
    wx.request({
      url: "http://localhost:3000/api/login",
      data: {
        "username": data.detail.value.username_value,
        "password": data.detail.value.password_value
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      responseType: 'text',

      success(res) {
        wx.hideLoading()
        if (res.statusCode == 422) {
          wx.showToast({
            title: '无此用户或密码错误',
            icon: 'error',
            duration: 2000
          });
          return
        }
        else {
          console.log("登录成功")
          console.log(res)
          app.globalData.didILogin = true
          console.log(data.detail.value.username_value)
          app.globalData.usernameDisplay = data.detail.value.username_value
          wx.navigateBack();
        }
        return
      },
      fail() {
        wx.hideLoading()
        console.log("未能连上服务器数据库")
      }
    })
  },

  onLoad() {

  },

  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  usernameInputAction: function (options: { detail: any }) {
    let value = options.detail.value
    console.log(value)
  }
})