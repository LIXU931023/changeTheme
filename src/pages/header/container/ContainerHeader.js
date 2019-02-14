import { connect } from 'react-redux';
import Headers from '../components/Headers';
import { changeVaule } from '../store/actionCreator';

const mapStateToProps = (state) => {
    const { headerReducer } = state;
    return headerReducer;
  };
export default connect(mapStateToProps, { changeVaule })(Headers);
