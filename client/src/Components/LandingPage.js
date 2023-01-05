import { Divider, Header, Button, Container, Image, Segment, Grid } from 'semantic-ui-react';
import LoginForm from './LoginForm';
import DoughLine from '../images/DoughLine.png';
import DoughDoughnut from '../images/DoughDoughnut.png';
import DoughArc from '../images/DoughArc.png';
import { Link } from 'react-router-dom';



function LandingPage ({currentUser, displayForms, handleDisplayForm, setCurrentUser, setErrors, errors}){

    const LoginOrSignup = () => {
        return (
            <Container>
                <Segment>
                    <Grid columns={2} relaxed="very" stackable>
                        <Grid.Column>
                            <Link to="/login">
                                <Button content="Signup you Doingus!" icon="signup"/>
                            </Link>
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle">
                            <Link to="/login">
                                <Button>Go fucking login!</Button>
                            </Link>
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>Or</Divider>
                </Segment>
            </Container>
        )
    }

    return (
        <div className="App">
            <h1>Welcome to</h1>
            <div id="LandingLogo">
                <Image src={DoughArc} size='huge'/>
            </div>
            <div id="LandingLogo">
            <Image src={DoughDoughnut} size='large'/>
            </div>
            <h1>SUP {currentUser? currentUser.username : "STRANGER"}</h1>
            <Container>
                <h3>Dough is a budgetting app that helps you keep track of your expenses month to month. We base our budget formula off of the 50/30/20 Model. Not familiar with the 50/30/20 Model, <a href="https://www.britannica.com/money/what-is-the-50-30-20-rule">well check this out!</a></h3>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere sagittis sem, imperdiet dictum ipsum accumsan tristique. Donec egestas elit eu efficitur ullamcorper. Curabitur imperdiet dui quis tincidunt pretium. Etiam scelerisque sapien tortor, et condimentum ex semper ut. Duis non velit vel nisi accumsan efficitur vel vitae enim. Donec sit amet justo at ex rhoncus tincidunt. Fusce pretium eu nunc sed tristique. Sed efficitur congue libero, at dapibus dui dapibus nec. Donec porta est vel lectus luctus imperdiet. Proin blandit dolor at orci pharetra volutpat sit amet vitae mi. Phasellus nec scelerisque est, eu ultrices turpis. Ut ac nisi id ante aliquet posuere cursus vel tellus. Proin mattis, nulla feugiat lobortis posuere, dolor quam convallis lacus, eget feugiat nisl sapien nec quam. Etiam malesuada sem augue, sed pretium nisi mattis et. Duis ac quam non justo rutrum cursus. Maecenas augue diam, porta eu luctus ut, tristique quis elit.</p>
                {/* <h3> Basic home stuff is here! </h3> */}
            </Container>  
            <br/>  

            <div> 
                <Header>You from around these parts?</Header>  
                {/* {!currentUser ? <Link to="/login"><Button>Go fucking login!</Button></Link> : <h4>Oh shit you're logged! Let's redirect you to other components somehow</h4> } */}
                {!currentUser ? <LoginOrSignup/> : <Link to="/dashboard"><Button>Get me to my details!</Button></Link> }
                {displayForms ? <LoginForm handleDisplayForm={handleDisplayForm} setCurrentUser={setCurrentUser} setErrors={setErrors} errors={errors}/> : null }
            </div>
            <br/>
      </div>
    )
}

export default LandingPage;