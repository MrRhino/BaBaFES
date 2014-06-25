/*global define:true*/
'use strict';
define({
	data: {
		customers : [
			{
			    'id': 1,
			    'cpr': '180173XXXX',
			    'secondaryPhoneNumber': '+44707318625',
			    'name': {
			        'first': 'Stefan',
			        'last': 'Olsson'
			    },
			    'email': 'mrol@telenor.dk',
			    'address': {
			        'street': 'Nils Anderssons gata',
			        'houseNumber': 12,
			        'postalCode': 21837,
			        'city': 'Bunkeflostrand',
			        'country': 'Sverige'
			    },
			    'balance': 322.50,
			    'selectiveServices': [{
			        'name': '5 GB data'
			    }, {
			        'name': 'Udlandsopkald'
			    }],
			    'receivePromomotionsPermissions': {
			        'sms': false,
			        'email': true,
			        'phoneCall': false
			    }
			},
			{
			    'id': 2,
			    'cpr': '190173XXXX',
			    'secondaryPhoneNumber': '+45707318625',
			    'name': {
			        'first': 'Martin',
			        'last': 'RosÃ©n-Lidholm'
			    },
			    'email': 'mrol@telenor.dk',
			    'address': {
			        'street': 'Gl. Kongevej',
			        'houseNumber': 13,
			        'postalCode': 22836,
			        'city': 'København',
			        'country': 'Danmark'
			    },
			    'balance': 322.50,
			    'selectiveServices': [{
			        'name': '15 GB data'
			    }, {
			        'name': 'Udlandsopkald'
			    }],
			    'receivePromomotionsPermissions': {
			        'sms': true,
			        'email': true,
			        'phoneCall': false
			    }
			},
			{
			    'id': 3,
			    'cpr': '200173XXXX',
			    'secondaryPhoneNumber': '+46707318625',
			    'name': {
			        'first': 'Geir',
			        'last': 'Christensen'
			    },
			    'email': 'mrol@telenor.dk',
			    'address': {
			        'street': 'Oslovej',
			        'houseNumber': 14,
			        'postalCode': 25836,
			        'city': 'Oslo',
			        'country': 'Norge'
			    },
			    'balance': 322.50,
			    'selectiveServices': [{
			        'name': '25 GB data'
			    }, {
			        'name': 'Udlandsopkald'
			    }],
			    'receivePromomotionsPermissions': {
			        'sms': true,
			        'email': true,
			        'phoneCall': false
			    }
			}
		],
	    users: [{
	        person: {
	            firstName: 'Garry',
	            lastName: 'Finch'
	        },
	        jobTitle: 'Front End Technical Lead',
	        twitter: 'gazraa'
	    }, {
	        person: {
	            firstName: 'Larry',
	            lastName: 'Thomson'
	        },
	        jobTitle: 'Photographer',
	        twitter: 'photobasics'
	    }, {
	        person: {
	            firstName: 'Marten',
	            lastName: 'Jones'
	        },
	        jobTitle: 'LEGO Geek',
	        twitter: 'minifigures'
	    }]
	}

});
