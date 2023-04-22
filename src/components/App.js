// create your App component here
import React, {useEffect, useState} from "react";

function App(){
    const [pictureDog, setPictureDog] = useState(null);

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
        setPictureDog(data.message);
    });
}, []);

if (!pictureDog)  
     return <p>Loading...</p>;

    return <img src={pictureDog} alt="A Random Dog"/>;
}

export default App;