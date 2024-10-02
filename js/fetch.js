



function userDataLoad(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(json => displayData(json))
   .catch(error => console.log(error))
}

function displayData(json){
  let ul = document.getElementById('ulData')
  for(const userData of json){
    let li = document.createElement('li');
    li.classList.add('bg-green-200', 'border', 'rounded-md' ,'p-5','my-5')
    li.innerHTML = `
     <b>Name : ${userData.name}👨‍🦰</b>
     <p>Email : ${userData.email}</p>
     <i class='bg-yellow-100 '>Adress : ${userData.address.street} <br>
     ${userData.address.suite}<br>
     ${userData.address.zipcode}$</i>
    `
    ul.appendChild(li)
    

  }

  let hidden1 = document.getElementById('hidden')
  hidden1.classList.add('hidden')
  let hidden2 = document.getElementById('hidden1')
  hidden2.classList.remove('hidden')
  console.log(hidden1)
  
  
}


const userPost = () => {
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => userPostDisplay(json))
}

const userPostDisplay = (json) => {
  const div = document.getElementById('postShow')
  for(const post of json){
    let divMake = document.createElement('div')
    divMake.classList.add('bg-slate-100','p-4','rounded-md','shadow','shadow-gray-500','space-y-4','my-4')
    divMake.innerHTML = `
     <button class='bg-green-500 p-2 my-1 rounded-[50%]'>${post.id}</button>
     <h4 class='text-slate-800 font-semibold text-xl'>${post.title}</h4>
     <p class='text-gray-500 font-medium text-sm'>${post.body}</p>
    `
    div.appendChild(divMake)
  }

  let hidden2 = document.getElementById('hidden1')
  hidden2.classList.add('hidden')
  let hidden1 = document.getElementById('hidden')
  hidden1.classList.remove('hidden')
  

   
  
}


