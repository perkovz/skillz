import React, {Component} from 'react';

class Practice extends Component {
    render() {
        const { items } = this.props;
        const itemsList = items.map(item => {
            return (
                <div className="single-item" key={item.id}>
                    <div>{ item.name }</div>
                    <div>{ item.buildYear }</div>
                    <div>{ item.color }</div>
                </div>
            )
        });
        return (
            <div className="items">
                <div>{ itemsList }</div>
            </div>
        )
    }
}

export default Practice;