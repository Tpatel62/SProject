// on clicking on a userCardContainer, display the prompt
// adding the date to the calendar
function onClick() {
    var date = prompt("Enter a valid date to go to a trip (in this order:yyyy-mm-dd)");
    var time=prompt("Enter a valid time in this date(in this order(13:00:00)");
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },

        initialDate: new Date(),
        navLinks: true, // can click day/week names to navigate views
        businessHours: true, // display business hours
        editable: true,
        selectable: true,
        events: [{
            title: 'trip',
            start: date+"T"+time,

        }, ]
    });
// rendering the calendar after the clicks
    calendar.render();
}
