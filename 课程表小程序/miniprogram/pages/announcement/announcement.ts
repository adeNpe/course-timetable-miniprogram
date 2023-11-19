var app = getApp();
Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
      this.setData({
        didILogin: app.globalData.didILogin
      })
    }
  },
  
  data: {
    didILogin: 'false'
  }
})
