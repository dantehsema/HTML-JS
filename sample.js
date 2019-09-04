// var pageWrapper = document.getElementById('page-wrapper');
// console.log("This is sample Paragraph", pageWrapper);

// var btn = document.createElement('button');
// btn.className = 'btn-style';
// btn.innerHTML = 'Submit';
// console.log('This is the button',btn);

// pageWrapper.append(btn);

// var changeColor=() =>{
	
// }

submitForm = (event) => {
	event.preventDefault();
	let formData = {};
	console.log('This is the event:', event);
	formData['name'] = document.getElementById('name').value;
	formData['dob'] = document.getElementById('dob').value;
	formData['email'] = document.getElementById('email').value;
	formData['streetAddressCity'] = document.getElementById('streetAddressCity').value;
	formData['stateSelect'] = document.getElementById('stateSelect').value;
	formData['zip'] = document.getElementById('zip').value;
	formData['numberOfPeople'] = document.getElementById('numberOfPeople').value;
	formData['moveInDate'] = document.getElementById('moveInDate').value;
	formData['smoke'] = this.check(document.getElementsByName('smoke'));
	formData['pets'] = this.check(document.getElementsByName('pets'));
	formData['eviction'] = this.check(document.getElementsByName('eviction'));
	console.log('This is eviction status:', document.getElementsByName('eviction'));
	console.log('this is the formData',formData);
	insertData(formData);
	reset();
}

check = (element) => {
	console.log('This is the status:', element);
	for(i=0; i<element.length; i++){
		if(element[i].checked){
			element[i].checked = false;
			return element[i].value;
		}
	}
}



insertData = (data) =>{
	let table = document.getElementById('registration-table');
	let newRow = table.insertRow(0);

	let cell1 = newRow.insertCell(0);
	let cell2 = newRow.insertCell(1);
	let cell3 = newRow.insertCell(2);
	let cell4 = newRow.insertCell(3);
	let cell5 = newRow.insertCell(4);
	let cell6 = newRow.insertCell(5);
	let cell7 = newRow.insertCell(6);
	let cell8 = newRow.insertCell(7);
	let cell9 = newRow.insertCell(8);
	let cell10 = newRow.insertCell(9);
	let cell11 = newRow.insertCell(10);


	cell1.innerHTML = data.name;
	cell2.innerHTML = data.dob;
	cell3.innerHTML = data.email;
	cell4.innerHTML = data.streetAddressCity;
	cell5.innerHTML = data.stateSelect;
	cell6.innerHTML = data.zip;
	cell7.innerHTML = data.numberOfPeople;
	cell8.innerHTML = data.moveInDate;
	cell9.innerHTML = data.smoke;
	cell10.innerHTML = data.pets;
	cell11.innerHTML = data.eviction;



}

reset = () => {
	document.getElementById('name').value = '';
	document.getElementById('dob').value = '';
	document.getElementById('email').value = '';
	document.getElementById('streetAddressCity').value = '';
	document.getElementById('stateSelect').value = '';
	document.getElementById('zip').value = '';
	document.getElementById('numberOfPeople').value = '';
	document.getElementById('moveInDate').value = '';
}