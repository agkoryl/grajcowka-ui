import { connect } from 'react-redux';

import Search from './Search';
import { setFilters, clearFilters } from '../../store/actions/filters';

const mapDispatchToProps = (dispatch) => ({
    setFilters: (filters) => dispatch(setFilters(filters)),
    clearFilters: () => dispatch(clearFilters())
})



export default connect(null, mapDispatchToProps)(Search);