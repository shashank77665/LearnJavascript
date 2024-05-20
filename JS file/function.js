var checkRole = (name,role)=>{
    switch (role) {
        case "admin":
            return `${name} is admin`
            break;
        case "subadmin":
            return `${name} is subadmin`
            break;
        case "testprep":
            return `${name} is end user`
            break;    
        default:
            break;
    }
}

console.log(checkRole("Shashank","subadmin"));