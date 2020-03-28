import React from 'react';
import {
  asset,
  AppRegistry,
  NativeModules,
  StyleSheet,
  Text,
  View,
  VrButton,
  Sound,
  Model,
  PointLight,
  AmbientLight,
} from 'react-360';
import Entity from 'Entity';
import Button from './button';
export default class vrproj extends React.Component {


  render() {
    return (
      <View >
        <pano source={asset('ssh0lk9-360-panorama-lands-end.jpg')}>
          <Sound
            volume={0.1}
            loop={true}
            source={{ mp3: asset('instantCrush.mp3') }} /></pano>
      </View >
    );
  }
};
export class vrproj2 extends React.Component {
  state = {
    count: 0,
  };
  _incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <View style={styles.panel}>
        <VrButton
          onClick={this._incrementCount}
          style={styles.greetingBox}>
          <Text style={styles.greeting}>
            'Hi, I am Avinash. You have visited me {this.state.count} times'
              </Text>
        </VrButton>
      </View >
    );
  }
};
export class objectsadder extends React.Component {
  constructor() {
    super();

    this.state = {
      rotation: -50,
      zoom: -270,
    };
    this.lastUpdate = Date.now();
    this.rotate = this.rotate.bind(this);
  }

  componentDidMount() {
    this.rotate();
  }

  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle);
      this.frameHandle = null;
    }
  }

  rotate() {
    const now = Date.now();
    const delta = now - this.lastUpdate;
    this.lastUpdate = now;

    this.setState({
      rotation: this.state.rotation + delta / 50
    });
    this.frameHandle = requestAnimationFrame(this.rotate);
  }

  render() {
    return (
      <View>
        <AmbientLight intensity={40} />
        <PointLight distance={10} style={{ color: 'white' }} />
        <View style={styles.menu}>
          <Button text='+'
            callback={() => this.setState((prevState) => ({ zoom: prevState.zoom + 10 }))} />
          <Button text='-'
            callback={() => this.setState((prevState) => ({ zoom: prevState.zoom - 10 }))} />
        </View>
        <View>
          <Entity
            source={{
              obj: asset('CHAIRSET.obj'),
              mtl: asset('CHAIRSET.mtl'),
            }}
            style={{
              transform: [
                { translate: [-220, 0, this.state.zoom] },
                { rotateY: this.state.rotation },
                { rotateX: 5 },
                { scaleX: 35 },
                { scaleY: 35 },
                { scaleZ: 35 },
              ]
            }}
          /><Entity
            source={{
              obj: asset('CHAIRSET.obj'),
              mtl: asset('CHAIRSET.mtl'),
            }}
            style={{
              transform: [
                { translate: [220, 0, this.state.zoom] },
                { rotateY: -this.state.rotation },
                { rotateX: 5 },
                { scaleX: 35 },
                { scaleY: 35 },
                { scaleZ: 35 },
              ]
            }}
          /></View></View>
    )
  }
}
export class greenplane extends React.Component {
  render() {
    return (
      <View>
        <View style={{
          width: 200,
          height: 200,
          backgroundColor: 'green',
          transform: [
            { rotateX: 90 },
            { translateX: -100 },
          ]
        }}>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 800,
    height: 500,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translate: [100, 0, 0] }],
  },
  greetingBox: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderColor: '#639dda',
    borderWidth: 2,
    height: 120,
  },
  greeting: {
    fontSize: 30,
  },
  menu: {
    flex: 1,
    flexDirection: 'column',
    width: 1,
    alignItems: 'stretch',
    transform: [{ translate: [3, 2, -5] }],
  },
});

AppRegistry.registerComponent('vrproj', () => vrproj);
AppRegistry.registerComponent('vrproj2', () => vrproj2);
AppRegistry.registerComponent('objectsadder', () => objectsadder);
AppRegistry.registerComponent('greenplane', () => greenplane);
