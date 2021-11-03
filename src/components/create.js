import React, { Component } from 'react';
import axios from 'axios'; // allows to talk http

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
    
    handleSubmit(event) {
        // Output movie data
        alert('Movie Name: ' + this.state.Title + 
        '  Movie Year: ' + this.state.Year + 
        '  Movie Poster: ' + this.state.Poster);

        const NewMovie = {
            Title:this.state.Title,
            Year:this.state.Year,
            Poster:this.state.Poster
        }
        // URl and what is being sent
        axios.post('http://localhost:4000/api/movies', NewMovie)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })

        //Stop handleSubmit refreshing page (return value as blank)
        event.preventDefault();
        // Removes values left in input boxes (doesn't reset values to default)
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