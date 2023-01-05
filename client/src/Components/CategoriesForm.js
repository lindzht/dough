import {useEffect, useState} from 'react';
import { Button} from 'semantic-ui-react'


function CategoriesForm ({setErrors, errors, newCategory, setNewCategory}) {

    const handleSignup = (e, form) => {
        e.preventDefault();
        fetch("/categories", {
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(newCategory)
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    console.log(data);
                    setNewCategory(data);
                }) 
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    }

    const handleChange = (e) => { 
        const key = e.target.name;
        const value = e.target.value;
        setNewCategory({
            ...newCategory, 
            [key]: value
        })
    }


    return(

        <div id="catform-container">
                <form onSubmit={handleSignup}>
                    <label>Name</label>
                    <input
                        label="Name:"
                        type="name"
                        name="category_name"
                        value={newCategory.category_name}
                        onChange={handleChange}
                    />
                    <label>Category Type</label>
                    <select name="cat_type" value={newCategory.category_type} onChange={handleChange}>
                        <option value=""></option>
                        <option value="Fun">Fun</option>
                        <option value="Necessary">Necessary</option>
                        <option value="Savings">Savings</option>
                    </select>
                    <br/>      
                    <Button>Submit</Button>
                    <div id="errors-container">
                        {errors ? 
                        errors.map(e => {
                            return <p key={e}>{e}</p>})
                        : null
                        }
                    </div>
                </form>
        </div>      
    )
}

export default CategoriesForm;