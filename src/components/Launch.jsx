import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Launch extends Component {

  constructor() {
		super();
		this.state = {
			show: true,
		};
	}	
	
	toggle() {
		this.setState({
			show: !this.state.show
		});
	}
		
  render() {
    let launch = this.props.launch;
    let rocket_images = []

    if (launch.links.flickr_images.length > 0){

      rocket_images.push(<p>Images: </p>);

      for(let i = 0; i < launch.links.flickr_images.length; i++){
        rocket_images.push(<img src={launch.links.flickr_images[i]}/>)
      }
    } else {
      rocket_images.push(<p>No Images Available</p>)
    }

    let show = {
			display: this.state.show ? "block" : "none"
		};
		
	  let hide = {
			display: this.state.show ? "none" : "block"
    }

    return (
      <div class="card">
        <span style={ show } class="mission-title" onClick={ this.toggle.bind(this) }>
          <h1>Mission: { launch.mission_name }</h1>
        </span>
        <span style={ hide } onClick={ this.toggle.bind(this) }>
          <h2>Mission: { launch.mission_name }</h2>
          <ul>
          <li>Year Launched:  { launch.launch_year }</li>
          <li>Rocket Name: { launch.rocket.rocket_name }</li>
          <li>Rocket I.D. { launch.rocket.rocket_id }</li>
          <li>Rocket Type: { launch.rocket.rocket_type }</li>
          <li>Launch Site: { launch.launch_site.site_name_long }</li>
          <li>Other Details: { launch.details }</li>
          </ul>
            { rocket_images } 
        </span>
      </div>
    );
  }
}

export default Launch;