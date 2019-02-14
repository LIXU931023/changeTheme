import React from 'react';

export default class Children extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  static getDerivedStateFromProps(nextProps) {
    if (nextProps) {
      return {
      ...nextProps,
      };
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
      console.log(snapshot);
  // If we have a snapshot value, we've just added new items.
  // Adjust scroll so these new items don't push the old ones out of view.
  // (snapshot here is the value returned from getSnapshotBeforeUpdate)
      if (snapshot !== null) {
          return true;
      }
  }
  getSnapshotBeforeUpdate(prevProps, nextProps) {
    console.log(prevProps === this.props);
    const { count } = nextProps;
    if (count && prevProps.count !== count) {
      return true;
    }
    return null;
  }
  render() {
    console.log('render');
    const { count } = this.props;
    return (
      <div>{count}</div>
    );
  }
}
