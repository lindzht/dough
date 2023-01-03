import LoginForm from './LoginForm';


function LandingPage ({currentUser, displayForms, handleDisplayForm, setCurrentUser, setErrors, errors}){

    return (
        <div className="App">

            <h1>SUP {currentUser? currentUser.username : "STRANGER"}</h1>
            <h3> Basic home stuff is here! </h3>

            {!currentUser ? <h4>Go fucking login!</h4> : <h4>Oh shit you're logged! Let's redirect you to other components somehow</h4> }
            {displayForms ? <LoginForm handleDisplayForm={handleDisplayForm} setCurrentUser={setCurrentUser} setErrors={setErrors} errors={errors}/> : null }

      </div>
    )
}

export default LandingPage;