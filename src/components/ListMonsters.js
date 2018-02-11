import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddMonsterPage from './AddMonsters';

class ListMonsters extends Component {
  constructor(props) {
    super(props);
        this.state = {
            //id: props.match.params.id,
            monsters: [{id: 1, name:"Freddy", age:"23", weapon: "Claws"}],
            name: "",
            brewery:"",
            alcoholContent: ""
        }
        console.log(props)
    }

//   deleteBeer(beer) {
//     this.props.deleteAction({
//       beer
//     });
//   }


  render() {
    console.log(this.props);
    let MonsterList =  this.props.readMonster.map((monster) => {
      return (<div key={monster.id}>
        <li >
            <ul> Name: {monster.name} </ul>
            <ul> Age : {monster.age}  </ul>
            <ul> Weapon : {monster.weapon} </ul>       
        </li>
        </div>
      )

    });
    return (
      <div>
        <ul>
          {MonsterList}
        </ul>
        <br/>
        <br/>
        <AddMonsterPage AddMonster = {this.props.AddMonster}/>
        {/*<BeerAdd action={ this.props.action } beers = {this.props.beers}/>*/}
      </div>
    );
  }
}

export default ListMonsters;
 {/*<Link to={'/beers/' + beer.id } beer={beer}>{beer.name}, {beer.brewery}</Link>*/}
{/*<button onClick={ this.deleteBeer.bind(this, beer) } className="btn btn-success">Delete</button>*/}