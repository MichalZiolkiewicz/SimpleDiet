import React from 'react';


const NewMeal = () => {
    return(
        <div style={{padding: "10px 0"}}>
            <h2 style={{borderTop: "2px solid black", display: "inline-block", padding: "10px"}}>Dodaj nowy posiłek</h2>
            <form>
                <div>
                    <label>
                        Dzień - select tag
                        <input type="text"/>
                    </label>
                </div>
                <button>
                    Dodaj do bazy
                </button>

            </form>
        </div>
    );
}

export default NewMeal;