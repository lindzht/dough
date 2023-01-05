import {useState,  useEffect} from 'react'
import CategoriesForm from "./CategoriesForm";
import { List, Icon, Button, Label, Menu, Tab, Form, Input, Container} from 'semantic-ui-react'
import CategoryListItem from './CategoryListItem';

function Categories({setErrors, errors, categories, setNewCategories, newCategory, setNewCategory}){

    const [displayForms, setDisplayForms] = useState(false);
    const [updatedCategories, setUpdatedCategories] = useState(categories);


    const funSubCategories = categories.map((c) => {
      if (c.cat_type === "Fun"){
        return (
          <CategoryListItem categories={categories} setUpdatedCategories={setUpdatedCategories} category={c}/>
        );
      }
    });

    const necSubCategories = categories.map((c) => {
      if (c.cat_type === "Necessary"){
        return (
          <CategoryListItem categories={categories} setUpdatedCategories={setUpdatedCategories} category={c}/>
        );
      }
    });

    const savSubCategories = categories.map((c) => {
      if (c.cat_type === "Savings"){
        return (
          <CategoryListItem categories={categories} setUpdatedCategories={setUpdatedCategories} category={c}/>
        );
      }
    });

    const funFilter = categories.filter((c) => {if (c.cat_type === "Fun") {return (c)}})
    const necFilter = categories.filter((c) => {if (c.cat_type === "Necessary") {return (c)}})
    const savFilter = categories.filter((c) => {if (c.cat_type === "Savings") {return (c)}})
    

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
            Add New Subcategory
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




// import {useState,  useEffect} from 'react'
// import CategoriesForm from "./CategoriesForm";
// import { Card, Icon, Button, Grid, Segment, Header} from 'semantic-ui-react'

// function Categories({setErrors, errors}){

//     const [categories, setCategories] = useState([]);
//     const [displayForms, setDisplayForms] = useState(false);
//     const [newCategory, setNewCategory] = useState({
//       category_name: "",
//       cat_type: ""
//   })

//     useEffect(() => {
//         fetch("/categories")
//         .then(res => {
//           if(res.ok){
//             res.json()
//             .then(data => {
//               setCategories(data)  
//             })
//           }
//         })
//       }, [newCategory]);


//     const handleUpdate = ()=> {
      
//     }

//     const handleDisplayForm = () => {
//         setDisplayForms(!displayForms)
//     }

//     const funSubCategories = categories.map((c) => {
//       if (c.cat_type === "Fun"){
//         return (
//           <Header as='h5' key={c.id}>
//             {c.category_name} <Icon name='pencil'/> <Icon className="icon" name='delete' />
//           </Header>
//         );
//       }
//     });

//     const necSubCategories = categories.map((c) => {
//       if (c.cat_type === "Necessary"){
//         return (
//           <Header as='h5' key={c.id}>
//             {c.category_name} <Icon name='pencil' /> <Icon name='delete' />
//           </Header>
//         );
//       }
//     });

//     const savSubCategories = categories.map((c) => {
//       if (c.cat_type === "Savings"){
//         return (
//           <Header as='h5' key={c.id}>
//             {c.category_name} <Icon name='pencil' /> <Icon name='delete' />
//           </Header>
//         );
//       }
//     });



//     return(
//        <div id="category-container">

//             <Button onClick={handleDisplayForm}>Add New Subcategory</Button>
//             {displayForms ? <CategoriesForm handleDisplayForm={handleDisplayForm} setErrors={setErrors} errors={errors} newCategory={newCategory} setNewCategory={setNewCategory}/> : null}


//             <h3>Here's a summary of your categories!</h3>
//             <div id='category-grid'>
//               <Grid columns='equal'>
//                 <Grid.Column>
//                     <Segment>
//                       <Header as='h2'>
//                           <Icon name='glass martini' />
//                           <Header.Content>Fun</Header.Content>
//                           {funSubCategories}
//                       </Header>
//                     </Segment>
//                 </Grid.Column>

//                 <Grid.Column >
//                     <Segment>
//                       <Header as='h2'>
//                           <Icon name='glass martini' />
//                           <Header.Content>Necessary</Header.Content>
//                           {necSubCategories}
//                       </Header>
//                     </Segment>
//                 </Grid.Column>
                
//                 <Grid.Column >
//                     <Segment>
//                       <Header as='h2'>
//                           <Icon name='glass martini' />
//                           <Header.Content>Savings</Header.Content>
//                           {savSubCategories}
//                       </Header>
//                     </Segment>
//                 </Grid.Column>
//               </Grid>

//             </div>
           


           

//        </div>
//     )
// }

// export default Categories;