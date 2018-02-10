// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import BeerAdd from './BeerAdd';

// class BeerList extends Component {

//   deleteBeer(beer) {
//     this.props.deleteAction({
//       beer
//     });
//   }

//   render() {
//     let beerItems = this.props.beers.map((beer) => {
//       return (
//         <li key={beer.id}>
//           <Link to={'/beers/' + beer.id } beer={beer}>{beer.name}, {beer.brewery}</Link>
//           <button onClick={ this.deleteBeer.bind(this, beer) } className="btn btn-success">Delete</button>
//         </li>
//       )

//     });

//     return (
//       <div>
//         <ul>
//           {beerItems}
//         </ul>
//         <BeerAdd action={ this.props.action } beers = {this.props.beers}/>
//       </div>
//     );
//   }
// }

// export default BeerList;
