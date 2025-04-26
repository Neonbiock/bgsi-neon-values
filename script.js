function searchPets() {
  let input = document.getElementById('searchBar').value.toLowerCase();
  let petCards = document.getElementsByClassName('pet-card');

  for (let i = 0; i < petCards.length; i++) {
    let name = petCards[i].getElementsByClassName('pet-name')[0].innerText.toLowerCase();
    if (name.includes(input)) {
      petCards[i].style.display = "";
    } else {
      petCards[i].style.display = "none";
    }
  }
}

function filterPets(type) {
  let petCards = document.getElementsByClassName('pet-card');
  for (let i = 0; i < petCards.length; i++) {
    let petType = petCards[i].getAttribute('data-type');
    if (type === 'All' || petType === type) {
      petCards[i].style.display = "";
    } else {
      petCards[i].style.display = "none";
    }
  }

  let tablinks = document.getElementsByClassName('tablink');
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('active');
  }
  event.target.classList.add('active');
}

function filterVariant(variant) {
  let petCards = document.getElementsByClassName('pet-card');
  for (let i = 0; i < petCards.length; i++) {
    let petVariant = petCards[i].getAttribute('data-variant');
    if (variant === 'Normal' || petVariant === variant) {
      petCards[i].style.display = "";
    } else {
      petCards[i].style.display = "none";
    }
  }

  let variantlinks = document.getElementsByClassName('variantlink');
  for (let i = 0; i < variantlinks.length; i++) {
    variantlinks[i].classList.remove('active');
  }
  event.target.classList.add('active');
}

function openCalculator() {
  window.location.href = "calculator.html"; // or wherever you set the calculator page later
}
