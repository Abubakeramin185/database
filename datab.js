
const baseUsers ="https://jsonplaceholder.typicode.com/users"


const  users = document.getElementById("rowtable")




//fetch è funzione Async
const getUsers = async()=> {
    try {
        const res = await fetch(baseUsers)
        const users = await res.json()

      renderUsers(users)

        console.log(users)
    }catch (err){
        console.log(err)
    }
}


function renderUsers(Users){
let resultsUsers = document.getElementById("rowTable")
resultsUsers.innerHTML = ""

const usersTable = users.map((user) => createRow(user))

resultsUsers.append(...usersTable)
}


function createRow ({name, username, email}) {
    const rowUser = document.createElement("tr")

 const nameUser = document.createElement("td")
nameUser.innerText = name
rowUser.appendChild(nameUser)

console.log(elementi)
const usernameUser = document.createElement("td")
 usernameUser.innerText = usernameUser
 rowuser.appendChild(usernameUser)

 const mailUser = document.createElement("td")
 mailUser.innerText = email
 rowuserUser.appendChild("mailuser")

 return rowUser

}

getUsers()