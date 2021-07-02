import React from 'react';
import {connect} from 'react-redux';
import generateBookInfoAction from '../redux/actions/bookgenerateaction';

class BooksPage extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
           
        };

    }

    generateBook(){
        this.props.generateBookInfoDispatch()
    }
    render() {
        return(
          <div className="book-component">
              <button    onClick={
                    () => {this.generateBook()}
                }>Add book</button>
          </div>

        )
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        generateBookInfoDispatch: () => {
            dispatch(generateBookInfoAction)
        }
    }
}

export default connect(null,mapDispatchToProps)(BooksPage);