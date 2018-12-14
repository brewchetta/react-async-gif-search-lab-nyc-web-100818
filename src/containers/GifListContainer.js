import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
const URL = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=g&q='

export default class GifListContainer extends React.Component {

  state = {
    searchTerm: '',
    gifData: []
  }

  handleChange = event => this.setState({ searchTerm: event.target.value })

  handleSubmit = event => {
    event.preventDefault()
    console.log(URL + this.state.searchTerm)
    fetch(URL + this.state.searchTerm).then(r=>r.json()).then(r=> {
      console.log('Got back', r.data)
      this.setState({ gifData: r.data })
    })
  }

  render() {
    return (
      <React.Fragment>
        <GifSearch searchTerm={this.state.searchTerm} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <GifList gifData={this.state.gifData} />
      </React.Fragment>
    )
  }
}
