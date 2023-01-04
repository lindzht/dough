import {useState} from 'react';
import { Form, Input, Button, Container, Select } from 'semantic-ui-react';

function CategoriesForm ({setErrors, errors}) {

    const [newCategory, setNewCategory] = useState({
        category_name: "",
        cat_type: ""
    })

    const handleSignup = (e) => {
        console.log(newCategory);
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
                }) 
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
        setNewCategory({
            category_name: "",
            cat_type: "",
        })
    }
    // console.log(errors)

    const handleChange = (e) => { 
        const key = e.target.name;
        const value = e.target.value;

        setNewCategory({
            ...newCategory, 
            [key]: value
        })
    }

    // console.log(newCategory)

    // const options = [
    //     {name: "f", text: "Fun", value: "fun"},
    //     {key: "n", text: "Necessary", value: "necessary"},
    //     {key: "s", text: "Savings", value: "savings"},
    //     {key: "d", text: "Donation", value: "donation"}
    // ]


    return(

        <div id="catform-container">
            <Container> 
                <Form onSubmit={handleSignup}>
                    <Form.Field
                        control={Input}
                        label="Name:"
                        type="name"
                        name="category_name"
                        value={newCategory.category_name}
                        onChange={handleChange}
                    />
                    <Form.Select
                        // fluid
                        control={Input} 
                        label="Category Type:"
                        type="cat_type"
                        name="cat_type"
                        // options={options}
                        placeholder="Fun, Necessary, Donation, Savings, etc."
                        value={newCategory.cat_type}
                        onChange={handleChange}
                    />
                    <Form.Field control={Button}>Submit!</Form.Field>
                    <div id="errors-container">
                        {errors ? 
                        errors.map(e => {
                            return <p key={e}>{e}</p>})
                        : null
                        }
                    </div>
                </Form>
            </Container>
        </div>      
    )
}

export default CategoriesForm;