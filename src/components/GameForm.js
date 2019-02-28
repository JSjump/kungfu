import React,{Component} from 'react';
import classnames from 'classnames';


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
        errors: {},
    }
    handleChange = (e) =>{
        if(!!this.state.errors[e.target.name]){
            let errors = Object.assign({},this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]:e.target.value,
                errors
            });
        }else{
            this.setState({[e.target.name]:e.target.value});
        }
    }
    handleSubmit= (e) => {
        e.preventDefault();
        let errors = {};
        if(!this.state.title)errors.title='Can`t be empty';
        if(!this.state.cover)errors.cover='Can not be empty';
        this.setState({
            errors
        })
    }

    render() {
        return(
            <form className="ui form" onSubmit={this.handleSubmit}>
                <h1>add new game</h1>

                <div className={classnames('filed',{error:!!this.state.errors.title})}>
                    <label htmlFor="title">title</label>
                    <input
                        type="text"
                       name="title"
                    value={this.state.title}
                    onChange={this.handleChange}/>
                    <span>{this.state.errors.title}</span>
                </div>

                <div className={classnames('filed',{error:!!this.state.errors.cover})}>
                    <label htmlFor="cover">cover url</label>
                    <input
                        type="text"
                        name="cover"
                        value={this.state.cover}
                        onChange={this.handleChange}/>
                    <span>{this.state.errors.cover}</span>
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
