import React from 'react';
import PropTypes from 'prop-types';
import Star from './star';

class StarRating extends React.Component {

    static propTypes = {
        totalStars: PropTypes.number
    }

    static defaultProps = {
        totalStars: 5
    }

    constructor(props) {
        super(props)
        this.state = {
            starsSelected: props.starsSelected || 0
        }
        this.change = this.change.bind(this)
    }

    change(starsSelected) {
        this.setState({starsSelected})
    }

    render() {
        const {totalStars} = this.props
        const {starsSelected} = this.state
        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) =>
                    <Star key={i}
                          selected={i<starsSelected}
                          onClick={() => this.change(i+1)}
                    />
                )}
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }

}

export default StarRating;
