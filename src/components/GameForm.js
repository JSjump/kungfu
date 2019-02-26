import React,{Component} from 'react';

class GameForm extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         title:'',
    //         cover:'',
    //     }
    // }
    state= {
        title:'',
        cover:'',
    }
    handleChange = (e) =>{
         this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit= (e) => {
        e.preventDefault();
    }

    render() {
        return(
            <form className="ui form" onSubmit={this.handleSubmit}>
                <h1>add new game</h1>

                <div className="filed">
                    <label htmlFor="title">title</label>
                    <input
                        type="text"
                       name="title"
                    value={this.state.title}
                    onChange={this.handleChange}/>
                </div>

                <div className="filed">
                    <label htmlFor="cover">cover url</label>
                    <input
                        type="text"
                        name="cover"
                        value={this.state.cover}
                        onChange={this.handleChange}/>
                </div>

                <div className="filed">
                    {this.state.cover !== '' && <img src={this.state.cover} alt="cover" className="ui small bordered image"/> }
                    </div>

                <div className="filed">
                    <button className="ui primary button">save</button>
                </div>
            </form>
        )
    }
}

export default GameForm;
