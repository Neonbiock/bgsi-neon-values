function addPet() {
  let petName = document.getElementById('petName').value;
  let petType = document.getElementById('petType').value;
  let petVariant = document.getElementById('petVariant').value;
  let petValue = document.getElementById('petValue').value;
  let petDemand = document.getElementById('petDemand').value;

  if (petName && petType && petVariant && petValue && petDemand) {
    let petCard = `
      <div class="pet-card" data-type="${petType}" data-variant="${petVariant}">
        <div class="pet-name">${petName}</div>
        <div class="pet-value">Value: ${petValue}</div>
        <div class="pet-demand">Demand: ${petDemand}</div>
        <div class="pet-updated">Last Updated: ${new Date().toLocaleDateString()}</div>
      </div>
    `;
    document.getElementById('currentPets').innerHTML += petCard;
    
    clearForm();
  } else {
    alert('Please fill all fields.');
  }
}

function clearForm() {
  document.getElementById('petName').value = '';
  document.getElementById('petType').value = '';
  document.getElementById('petVariant').value = '';
  document.getElementById('petValue').value = '';
  document.getElementById('petDemand').value = '';
}
