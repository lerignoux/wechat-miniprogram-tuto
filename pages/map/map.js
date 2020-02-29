// pages/map/map.js
const latLng = "30.89,121.10,31.41,121.76";
const token = "769fd1423ee942133111846c78664694833a5b78";
const apiUrl = `https://api.waqi.info/map/bounds/?token=${token}&latlng=${latLng}`;

Page({
  /**
   * Page initial data
   */
  data: {
    markers: null,
    points: null
  },

  data_old: {
    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.request({
      url: apiUrl,
      success: (res) => {
        console.log(res);
        const markers = res.data.data.map(
          point => {
            return {
              latitude: point.lat,
              longitude: point.lon,
              title: point.station.name,
              label: {
                content: point.aqi,
                textAlign: 'center',
                borderRadius: 4,
                color: "#333333"
              }
            }
          }
        );
        const points = res.data.data.map(
          point => {
            return {
              latitude: point.lat,
              longitude: point.lon
            }
          }
        );
        this.setData(
          {markers, points}
        )
      } 
    })
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

  },
  
  regionchange(e) {
    console.log(e.type)
  },

  markertap(e) {
    console.log(e.markerId)
  },

  controltap(e) {
    console.log(e.controlId)
  }

})