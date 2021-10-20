import React, { Component } from 'react';

class Create extends Component {
    constructor() {
        super();
        // binding the functions to add movies
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        this.state = {
            Title:'',
            Year: '',
            Poster: ''
        }
    }
    
    // alert pop up of data once added 
    handleSubmit(event) {
        alert('Movie Name: ' + this.state.Title + 
        '  Movie Year: ' + this.state.Year + 
        '  Movie Poster: ' + this.state.Poster);

        event.preventDefault();
        // set all fields blank
        this.setState({
            Title:'',
            Year: '',
            Poster: ''
        })
    }

    // update/add data 
    onChangeMovieName(event){
        this.setState({
            Title:event.target.value
        })
    }

    // update/add data 
    onChangeMovieYear(event){
        this.setState({
            Year:event.target.value
        })
    }

    // update/add data 
    onChangeMoviePoster(event){
        this.setState({
            Poster:event.target.value
        })
    }


    // text fields for each heading (title, year, poster)
    render() {
        return (
            <div>
                <h1>This is my Create Component!</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Add Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeMovieName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeMovieYear}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Movie Poster: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeMoviePoster}
                        />
                    </div>

                    <div>
                        <input type="submit"
                            value="Add Movie"
                            className="btn btn-primary">
                        </input>
                    </div>

                </form>

            </div>
        );
    }
}
export default Create;