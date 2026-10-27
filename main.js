fetch('https://reqres.in/api/users')
     .then(function(response){
        return response.json()
     .then(function(users){
        users.data.map(function(user){
            console.log(user['first_name']);
            
        })
     })
     })