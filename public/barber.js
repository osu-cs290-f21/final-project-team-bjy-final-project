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










