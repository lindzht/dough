import {useState,  useEffect} from 'react'
import CategoriesForm from "./CategoriesForm";
import { Button } from 'semantic-ui-react'

function Categories({setErrors, errors}){

    const [categories, setCategories] = useState([]);
    const [displayForms, setDisplayForms] = useState(false);

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
      }, []);

    //   const renderCategories = () => {
    //     categories.map((category,index) => {
    //       return <p key={index}>{category} </p> 
    //     })
    //   }

    const handleDisplayForm = () => {
        setDisplayForms(!displayForms)
    }

    return(
       <div id="category-container">
            {/* {renderCategories} */}
            <h3>Here's a summary of your categories!</h3>
            <Button onClick={handleDisplayForm}>Add New Category</Button>
            {displayForms ? <CategoriesForm setErrors={setErrors} errors={errors} /> : null}

       </div>
    )
}

export default Categories;