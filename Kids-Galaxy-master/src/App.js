import './App.css';
import RequestDemo from './Pages/RequestDemo';
import Login from './Pages/Login'
import PersonalDetails from './Pages/PersonalDetails'
import CreateAccount from './Pages/CreateAccount'
import EducationalDetails from './Pages/EducationalDetails'

function App() {

  return (
    <div className="App">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      {/* <RequestDemo /> */}
      <Login />
      {/* <PersonalDetails /> */}
      {/* <CreateAccount /> */}
      {/* <EducationalDetails /> */}
    </div>
  );
}

export default App;
