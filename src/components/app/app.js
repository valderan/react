import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CharactersPage from '../pages/charactersPage';
import BooksPage from '../pages/booksPage';
import HousesPage from '../pages/housesPage';
import BooksItem from '../pages/booksItem'
import Slider from '../slider';

import Header from '../header';
import ErrorMessage from '../errorMessage/errorMessage';
import './app.css';

export default class App extends React.Component {

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }
   
    render() {
        
        if (this.state.error) {
            return <ErrorMessage errorNumber={-1} errorText=''/>
        }

        return (
            <Router>
                <div className='app'>
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                     <Switch>   
                        <Route path='/' exact component={Slider} />
                        <Route path='/characters' exact component={CharactersPage}/>
                        <Route path ='/houses' component={HousesPage} />
                        <Route path ='/books' exact component={BooksPage} />
                        <Route path ='/books/:id' render={
                            ({ match }) => {
                                const { id } = match.params;
                                return <BooksItem selectedItem={id}/>
                            }
                        } />
                        <Route path='*' exact component={() => <ErrorMessage errorNumber={404} errorText=''/>} />
                     </Switch>
                     </Container>
                </div>
            </Router>
        );
    }
};
