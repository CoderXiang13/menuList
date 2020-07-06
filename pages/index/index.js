//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    url: [
      "../../img/banner1.png",
      "../../img/banner2.png",
      "../../img/banner3.png",
      "../../img/banner4.png",
      "../../img/banner5.png",
      "../../img/banner6.png"
    ],
    inputShowed: false,
    inputVal: ""  
  },
  // 点击搜索按钮，跳转至搜索页面
  goSearch() {
    wx.navigateTo({
      url: '../../components/search/search',
    })
  },



  onLoad() {
    
  },
  
})
