

//app.js
App({

  
  //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
  onLaunch: function(options){

    wx.cloud.init({
      env: 'test-ww7pe'
    })


    const db = wx.cloud.database();
    db.collection('article').get({
      success: function(res) {
      // 输出 [{ "title": "The Catcher in the Rye", ... }]
      console.log(res)
     }
    })
    db.collection('article').add(
      {
        data:{
          haha:123
        },
        success:function(res){
          console.log(res)
        }
      }
    )
  }
});