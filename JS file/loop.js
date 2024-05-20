const symbols = ["facebook","youtube","instagram"]

// for ( n of symbols){
//     console.log(n)
// }

var user = {
    firstName : "Shashank",
    lastname : "Kumar",
    role: "admin",
    courseEnrolled : [],
    // buyCourse: function(courseName){
    //     this.courseEnrolled.push(courseName);
    // },
    // getCourseInfo: function(){
    //     return `hello ${this.firstName} you are currently enrolled in ${this.courseEnrolled.length} and your courses are ${this.courseEnrolled}`
    // } 
}

for ( const s in user){
    console.log(`for value ${user[s]} key is ${s}`)
}