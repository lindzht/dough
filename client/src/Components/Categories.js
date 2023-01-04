import {useState,  useEffect} from 'react'
import CategoriesForm from "./CategoriesForm";
import { Button } from 'semantic-ui-react'

function Categories({setErrors, errors}){

    const [categories, setCategories] = useState([]);
    const [displayForms, setDisplayForms] = useState(false);
    const [newCategory, setNewCategory] = useState({
      category_name: "",
      cat_type: ""
  })

    useEffect(() => {
        fetch("/categories-summary")
        .then(res => {
          if(res.ok){
            res.json()
            .then(data => {
              setCategories(data)  
            })
          }
        })
      }, [newCategory]);

    const handleDisplayForm = () => {
        setDisplayForms(!displayForms)
    }

    // console.log(categories);

    const renderCategory = categories.map((c) => {
      return (
        <p key={c} value={c}>
          {c}
        </p>
      );
    });
    

    return(
       <div id="category-container">
            {renderCategory}
            <h3>Here's a summary of your categories!</h3>
            <Button onClick={handleDisplayForm}>Add New Category</Button>
            {displayForms ? <CategoriesForm handleDisplayForm={handleDisplayForm} setErrors={setErrors} errors={errors} newCategory={newCategory} setNewCategory={setNewCategory}/> : null}

       </div>
    )
}

export default Categories;