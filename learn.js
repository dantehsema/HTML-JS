submitForm = (event) => {
	event.preventDefault();
	console.log('This is the event', event); 
	let signUp = {};
	signUp['firstName'] = document.getElementById("firstName").value;
	signUp['lastName'] = document.getElementById('lastName').value;
	signUp['email'] = document.getElementById('email').value;
	signUp['phone']	= document.getElementById('phone').value;
	signUp['gender'] = this.genderSelect(document.getElementsByName('gender'));
	signUp['password'] = document.getElementById('password').value;
	signUp['confirmPassword'] = document.getElementById('confirmPassword').value;
	console.log('This is the SignUp Object', signUp);
	insertData(signUp);
	reset();
}

genderSelect = (element) => {
	console.log('This is  the gender object:', element);
	for(let i=0; i<element.length; i++){
		if(element[i].checked){
			element[i].checked = false;
			return element[i].value;
		}
	}
}

insertData = (data) => {
	let table = document.getElementById('signedUp');
	let newRow = table.insertRow(0);

	let cell1 = newRow.insertCell(0);
	let cell2 = newRow.insertCell(1);
	let cell3 = newRow.insertCell(2);
	let cell4 = newRow.insertCell(3);
	let cell5 = newRow.insertCell(4);
	let cell6 = newRow.insertCell(5);
	let cell7 = newRow.insertCell(6);

	cell1.innerHTML = data.firstName;
	cell2.innerHTML = data.lastName;
	cell3.innerHTML = data.email;
	cell4.innerHTML = data.phone;
	cell5.innerHTML = data.gender;
	cell6.innerHTML = data.password;
	cell7.innerHTML = data.confirmPassword;
}

reset = () => {
	document.getElementById("firstName").value = '';
	document.getElementById("lastName").value = '';
	document.getElementById("email").value = '';
	document.getElementById("phone").value = '';
	document.getElementById("password").value = '';
	document.getElementById("confirmPassword").value = '';

}