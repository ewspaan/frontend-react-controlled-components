import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {
    const [nameValue, setNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState('');
    const [selectBoxValue, setSelectBoxValue] = React.useState('Anders');
    const [textAreaValue, setTextAreaValue] = React.useState('');


    const handleSubmit = event => {
        console.log("Naam--> ", nameValue)
        console.log("Leeftijd--> ", ageValue)
        console.log("Select--> ", selectBoxValue)
        console.log("Tex--> ", textAreaValue)
        event.preventDefault();
    };



    return (
      <>
    <main>
        <form onSubmit={handleSubmit}>
            <h1>Gegevens</h1>

            <label htmlFor="naam">Naam:</label>
            <input
                type="text"
                name="name"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
            />

            <label htmlFor="age">Leeftijd:</label>
            <input
                type="number"
                name="age"
                value={ageValue}
                onChange={(e) => setAgeValue(e.target.value)}
            />
            <h1>Jouw review</h1>

            <label htmlFor="foundWhere">Hoe heb je dit recept gevonden?</label>
            <select name="foundWhere" onChange={(e) =>
                setSelectBoxValue(e.target.value)}>

                <option value="Anders">Anders</option>
                <option value="Google">Google</option>
                <option value="Vriend">Vriend</option>
                <option value="Advertentie">Advertentie</option>
            </select>

            <label htmlFor="note">Opmerkingen:</label>
            <textarea id="note" name="note" rows="4" cols="50"
                      onChange={(e) => setTextAreaValue(e.target.value)}
                      placeholder= "Wat vond je van het recept?">
                    </textarea>
            <input type="submit" value="Versturen"/>

        </form>
    </main>
          </>
  );
}

export default App;
