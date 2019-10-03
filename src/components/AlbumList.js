import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import { celineDion } from './celineDionAlbum';
import { albumListStylings } from './AlbumList.style';


class AlbumList extends Component {
  state = { albums: [
  ] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  fetchTaylorSwiftData = () => axios.get('https://rallycoding.herokuapp.com/api/music_albums')
  .then(response => this.setState({ albums: response.data }));

  renderSingersButton = () => (
    <View style={albumListStylings.container} >
       <TouchableOpacity 
       style={albumListStylings.buttonStyle}
       onPress={() => this.setState({ albums: celineDion })}
       >
           <Text style={albumListStylings.textStyle}> Celine Dion </Text>
        </TouchableOpacity>
  
       <TouchableOpacity
       style={albumListStylings.buttonStyle}
       onPress={() => this.fetchTaylorSwiftData()}
       >
          <Text style={albumListStylings.textStyle} > Taylor Swift </Text>
      </TouchableOpacity>
  </View>
    );
  
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }
  
  render() {
    return (
        <ScrollView>
        { this.renderSingersButton() }
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
