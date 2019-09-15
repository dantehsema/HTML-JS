let editRow = null;

submitForm=(event) => {
	event.preventDefault();
	console.log('this is the submitForm Event', event);
	let formData = {};
	formData.firstName = document.getElementById("firstName").value;
	formData.lastName = document.getElementById("lastName").value;
	formData.email = document.getElementById("email").value;
	formData.phone = document.getElementById("phone").value;
	formData.gender = getGender(document.getElementsByName("gender"));
	formData.password = document.getElementById("password").value;
	formData.confirmPassword = document.getElementById("confirmPassword").value;
	console.log('this is formData', formData);
	if(editRow === null){
		insertData(formData);
	}else{
		updateData(formData);
	}
	
	resetForm();
}

getGender = (element) => {
	console.log('this is gender arr', document.getElementsByName("gender"));
	for(let i=0; i<element.length; i++){
		if(element[i].checked){
			element[i].checked = false;
			return element[i].value;
		}else{
			return null;
		}
	}
}

insertData = (data) => {
	let table = document.getElementById("tableBody");
	let newRow = table.insertRow(0);

	let cell1 = newRow.insertCell(0);
	let cell2 = newRow.insertCell(1);
	let cell3 = newRow.insertCell(2);
	let cell4 = newRow.insertCell(3);
	let cell5 = newRow.insertCell(4);
	let cell6 = newRow.insertCell(5);
	let cell7 = newRow.insertCell(6);
	let cell8 = newRow.insertCell(7);

	cell1.innerHTML = data.firstName;
	cell2.innerHTML = data.lastName;
	cell3.innerHTML = data.email;
	cell4.innerHTML = data.phone;
	cell5.innerHTML = data.gender;
	cell6.innerHTML = data.password;
	cell7.innerHTML = data.confirmPassword;
	cell8.innerHTML = '<a onClick = "editField(this)">Edit</a>/<a onClick="deleteField(this)">Delete</a>';
}

editField = (element) => {
	console.log('This is the element in this', element.parentElement.parentElement.childNodes);
	editRow = element.parentElement.parentElement.childNodes;

	document.getElementById("firstName").value = editRow[0].innerText;
	document.getElementById("lastName").value = editRow[1].innerText;
	document.getElementById("email").value = editRow[2].innerText;
	document.getElementById("phone").value = editRow[3].innerText;
	document.getElementById("password").value = editRow[5].innerText;
	document.getElementById("confirmPassword").value = editRow[6].innerText;
	let genderStatusForms = editRow[4].innerText;
	checkGender(genderStatusForms);
}

checkGender = (gen) => {
	console.log('this is the gender now', gen);
	let radioForm = document.getElementsByName("gender");

	for(let i=0; i<radioForm.length; i++){
		console.log('this is radioForm at i', radioForm[i]);
		if(gen === radioForm[i].value){
			radioForm[i].checked = true;
		}
	}
}

updateData = (data) => {
	editRow[0].innerHTML = data.firstName;
	editRow[1].innerHTML = data.lastName;
	editRow[2].innerHTML = data.email;
	editRow[3].innerHTML = data.phone;
	editRow[4].innerHTML = data.gender;
	editRow[5].innerHTML = data.password;
	editRow[6].innerHTML = data.confirmPassword;

	editRow = null;
}

deleteField = (element) => {
	let parent = document.getElementById('tableBody');
let child = element.parentElement.parentElement;
console.log('this is the field to be deleted:', child);
parent.removeChild(child);

}

resetForm = () => {
	document.getElementById("firstName").value = "";
	document.getElementById("lastName").value = "";
	document.getElementById("email").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("password").value = "";
	document.getElementById("confirmPassword").value = "";
}


showPassword = (event) => {
	console.log('this is the showPassword event', event);
	let check = document.getElementById("password");
	if(check.type === "password"){
		check.type = "text";
	}else{
		check.type = "password";
	}
}	

showConfirmPassword = (event) => {
	console.log('this is the showPassword event', event);
	let check = document.getElementById("confirmPassword");
	if(check.type === "password"){
		check.type = "text";
	}else{
		check.type = "password";
	}
}	