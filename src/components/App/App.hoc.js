import { connect } from 'react-redux';

import App from './App';

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, null)(App);