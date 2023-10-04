
function submitData (userName , userEmail){
    const data = {
    name: userName,
    email: userEmail,
        
    }
    
   const postObject = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type":"application/json",
            accept:"application/json"
        }
    
    }
    return fetch("http://localhost:3000/users" , postObject)
    .then(function (res) {
        return res.json();
    })
    .then(function(data) {
        document.querySelector("body").textContent = data.id 
    })
    .catch((err) => {
        document.querySelector("body").textContent = err.message;
      });

    }
   
submitData();