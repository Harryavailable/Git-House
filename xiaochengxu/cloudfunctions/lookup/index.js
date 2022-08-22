const cloud = require('wx-server-sdk')

cloud.init({
  env:'cloud1-1g68zuok4f972040'
})
const db=cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  var text = eventwx.userid
  return await db.collection('userjz').aggregate().math({
    userid:text
  })
  .lookup({
    from: 'users',
    localField: 'userid',
    foreignField: '_id',
    as: 'bookList', 
})
.end()
}