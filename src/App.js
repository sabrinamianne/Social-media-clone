import React from 'react';
import Home from './components/Home';
import './App.css';
import Footer from './components/Footer';
import {Switch, Route } from 'react-router-dom';
import Messages from './components/Messages';
import Header from './components/Header';
import MessageForm from './components/MessageForm';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterMessageList: []
    };
    this.handleAddingNewMessageToList = this.handleAddingNewMessageToList.bind(this);
  }

    handleAddingNewMessageToList(newPost){
      var newMasterMessageList = this.state.masterMessageList.slice();
      newMasterMessageList.push(newPost);
      this.setState({masterMessageList: newMasterMessageList});
    }

    render(){
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path= '/' component={Home} />
      <Route path='/messages' render={()=><Messages messages={this.state.masterMessageList} />} />
      <Route path='/newmessage' render={()=><MessageForm onNewCreation={this.handleAddingNewMessageToList} />} />
    
    </Switch>
    <Footer/>
    </div>
  );
}
}

export default App;
