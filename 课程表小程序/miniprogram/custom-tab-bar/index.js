var app = getApp()
Component({
  data: {
    selected: 3,
    color: "#7A7E83",
    selectedColor: "#50d0d0",
    list: [{
        pagePath: "/pages/index/index",
        text: "主页",
        iconPath: "/images/main_page.png",
        selectedIconPath: "/images/main_page_active.png"
      },
      {
        pagePath: "/pages/announcement/announcement",
        text: "公告",
        iconPath: "/images/announcement.png",
        selectedIconPath: "/images/announcement_active.png"
      },
      {
        pagePath: "/pages/backlog/backlog",
        text: "备忘录",
        iconPath: "/images/backlog.png",
        selectedIconPath: "/images/backlog_active.png"
      },
      {
        pagePath: "/pages/me/me",
        text: "我",
        iconPath: "/images/me.png",
        selectedIconPath: "/images/me_active.png"
      }

    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      if (app.globalData.didILogin == false && (data.index == 0 || data.index == 2)) {
        wx.showToast({
          title: '请先登录',
          icon: 'error',
          duration: 1000
        });
        return
      }
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})