const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data
    displayPhone(phones);
}

const displayPhone = (phones) => {
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = '';
    const show = document.getElementById('show-all-container');


    if (phones.length > 12) {
        show.classList.remove('hidden');

    }
    else {
        show.classList.add('hidden')
    }
    // display 15 phones only
    phones = phones.slice(0, 12);
    phones.forEach(phone => {
        console.log(phone)
        // create a div:
        const cardContainer = document.createElement('div');
        cardContainer.classList = `card  bg-base-100 shadow-xl`
        cardContainer.innerHTML = `
        <figure class = p-6 ><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class=" text-center ">${phone.phone_name}</h2>
        <p class = text-center >If a dog chews shoes whose shoes does he choose?</p>
        <h5 class = text-center>$999</h5>
        <div class="card-actions justify-center">
        <button class="btn btn-primary">Show Details</button>
        </div>

       
       `;
        phoneContainer.appendChild(cardContainer);


    })
    toggleSpinner(false);

}

// search handle

const clickHandler = () => {
    toggleSpinner(true);
    const inputField = document.getElementById('search-field')
    const text = inputField.value;
    inputField.value = '';
    loadPhone(text);

}

const toggleSpinner = (isloading) => {
    const dots = document.getElementById('loading-dots');
    if (isloading) {
        dots.classList.remove('hidden');
    }
    else {
        dots.classList.add('hidden')
    }
}



loadPhone();