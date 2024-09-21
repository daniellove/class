// requires token and base variables from class_key.js

function getClasses() {
	var obj = classObj('GET', 'api/v1/classes');
	obj['success'] = function(allclasses) {
		processClasses(allclasses);
		return;
	};

	$.ajax(obj);
	return;
};

function getClassDates(class_id) {
	var obj = classObj('GET', 'api/v1/schedules?class_id=' + class_id);
	obj['success'] = function(schedule) {
		processSchedule(schedule);
		return;
	};

	$.ajax(obj);
	return;
};

function getClassEnrolments(class_id) {
	var obj = classObj('GET', 'api/v1/class/enrollments?class_id=' + class_id);
	obj['success'] = function(enrolments) {
		processEnrolements(enrolments);
		return;
	};

	$.ajax(obj);
	return;
}

function classObj(type, endpoint) {
	var obj = {method:type};
	obj['headers'] = {Authorization:token};
	obj['url'] = base + endpoint;
	return obj;
};

// var data = {
//   "identified_by": "ext_user_id",
//   "ext_user_id": "dantestuser001",
//   "user_name": "Dan Testuser",
//   "roles": [
//     "Student"
//   ]
// }

// data = JSON.stringify(data)

function whoami() {
	var obj = {method:'GET'};
	obj['url'] = '/d2l/api/lp/1.43/users/whoami';
	obj['success'] = function(response) {
		myID = response['Identifier'];
		return;
	};

	$.ajax(obj);
	return;
};