import React, { Component } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import Launch from '../components/Launch';

class LaunchesView extends Component {
  componentDidMount() {
    const { dispatch, launchesCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }

  getContent() {
    const { launchCollection } = this.props;

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    let launches = [];
    
    for (let i = 0; i < launchCollection.launches.length; i++) {
      const launch = launchCollection.launches[i];

      launches.push(
        <Launch {...{
          key: launch.launch_id,
          launch
        }} />

      )
    }

    return  <div class="horizontal-scroll">{launches}</div>
  }

  render() {
    return (
      <div>
        <h1>SpaceX Launches</h1>
        {this.getContent()}
      </div>
    );
  }
}

export default ConnectedView(LaunchesView, 'launches');
