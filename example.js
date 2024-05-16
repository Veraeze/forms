function loadDoc(url, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener('readystatechange', function(){
        if(this.readyState == 4 && this.status == 200){
            const data = JSON.parse(xhttp.responseText);
            callback(undefined, data);
        }else if(this.readyState === 4){
            callback("Error fetching data", undefined);
        }
    })
    xhttp.open("GET", url);
    xhttp.send();
    }

    loadDoc("https://dummyjson.com/products", (err, data) => {
        console.log("Products loaded");
        if(err) console.log("error: ", err);
        else console.log("data: ", data);
        loadDoc("https://dummyjson.com/users", (err, data) => {
            console.log("Users loaded");
            if(err) console.log("error: ", err);
            else console.log("data: ", data);
            loadDoc("https://dummyjson.com/quotes", (err, data) => {
                console.log("Quotes loaded");
                if(err) console.log("error: ", err);
                else console.log("data: ", data);
            });
        });
    }); 