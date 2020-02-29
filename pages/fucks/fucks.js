const fucks = ["fucker", "dumbass", "shabi", "Idiot"];
const insultUrl = `https://evilinsult.com/generate_insult.php?lang=en&type=json`

// pages/fucks/fucks.js
Page({

  getInsult: function() {
    let insult;
    wx.request({
      url: insultUrl,
      success: (res) => {
        this.setData({
         insult: res.data.insult
        })
      }
    })
  },

  /**
   * Page initial data
   */
  data: {
    fuck: "Wait"
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      fuck: fucks[Math.floor(Math.random() * fucks.length)],
    });
    this.getInsult();
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})