import React from 'react';
import { Grid, Container } from '@material-ui/core';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import Navbar from './components/Navbar';
import youtube from './api/youtube';

class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount = async () => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBVKoNTCpGbRDtF9Qzy2fLcAiT7adrUm2I',
        q: 'iftikhar khan'
      }
    });

    console.log(response.data.items);

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBVKoNTCpGbRDtF9Qzy2fLcAiT7adrUm2I',
        q: searchTerm
      }
    });

    console.log(response.data.items);

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return(
      <React.Fragment>
        <Navbar onFormSubmit={this.handleSubmit} />
        <Container>
          <Grid justify="center" container spacing={10}>
            <Grid item xs={12}>
              <Grid container spacing={10}>
                <Grid item xs={12}>
                  {/* <SearchBar onFormSubmit={this.handleSubmit} /> */}
                </Grid>
                <Grid  item xs={8} style={{paddingTop: '0px'}}>
                  <VideoDetail video={this.state.selectedVideo} />
                </Grid>
                <Grid item xs={4} style={{paddingTop: '0px'}}>
                  <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}


export default App;
