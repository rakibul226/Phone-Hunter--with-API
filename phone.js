const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    console.log(phones);
   displayPhones(phones);
}


const displayPhones = phones => {
    // console.log(phones);
     // Step 1 : get the  div container
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent ='';

    phones.forEach(phone =>{
        // console.log(phone);

        // Step 2 : create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList =`card p-4 bg-gray-100 shadow-xl m-6`;
         // Step 3 : set innerHtml
        phoneCard.innerHTML=`
        
        <figure><img src= "${phone.image}" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${phone.phone_name}</h2>
                  <h3 class="card-title">${phone.brand}</h3>
                  <p>${phone.slug}</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
        `
        phoneContainer.appendChild(phoneCard)
         // Step 4 : append child 
    })
}


const handleSearch = () =>{
    const searchField = document.getElementById('search-field');
    const searchText =  searchField.value;
    console.log(searchText);
    loadPhone(searchText)
}



loadPhone();