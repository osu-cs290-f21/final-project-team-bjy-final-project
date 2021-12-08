// add event listener when client submits an appointment
// take in the inputed data
// take each value and appoint it with a handlebar to make the post
// have the handlebar create the post. 
// change the bookPage 
var appointmentName = document.getElementById('client-name')
var appointmentEmail = document.getElementById('client-email')
var appointmentDate = document.getElementById('client-date')

var appointmentList = document.getElementById('client-time')
var appointmentList = document.getElementById('client-type')

function insertNewPost () {
    var context = {
        name: name,
        email: email,
        date: date,
        time: time,
        type: time
    }
    // add handlebar function
}

function modal_switch() 
{
    document.getElementById("client-name").value = '';
    document.getElementById("client-email").value = '';
    document.getElementById("client-date").value = '';
    document.getElementById("client-time").value = '';
    document.getElementById("client-type").checked = true;
    document.getElementById("cancel-appointment-button").classList.toggle('hidden');
}

function empty() 
{
    clientname.value = '';
    email.value = '';
    date.value = '';
    Time.value = '';
    select.style.display = 'none';
    document.getElementById('client-type').click();
}


var input_appointment_button = function ()
{
    var check_name = document.getElementById('client-name').value;
    var check_e_mail = document.getElementById('client-email').value;
    var check_data = document.getElementById('client-date').value;
    var check_time = document.getElementById('client-time').value;
    var check_type = document.getElementById('client-type').value;
    if (check_name == '' || check_e_mail == '' || check_data == '' || check_time == '' || check_type == '') 
    {
        alert("There are empty boxes")
        return;
    }
    else   
}









