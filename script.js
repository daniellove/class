var data;

$(getClasses);
function processClasses(allclasses) {
	data = allclasses;
	console.log(allclasses);
	return;
};

var user_data = false;
$(function() {
	user_data = {};

	$('#replacement_strings div').each(function() {
		user_data[$(this).attr('id')] = $(this).text();
	});
	
	$('#replacement_strings').remove();
	return;
});

$(function() {
	get_section(post_section);
});
function post_section(sections) {
	for (var section of sections) {
		if (section['Name'] == user_data['NAME']) {
			user_data['SECTION'] = section
		};
	};

	console.log(user_data);

	return;
};