const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);  

const header1  = React.createElement('h4',{id :' header1'},"Header 1");

const header2  = React.createElement('h4',{id: 'header2'},"Header 2")

// passing React Element into the root of the application using render funcion
root.render(React.createElement('h1',{}, [header1,header2]));  