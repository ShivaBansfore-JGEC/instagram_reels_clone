import logo from './logo.svg';
import './App.css';
import SignUp  from './Components/SignUp';
import AuthProvider from './Context/AuthProvider';
import Main from './MetarialUI/Main'
function App() {
  return (
    
      // <AuthProvider>
      //   <SignUp/>
      // </AuthProvider>
      <Main/>
      
  );
}

export default App;
