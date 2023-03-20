console.log("Hello World");

var login = document.querySelector(".navButton")
var logout = 'Logout'
function loginBtn(){
    login.innerText = logout
}

var definitionBtn = document.querySelector(".defBtn")
function removeBtn(){
    definitionBtn.remove()
}

var likeCount = 0
var likes = document.querySelector(".likeBtn")
function likeButton(){
    alert("Ninja Was Liked!")
    likeCount++
    likes.innerText = likeCount + ' likes'
}
var likeCount2 = 0
var likes2 = document.querySelector(".likeBtn2")
function likeButton2(){
    alert("Ninja Was Liked!")
    likeCount2++
    likes2.innerText = likeCount2 + ' likes'
}