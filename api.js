const apiUrl= "http://localhost:8000"

const api={
  get: (url,data)=>{
    if(data==null)data={}
    return new Promise((resolve,reject)=>{
      wx.request({
        url: apiUrl+url,
        data: data,
        // header: {},
        method: "GET",
        dataType: "json",
        success: (res)=>{
          resolve(res)
        },
        fail: (res)=>{
          reject(res)
        }
        // complete: function (res) { },
      })
    })
  },
  post: (url, data) => {
    if (data == null) data = {}
    return new Promise((resolve, reject) => {
      wx.request({
        url: apiUrl+url,
        data: data,
        // header: {},
        method: "POST",
        dataType: "json",
        success: (res) => {
          resolve(res)
        },
        fail: (res) => {
          reject(res)
        }
      })
    })
  }
}


module.exports = api