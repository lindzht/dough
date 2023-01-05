import {useState} from 'react'
import { List, Icon, Button, Form, Input} from 'semantic-ui-react'
import Modal from './Modal';


function CategoryListItem ({category, setUpdatedCategories, allCategories}) {
    
    const [displayForms, setDisplayForms] = useState(false);
    const [updateCategory, setUpdateCategory] = useState({category_name: category.category_name});
    const [show, setShow] = useState(false)

    function displayEditInput () {
        setDisplayForms(!displayForms)
      }
  
      const handleChange = (e) => { 
        const key = e.target.name;
        const value = e.target.value;
  
        setUpdateCategory({
            ...updateCategory, 
            [key]: value
        })
      }
  
      const handleEditCategorySubmit = (e) => {
        e.preventDefault();
        displayEditInput();
        fetch(`/categories/${category.category_name}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateCategory),
          })
          .then(res => {
            if(res.ok){
                res.json().then(data => {setUpdatedCategories([...allCategories, data]); console.log(data)} )
            } 
            else {
                res.json().then(console.log("no good"))
            }
        })   
      }

      

      const handleDeleteCategorySubmit = () => {  
        const id = category.id
        fetch(`/categories/${id}`, {
            method: "DELETE"
            })
            .then(res => {
                if(res.ok){
                    res.json().then(data => {
                        setUpdatedCategories(data);   
                    }) 
                } else {
                    res.json().then(console.log("no good"))
                }
            })
        }

        function handleShow () {
            setShow(!show)
        }
          

    return (
        <>
        
        { displayForms ? 
        <List divided verticalAlign='middle' key={category.id}>
            <List.Item>
                <List.Content floated ='right'>
                <Button onClick={displayEditInput}><Icon name='pencil'/>Edit</Button>
                <Button onClick={handleShow}><Icon name='trash alternate' /></Button>
                </List.Content>
                <List.Content>
                    <form onSubmit={handleEditCategorySubmit}>
                        <input
                            id="category_name"
                            name="category_name"
                            value={updateCategory.category_name}
                            onChange={handleChange}
                        />
                        <input className="button" type="submit" />
                    </form>
                </List.Content>
            </List.Item> 
        </List>
        : 
        <List divided verticalAlign='middle' key={category.id}>
            <List.Item>
            <List.Content floated ='right'>
                <Button onClick={displayEditInput} ><Icon name='pencil'/>Edit</Button>
                {show ? <Modal handleDeleteCategorySubmit={handleDeleteCategorySubmit}/> : <Button onClick={handleShow}><Icon name='trash alternate' /></Button> }
            </List.Content>
            <List.Content>
                {category.category_name}
            </List.Content>
            </List.Item> 
        </List>
        }
        </>
      );
}

export default CategoryListItem;