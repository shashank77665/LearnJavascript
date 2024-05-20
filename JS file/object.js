var user = {
    firstName : "Shashank",
    lastname : "Kumar",
    role: "admin",
    courseEnrolled : [],
    buyCourse: function(courseName){
        this.courseEnrolled.push(courseName);
    },
    getCourseInfo: function(){
        return `hello ${this.firstName} you are currently enrolled in ${this.courseEnrolled.length} and your courses are ${this.courseEnrolled}`
    } 
}

// console.table(user)
// console.log(user.firstName)
// console.log(user["lastName"]);

// user.firstName="Prashant"
// console.table(user)

console.log(user);
console.log(user.getCourseInfo());
console.log(user.buyCourse("DSA"));
console.log(user);
console.log(user.getCourseInfo());