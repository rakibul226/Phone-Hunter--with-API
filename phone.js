const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
   displayPhones(phones);
}


const displayPhones = phones => {
       // console.log(phones);
     // Step 1 : get the  div container
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent ='';

    //display show all button if there are more than 12 photos
    const showAllContainer = document.getElementById('show-all-container');
        if(phones.length > 12){
            showAllContainer.classList.remove('hidden')
        }
        else{
            showAllContainer.classList.add('hidden')
        }

    //display only first 12
    phones = phones.slice(0,12);

    phones.forEach(phone =>{
        
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
                  <div class="card-actions justify-center mt-7 ">
                    <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
                  </div>
                </div>
        `
        phoneContainer.appendChild(phoneCard)
         // Step 4 : append child 
    });

    //hide loading spinner
    toggleLoadingSpinner(false);
}



const handleShowDetail = (id) =>{
    console.log(id);
}



const handleSearch = () =>{
    toggleLoadingSpinner(true); //loading-spinner
    const searchField = document.getElementById('search-field');
    const searchText =  searchField.value;
    // console.log(searchText);
    loadPhone(searchText)
}

//loading spinner
const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}


// loadPhone();