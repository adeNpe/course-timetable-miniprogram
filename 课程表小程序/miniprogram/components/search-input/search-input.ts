import { native } from "XrFrame/kanata/lib/backend/native/worker"

Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoSearchPage(){
      wx.navigateTo({
        url: "../../pages/search/search"
      })
    }
  }
})