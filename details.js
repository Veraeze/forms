const addForms = document.forms['vcontent']

document.addEventListener('submit', (event) =>{
       event.preventDefault();
       const firstName = document.querySelector('#first-name').value;
       const lastName = document.querySelector('#last-name').value;
       const email = document.querySelector('#email').value;
       const password = document.querySelector('#password').value; 

//        const obj = {
//         firstName: firstName,
//         lastName: lastName,
//         age: age
//        }
//        if(e.target.className == 'submit'){
//         console.log(obj)}

// http://www.omdbapi.com/?i=tt3896198&apikey=1d34aae1

const obj = {
        firstName:firstName,
        lastName:lastName, 
        email:email,
        password:password
    }

    console.log(obj)

//     if(e.target.className == 'submit'){
//                 console.log(obj)}

        const sendData = async (data)=>{
        
                try{
                        let url = "http://localhost:3000/api/user/register"
                const response = await  fetch(url, {
                     method: "POST", // or 'PUT'
                     headers: {
                      "Content-Type": "application/json",
                     },
                     body: JSON.stringify(data),
                });
          
                const result = await response.json();
                console.log("Success", result.res.message);
          
        }
        
        catch(error){
                console.log("Error!", error)
        }
          
        };
            
        sendData(obj)
  
});
