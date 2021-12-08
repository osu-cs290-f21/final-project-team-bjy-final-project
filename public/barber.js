// add event listener when client submits an appointment
// take in the inputed data
// take each value and appoint it with a handlebar to make the post
// have the handlebar create the post. 


var allPosts = []

var submitButton = document.querySelector('.btn')
submitButton.addEventListener('click', function () {
    console.log("== button lcicked")
    var apptName = document.getElementById('client-name').value
    var apptEmail = document.getElementById('client-email').value
    var apptDate = document.getElementById('client-date').value
    var apptTime = document.getElementById('client-time').value
    var apptType = document.getElementById('client-type').value

    insertNewPost(apptName, apptEmail, apptDate, apptTime, apptType)
})

function insertNewPost(name, email, date, time, type) {
    var posts = {

        name: name,
        email: email,
        date: date,
        time: time,
        type: type
    }

    var listAppt = Handlebars.templates.barberPost(posts)

    var posting = document.getElementById('posts');
    posting.insertAdjacentHTML("beforeend", listAppt)
}








