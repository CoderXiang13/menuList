// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  data: {
    inputShowed: false,
    inputVal: "",

    search: function (value) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([{ text: '搜索结果', value: 1 }, { text: '搜索结果2', value: 2 }])
        }, 200)
      })
    },
    selectResult: function (e) {
      console.log('select result', e.detail)
    }
  },
  
  onLoad() {
    this.setData({
      search: this.search.bind(this)
    })
  },
  
})
