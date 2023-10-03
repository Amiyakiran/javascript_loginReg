class Landing{
     dataBase = {
    "Milan":{username:"Milan",password:"123"},
    "Miland":{username:"Miland",password:"1234"},
    "mariya":{username:"mariya",password:"12345"},
    "manuel":{username:"manuel",password:"123456"}
}
//store data at local storage
saveData(){
    //store db
    if(this.dataBase){
        console.log(this.dataBase);
        localStorage.setItem('database',JSON.stringify(this.dataBase))
    }
}

//value resign so new value should be added to the database in the localstorage
 getData(){
    this.dataBase = JSON.parse(localStorage.getItem("database"))
    console.log(this.dataBase);
} 

//register

 register(){
    this.getData() 
    let user = reguser.value
    let pswd = regpswd.value
    if(user=="" || pswd==""){
        alert('please enter valid password and username')
    }
    else{
        if(user in this.dataBase){
            alert('User already Exists')
            reguser.value=''
            regpswd.value=''
        }
        else{
           // register
           this.dataBase[user]={username:user,password:pswd}
           console.log(this.dataBase);
           this.saveData()
           alert('register Successful')
         //navigate to login
         window.location="login.html"
        }
    }
}
//login
login(){
    let user=loguser.value
    let pswd=logpswd.value
    this.getData()

    if(user in this.dataBase){
        if(this.dataBase[user].password==pswd){
            //store username in storage
            localStorage.setItem("user",user)
            alert('login successful')
            //navigate
            window.location="home.html"
        }
        else{
            alert('Incorrect username or password')
        }
    }
    else{
        alert('User doesnot Exist')
    }
}

}

const obj=new Landing()
obj.saveData()
obj.getData()