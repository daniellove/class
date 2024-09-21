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

function get_section(callback) {
	var obj = valence('GET', `/d2l/api/lp/1.43/${user_data['OUID']}/sections/`)
	obj['success'] = function(response) {
		callback(response);
		return;
	};

	$.ajax(obj);
	return;
};

function valence(type, endpoint) {
	var obj = {method:type};
	obj['url'] = endpoint;
	return obj;
};
