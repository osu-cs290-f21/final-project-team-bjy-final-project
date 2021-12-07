// add event listener when client submits an appointment
// take in the inputed data
// take each value and appoint it with a handlebar to make the post
// have the handlebar create the post. 
// change the bookPage 
var appointmentList = document.getElementById('client-name')
var appointmentList = document.getElementById('email')
var appointmentList = document.getElementById('date')
var appointmentList = document.getElementById('Time')
var appointmentList = document.getElementById('select')


function modal_switch() 
{
    document.getElementById("client-name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("date").value = '';
    document.getElementById("Time").value = '';
    document.getElementById("select").checked = true;
    document.getElementById("cancel-appointment-button").classList.toggle('hidden');
}

function empty() 
{
    clientname.value = '';
    email.value = '';
    date.value = '';
    Time.value = '';
    select.style.display = 'none';
    document.getElementById('select').click();
}

var input_appointment_button = function 
{
    var check_name = document.getElementById('client-name').value;
    var check_e_mail = document.getElementById('email').value;
    var check_data = document.getElementById('date').value;
    var check_time = document.getElementById('Time').value;
    var check_type = document.getElementById('select').value;
    if (check_name == '' || check_e_mail == '' || check_data == '' || check_time == '' || check_type == '') 
    {
        alert("There are empty boxes")
        return;
    }
    else
    
}









