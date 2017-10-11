import React from 'react';

class MainPage extends React.Component {

    render() {

        const debaters = this.props.characters.map(( debater, index ) => {
            return <option key={index} > {debater.name} </option>
        })

        return(
            <div> 
                this is the main page
                <select id="choose-team">
                    {debaters}
                </select>
            </div>
        )
    }
}

export default MainPage;