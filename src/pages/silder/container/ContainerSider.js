import { connect } from 'react-redux';
import Siders from '../components/UiSider';
import { openSubMenu } from '../store/actionCreator';

const mapStateToProps = (state) => {
    const { headerReducer } = state;
    return headerReducer;
};
// const mapDispatchToProps = dispatch => {
//     return {

//     }
// }

export default connect(mapStateToProps, { openSubMenu })(Siders);
