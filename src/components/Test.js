import React, {useState, useEffect} from 'react';


const DATA = "http://localhost:3000/dieta.json";


const Test = (props) => {

    const [meals, setMeals] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(
        () => {
            console.log('fetchujemy');
            fetch(DATA)
                .then(response => {
                    if (response.ok){
                        return response
                    }
                    throw Error(response.status);
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setMeals(data);
                    setIsLoaded(true);
                })
                .catch(error => console.log(error + " coś poszło nie tak ://"))
        }, []
    )

    if (!isLoaded){
        console.log('Błąd wczytywania');
    }
    const ingredientName = meals.day.meal_0.ingredients.name;
    const ingredientWeight = meals.day.meal_0.ingredients.weight;

    let index = 0;

    const ingredientItem = ingredientName.map(item => (
        <li key={meals.name}>
            {item}, {ingredientWeight[index++]}g
        </li>
    ));


    return(
        <div>
            <p> ---- test test test ---- </p>
            <p> -> Path: {props.name}</p>
            <h2>Składniki na: {isLoaded ? meals.day.day : "błąd..."}</h2>
            <ul>
                {isLoaded ? ingredientItem : null}
            </ul>
        </div>
    );
}

export default Test;