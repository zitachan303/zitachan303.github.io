var name = 'HL Chan';
var age = 21;
var affiliation = 'NTHU';

var profile = {
	name: 'HL Chan',
	age: 21,
	affiliation: 'NTHU',
	height: 169,
	weight: 60,
	/*homePhone: 12345678,
	mobilePhone: [98765432, 87654321, 76543210]*/
	contact: {
		home: 12345678,
		mobile: [98765432, 87654321, 76543210]
	}
};

console.log(profile.name); //取得profile 裏的name//
console.log(profile['name']);

profile.gender = 'female';

console.log(profile.gender);

console.log(profile.contact.home);

console.log(profile.contact.mobile[1]) ;

console.log(name.length);

console.log(profile.contact.mobile.length);

