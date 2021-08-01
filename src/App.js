import './App.css';
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import {Route} from "react-router-dom";
import ContentContainer from "./components/Content/ContentContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">React SPA</header>
            <SidebarContainer/>
            <Route path='/content/:postId'
                   render={() => <ContentContainer/>}/>
            <footer className='footer'>CopyRight 2021</footer>
        </div>
    );
}

export default App;

