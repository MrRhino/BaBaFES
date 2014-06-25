Handlebars.registerHelper('fullName', function(person) {
    return ((person.firstName || '') +
			(person.first || '') + ' ' +
			(person.lastName || '') + ' ' +
			(person.last || ''));
});


Handlebars.registerHelper('address', function(address) {
    var text =	address.street + ',\r\n' +
			    address.houseNumber + ',\r\n' +
			    address.postalCode + ',\r\n' +
			    address.city + ',\r\n' +
			    address.country

    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Handlebars.SafeString(text);
});

Handlebars.registerHelper('selectiveServices', function(selectiveServices) {
	var text = '';
	var ss = null;
	var values = null;
	for(ss in selectiveServices)
	{
		values = selectiveServices[ss];
		for(v in values)
		{
			text += v + ' ' + values[v] + '\r\n';
		}
	}

    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Handlebars.SafeString(text);
});

Handlebars.registerHelper('receivePromomotionsPermissions', function(receivePromomotionsPermissions) {
	var text = '';
	var rpp = null;
	for(rpp in receivePromomotionsPermissions)
	{
		text += rpp + ': ' + receivePromomotionsPermissions[rpp] + ',\r\n';
	}

    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Handlebars.SafeString(text);
});