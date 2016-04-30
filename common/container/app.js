import { connect } from 'react-redux';
import Items from '../component/items';

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Items);
