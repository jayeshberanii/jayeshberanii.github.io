interface user{
    id:number,
    fname:string,
    lname:string,
    mobile:number
}

const account=(User:user)=>{
    console.log(User.id,User.fname,User.lname,User.mobile);
    
}
account({
    id:1,
    fname:"jayesh",
    lname:"berani",
    mobile:6355353728
})