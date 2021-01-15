window.onload = function() {
	var profile = {
		name: 'Zita Chan', //name:(key) Zita Chan (profile)
		age: 21,
		height: 169
	};
	for(var key in profile) {
		console.log(key); //迴圈, 重複進行這三行
		console.log(profile[key]); //根據key 去找profile
		console.log(profile.key); //doesn't work 找profile裏的key,因為沒有key所以是undefined.

	}
};