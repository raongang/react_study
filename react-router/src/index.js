import React from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink, useParams } from 'react-router-dom';
import './index.css';


function Home(){ 
  return ( 
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

var contents = [
  { id : 1, title : 'HTML', description : 'HTML is ...'},
  { id : 2, title : 'JS', description : 'JS is ...'},
  { id : 3, title : 'React' , description : 'React is ...'},
]

function Topic(){
  //hook  
  var params = useParams();
  var topic_id = params.topic_id;

  console.log('params >> ', params);
  console.log('topic_id >> ' , topic_id);

  var selected_topic = { title : 'Sorry', description : 'Not Found'}
  for(var i=0; i < contents.length; i++){
    if(contents[i].id === Number(topic_id)){
        selected_topic = contents[i];
      break; 
    }
  }


  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  )
}


function Topics(){
 
  var lis = []; 
  for(var i=0; i< contents.length; i++){
    lis.push(<li key={contents[i].id}><NavLink to={'/topics/'+ contents[i].id}>{contents[i].title}</NavLink></li>)
  }

  return(
    <div> 
      <h2>Topics</h2>
        <ul>
          {lis}
        </ul>

        <Route path="/topics/:topic_id">
            <Topic></Topic>
        </Route>
    </div>  

  )
}

function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function NotFound(){
  return(
    <div>페이지를 찾을 수 없습니다.</div>
  )
}

function App(){
  return (
    <div>
      
      <h1>React Router DOM Example</h1>

      {/* 
            Link - spa를 구현함에 있어서 동적으로 페이지를 보여주는데 이떄 보여줄때마다 refresh되어서 보여줌. 이를 막아주는게 link.
            NavLink 는 활성화된 class까지 만들어줌.
      */}

      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/topics">topics</NavLink></li>
        <li><NavLink exact to="/contact">contact</NavLink></li>
       </ul>

      {/* 
          정확한 path인식을 위해 exact를 쓰는데 exact 없이 쓰기 위해 switch를 쓰기도 함.
          /를 마지막에 둬야함.  /가 먼저 걸리면 제일 먼저 걸리는 애만 두고 나머지는 버린다.
      
      <Switch>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route exact path="/"><Home></Home></Route>
        <Route paht="/">Not Found</Route>
      </Switch>
      */}

      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route exact path="/contact"><Contact></Contact></Route>
        
        <Route component={ NotFound } />    
      </Switch>

    </div>
  )
}
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));
