import React from 'react'
import './WordForm.css'

const WordForm = ({addWord}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const enField = document.querySelector('[name=en');
        const deField = document.querySelector('[name=de');

        const enValue = enField.value;
        const deValue = deField.value;
                    
        enField.value = "";
        deField.value = "";
        
        addWord(enValue, deValue);

    }

    return (
    <div>
        <section className = "card-form">
                <h2>New Card</h2>
                <form action="#" method = "GET" onSubmit = {handleSubmit}>
                    <div className="form-row">
                    <label>
                    English:
                    <input type="text" name="en" placeholder="English"></input>
                    </label>
                </div>
                <div className="form-row">
                    <label>
                    German:
                    <input type="text" name="de" placeholder="German"></input>
                    </label>
                </div>
                <div className="form-row">
                    <button type="submit">Add Word</button>
                </div>
                </form>
        </section>
    </div>
    )

    }
    export default WordForm;