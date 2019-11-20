import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ErrorMessage from '../errorMessage/errorMessage';
import Spiner from '../spiner/spiner';
import './randomItem.css';

export default class RandomItem extends Component {

    state = {
        item: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateItem();
        this.timerId = setInterval(this.updateItem, 4000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onItemLoaded = (item) => {
        this.setState({item, loading: false})
    }

    onError = (error) => {
        this.setState({
            error: true,
            loading: false
        });
    }

    updateItem = () => {
        let randomIndex = Math.random() * 140 + 25;
        if  (this.props.randomIndex) {
            const { min, max } = this.props.randomIndex;
            randomIndex = min + Math.random() * (max + 1 - min);
        }
        const id = Math.floor(randomIndex);
        const { getItem } = this.props.itemDetails;

        getItem(id)
            .then(this.onItemLoaded)
            .catch(this.onError)
    } 

    render() {
        const { item, loading, error } = this.state,
          { itemType, fields} = this.props.itemDetails; 
            
        if (error) {
            return <ErrorMessage errorNumber={404} errorText={''} />
        }


        const itemFields = [];
        fields.forEach( ({ field, label }, index) => {
            itemFields.push(<Field item={item} key={index} field={field} label={label}/>)
        })

        const content =  (
            <>  
                <h4>Random {itemType}: {item.name}</h4>
                <ListGroup flush>
                    {itemFields}
                </ListGroup>
            </>
        )

        const showContent = loading ? <Spiner /> : content; 

        return (
            <div className="random-block rounded">
                {showContent}
            </div>
        )
    }

}

const Field = ({item, field, label}) => {
    const fieldName = item[field];

    return (
        <>  
            <ListGroupItem className="d-flex justify-content-between">    
                <span className="term">{label}</span>
                <span>{fieldName}</span>
            </ListGroupItem>
        </>
    )
}