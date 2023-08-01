let data = [];


function displayData(){
  const dataRows = document.getElementById("dataRows")
  dataRows.innerHTML="";

  data.forEach((record, index) => {
    const row = `
    <tr>
      <td>${record.firstName}</td>
      <td>${record.lastName}</td>
      <td>${record.address}</td>
      <td>${record.state}</td>
      <td>${record.country}</td>
      <td>${record.pincode}</td>
    </tr>
    `
    dataRows.insertAdjacentHTML("beforeend", row);
  })
}

function handleFormSubmit(event){
  event.preventDefault();

  const firstNameInput = document.getElementById("FirstName");
  const lastNameInput = document.getElementById("lastName");
  const addressInput = document.getElementById("address");
  const stateNameInput = document.getElementById("state");
  const countryNameInput = document.getElementById("country");
  const pincodeInput = document.getElementById("pincode");
 
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const address = addressInput.value.trim();
  const state = stateNameInput.value.trim();
  const country = countryNameInput.value.trim();
  const pincode = parseInt(pincodeInput.value.trim());
  

  if(firstName === "" || lastName === "" || address === "" || state === "" || country === "" || isNaN(pincode)){
    alert("please fill all fields correctly");
    return;
  }
  data.push({ firstName, lastName, address, state, country, pincode });

  firstNameInput.value ="";
  lastNameInput.value= "";
  addressInput.value ="";
  stateNameInput.value="";
  countryNameInput.value="";
  pincodeInput.value="";

  displayData();
}

  document
  .getElementById("crudForm")
  .addEventListener("submit",handleFormSubmit);

  displayData()