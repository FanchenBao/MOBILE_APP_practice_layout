import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class TallRow extends Component {
  render() {
    return (
      <View style={[styles.tallRow, styles.border, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

class ShortRow extends Component {
  render() {
    return (
      <View style={[styles.shortRow, styles.border, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

class WideCol extends Component {
  render() {
    return (
      <View style={[styles.wideCol, styles.border, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

class NarrowCol extends Component {
  render() {
    return (
      <View style={[styles.narrowCol, styles.border, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

class EqualRow extends Component {
  render() {
    return (
      <View style={[styles.equalRow, styles.border, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

export default class MondrianPainting extends Component {
  render() {
    return (
      <View style={[styles.canvas]}>
        <TallRow>
          <NarrowCol>
            <ShortRow />
            <TallRow />
          </NarrowCol>
          <WideCol style={styles.red} />
        </TallRow>
        <ShortRow>
          <NarrowCol style={styles.blue} />
          <WideCol style={styles.flexRow}>
            <WideCol />
            <NarrowCol>
              <EqualRow />
              <EqualRow style={styles.yellow} />
            </NarrowCol>
          </WideCol>
        </ShortRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    flexDirection: 'column',
  },
  tallRow: {
    flex: 3,
    flexDirection: 'row',
  },
  shortRow: {
    flex: 1,
    flexDirection: 'row',
  },
  wideCol: {
    flex: 3,
    flexDirection: 'column',
  },
  narrowCol: {
    flex: 1,
    flexDirection: 'column',
  },
  border: {
    borderColor: 'black',
    borderWidth: 2,
  },
  equalRow: {
    flex: 1,
    flexDirection: 'row',
  },
  flexRow: {
    flexDirection: 'row',
  },
  red: {
    backgroundColor: 'red',
  },
  blue: {
    backgroundColor: 'blue',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
});
