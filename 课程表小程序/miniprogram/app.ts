// app.ts
App<IAppOption>({
  globalData: {
    didILogin: true, // 这里太脑瘫了
    usernameDisplay: 'user1',
    aiIAdministrator: false
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})