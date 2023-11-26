var app = getApp();
Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 3
        })
      }
      this.setData({
        didILogin: app.globalData.didILogin,
        usernameDisplay: app.globalData.usernameDisplay
      })
    }
  },
  methods: {
    toRegisterPage: function () {
      wx.navigateTo({
        url: "../register/register"
      })
    },
    toLoginPage: function () {
      wx.navigateTo({
        url: "../login/login"
      })
    },
    toLogout: function () {
      app.globalData.didILogin=false
      app.globalData.usernameDisplay=""
      wx.reLaunch({
        url: './me'
      })
    }
  },
  data: {
    didILogin: app.globalData.didILogin,
    usernameDisplay: app.globalData.usernameDisplay
  },
})


