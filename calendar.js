const monthNames = ["January", "February", "March", "April", "May", "June", 
		"July", "August", "September", "October", "November", "December"];
const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const today = new Date();

$(displayMonth);

$(document).on('click', '[nav]', function() {
	let pos = $('.calendar-header').attr('pos').split('_');
	let month = pos[0];
	let year = pos[1];
	switch ($(this).attr('nav')) {
		case 'prev' :
			month--;
			if (month < 0) {
				month = 11;
				year--;
			}
			break;
		case 'next' :
			month++;
			if (month > 11) {
				month = 0;
				year++;
			}
			break;
	}
	var d = new Date(`${monthNames[month]} ${year}`);
	displayMonth(d);
	return;
})

function displayMonth(d) {
	d = typeof d != 'function' ? d : today;
	let month = d.getMonth();
	let year = d.getFullYear();

	$('.calendar-header').text(`${monthNames[month]} ${year}`);
	$('.calendar-header').attr('pos', `${month}_${year}`);

	let calendarDays = $('.calendar-days');
	calendarDays.empty();

	for (let i = 0; i < dayNames.length; i++) {
		calendarDays.append(`<th>${dayNames[i]}</th>`);
	};

	let calendarDates = $('.calendar-dates');
	calendarDates.empty();

	let firstDay = new Date(year, month, 1).getDay() + 6;
		firstDay = firstDay % 7;
	let daysInMonth = new Date(year, month + 1, 0).getDate() + firstDay;
	let calenderRow = calendarRow();

	for (let i = 0; i < firstDay; i++) {
		calenderRow.append('<td></td>');
	};

	var calendarDate = 1;
	for (let i = firstDay; i <= daysInMonth - 1; i++) {
		if (i % 7 == 0) calenderRow = calendarRow();
		calenderRow.append(`<td>${calendarDate}</td>`);
		calendarDate++;
	};

	return;

	function calendarRow() {
		calendarDates.append('<tr></tr>');
		return calendarDates.find('tr').last();
	}
};