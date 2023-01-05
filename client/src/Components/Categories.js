import {useState,  useEffect} from 'react'
import CategoriesForm from "./CategoriesForm";
import { List, Icon, Button, Label, Menu, Tab, Form, Input, Container} from 'semantic-ui-react'
import CategoryListItem from './CategoryListItem';

function Categories({setErrors, errors, newCategory, setNewCategory, allCategories, setCategories, setUpdatedCategories}){


    const funSubCategories = allCategories.map((c) => {
      if (c.cat_type === "Fun"){
        return (
          <CategoryListItem allCategories={allCategories} setUpdatedCategories={setUpdatedCategories} category={c}/>
        );
      }
    });

    const necSubCategories = allCategories.map((c) => {
      if (c.cat_type === "Necessary"){
        return (
          <CategoryListItem allCategories={allCategories} setUpdatedCategories={setUpdatedCategories} category={c}/>
        );
      }
    });

    const savSubCategories = allCategories.map((c) => {
      if (c.cat_type === "Savings"){
        return (
          <CategoryListItem allCategories={allCategories} setUpdatedCategories={setUpdatedCategories} category={c}/>
        );
      }
    });

    const funFilter = allCategories.filter((c) => {if (c.cat_type === "Fun") {return (c)}})
    const necFilter = allCategories.filter((c) => {if (c.cat_type === "Necessary") {return (c)}})
    const savFilter = allCategories.filter((c) => {if (c.cat_type === "Savings") {return (c)}})
    

    const panes = [
      {
        menuItem: (
          <Menu.Item key='Fun'>
            Fun<Label>{funFilter.length}</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane>{funSubCategories}</Tab.Pane>,
      },
      {
        menuItem: (
          <Menu.Item key='necessary'>
            Necessary<Label>{necFilter.length}</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane>{necSubCategories}</Tab.Pane>,
      },
      {
        menuItem: (
          <Menu.Item key='savings'>
            Savings<Label>{savFilter.length}</Label>
          </Menu.Item>
        ),
        render: () => <Tab.Pane>{savSubCategories}</Tab.Pane>,
      },
      {
        menuItem: (
          <Menu.Item key='button'>
            Add New Category
          </Menu.Item>
        ),
        render: () => <Tab.Pane><CategoriesForm setErrors={setErrors} errors={errors} newCategory={newCategory} setNewCategory={setNewCategory}/></Tab.Pane>,
      },
    ]
    


    return(
       <div id="category-container">

            <div id='category-tab'>
              <Tab menu={{ color: "blue", attached: true }} inverted panes={panes} />
            </div>
          

       </div>
    )
}

export default Categories;



