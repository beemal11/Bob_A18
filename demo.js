const Userdata=[
    {id:1, name: "Gaurav", age: 22, gender: "Male", hasPassedOut: true, occupation: "animator"},
    {id:2, name: "Ishwor", age: 21, gender: "Male", hasPassedOut: false, occupation: "developer"},
    {id:3, name: "Bimal", age: 20, gender: "Male", hasPassedOut: true, occupation: undefined},
    {id:4, name: "Jalan", age: 30, gender: "Male", hasPassedOut: true, occupation: "intern"},
    {id:5, name: "Diwas", age: 100000, gender: "Male", hasPassedOut: false, occupation: undefined},
    {id:6, name: "Safalta", age: 19, gender: "Female", hasPassedOut: true, occupation: "devOps"},
    {id:7, name: "Shruti", age: 25, gender: "Female", hasPassedOut: false, occupation: "CFO"}
]

const response={
    status: 200,
    message: "Data fetched succesfully.",
    data : Userdata
}

const getUserName=()=>{
    const APIStatus=response.status
    if(APIStatus===200){
        const result=response.data
        .filter((user)=>user.occupation)
        .map((user)=>user.name)
        return  result;
    }else{

    }
}
console.log(getUserName())