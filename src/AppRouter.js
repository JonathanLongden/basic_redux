import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import App from './App';
// import BeerList from './components/BeerList';
// import BeerDetails from './components/BeerDetails';
// import BeerUpdate from './components/BeerUpdate';
//import Login from './Login';
import * as MonsterActions from './actions/ActionsMonster';
import { bindActionCreators } from 'redux';

// App.js only delegates the different routes
class AppRouter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			create: this.props.actions.addMonster,
			read: this.props.actions.Monster,
			update: this.props.actions.updateMonster,
			delete: this.props.actions.deleteMonster

			
		}
	}

	render() {
		console.log(this.props.actions);
		return (
			<div>
				<BrowserRouter>
					<Switch>

						<Route exact path="/" render={ ({ match, history }) => <App match={ match } history={ history }  addMonster={ this.state.create }/>} />
						
					</Switch>
				</BrowserRouter>

			</div>
    );
	}
}
// <Route exact path="/" render={ ({ match, history, beers, action }) => <BeerList match={ match } history={ history } beers={ this.props.beers } deleteAction={ this.props.actions.deleteBeer } action={ this.props.actions.addBeer } />} />
// <Route exact path="/beers/:id" render={ ({ match, history }) => <BeerDetails match={ match } history={ history } beers={ this.props.beers }/>} />
// <Route exact path="/beers/update/:id" render={ ({ match, history }) => <BeerUpdate match={ match } history={ history }  beers={ this.props.beers }  UpdateAction={ this.props.actions.updateBeer } />} />

const mapStateToProps = state => ({
  beers: state.beers

})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MonsterActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppRouter)