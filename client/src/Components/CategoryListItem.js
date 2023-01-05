import {useState} from 'react'
import { List, Icon, Button, Form, Input} from 'semantic-ui-react'


function CategoryListItem ({category, setUpdatedCategories, categories}) {
    
    const [displayForms, setDisplayForms] = useState(false);
    const [updateCategory, setUpdateCategory] = useState({category_name: category.category_name});

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
                res.json().then(data => {setUpdatedCategories([...categories, data])})
            } 
            else {
                res.json().then(console.log("no good"))
            }
        })   
      }

      const handleDeleteCategorySubmit = () => {  
            const name = updateCategory.category_name;
            console.log(name)
            // fetch(`/categories/${name}`, {
            //   method: "DELETE",
            // })
            //   .then((r) => r.json())
            //   .then((newData) => console.log("worked", newData));
        }

    return (
        <>
        { displayForms ? 
        <List divided verticalAlign='middle' key={category.id}>
            <List.Item>
                <List.Content floated ='right'>
                <Button onClick={displayEditInput}><Icon name='pencil'/>Edit</Button>
                <Button onClick={handleDeleteCategorySubmit}><Icon name='trash alternate' /></Button>
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
                <Button><Icon name='trash alternate' /></Button>
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