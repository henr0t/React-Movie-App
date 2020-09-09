import React from "react";
import "./SearchBar.css"


class SearchBar extends React.Component {

    state ={searchTerm:""};

    onChange = (event) =>{              /*onchange krijgt een event binnen */
        this.setState ({                  /*this.setStage updaten van stage! */
        searchTerm: event.target.value
        });
        }

    onEnter = (event)  =>{
        event.preventDefault();                         /*wordt pagina niet gerefreshed by Enter */
        this.props.filterList(this.state.searchTerm);   /*zoek term wordt meegegeven aan de search */
    }

    render(){
    return (
        <div className="searchBar">
            <form onSubmit={this.onEnter}>     
                <input onChange={this.onChange} type="text" placeholder={this.props.placeholder} />
            </form>
        </div>
    );
}
}

export default SearchBar;