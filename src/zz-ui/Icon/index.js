import React,{Component} from 'react'
import PropTypes from 'prop-types'
class Icon extends Component{
    static propTypes = {
        name: PropTypes.string
    };

    static defaultProps = {
        name:'aaa'
    };

    render() {
        return(
            <div>
                icon
            </div>
        )
    }
}

export default Icon