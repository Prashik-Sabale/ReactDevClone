import './Sidebar.css';
import Tab from './Tab';

function Sidebar(props) {
    return(
        <>
            <div className="sidebar">
                <Tab title="Quick Start" index="0" handleClick={props.handleClick}/>
                <Tab title="Thinking in React" index="1" handleClick={props.handleClick}/>
                <Tab title="Installation" index="2" handleClick={props.handleClick}/>
                <Tab title="Create Project" index="3" handleClick={props.handleClick}/>
                
            </div>
        </>
    );
}

export default Sidebar;