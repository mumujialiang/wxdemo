// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    pageScroll: 0,
    navTop: 0,
    navItemActive: "red",
    info: [{
        className: "分类1",
        goods: [{
          title: "标题",
          description: "描述1",
          price: "123",
          num: 2,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586248876717&di=a527d77482f7c04cdafddc86489ca9ee&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853"
        }]
      },
      {
        className: "分类2",
        goods: [{
          title: "标题",
          description: "描述2",
          price: "123",
          num: 0,
          img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586248876717&di=a527d77482f7c04cdafddc86489ca9ee&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853"
        }]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onPageScroll: function(event) {
    this.setData({
      pageScroll: event.scrollTop
    });
    let index = 0;
    wx.createSelectorQuery().selectAll('.list-item').boundingClientRect(rect => {

      for (let i = 0; i < rect.length; i++) {
        if (rect[i].top <= 0) {
          index = i
        }
      }
      this.setData({
        active: index
      });
    }).exec();

    wx.createSelectorQuery().selectAll('.nav-item').boundingClientRect(rect => {
      if (this.data.active > 0) {
        this.setData({
          navTop: rect[0].height * (this.data.active - 2)
        });
      } else {
        this.setData({
          navTop: 0
        });
      }
    }).exec()
  },
  clickNav: function(event) {
    wx.createSelectorQuery().selectAll('.list-item').boundingClientRect(rect => {
      wx.pageScrollTo({
        scrollTop: rect[event.currentTarget.dataset.index].top + this.data.pageScroll + 1
      })
    }).exec()
  },
  addNum: function(event) {
    var temp = event.currentTarget.dataset
    this.setData({
      ['info[' + temp.infoIndex + '].goods[' + temp.goodsIndex + '].num']: this.data.info[temp.infoIndex].goods[temp.goodsIndex].num + 1
    })
  }
})