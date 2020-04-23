// pages/index/components/list/list.js
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
    tabsIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickTitle:function(event){
      // console.log(event.currentTarget.dataset.index)
      this.setData({
        tabsIndex : event.currentTarget.dataset.index
      })
    }
  }
})
