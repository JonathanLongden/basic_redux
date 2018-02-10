import React, { Component } from 'react';

class AddMonsters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      weapons: [
        'Smelly Feet',
        'Spike Club',
        'Rusty Sword'
      ]
    }
    this.AddMonster = this.AddMonster.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  AddMonster(e){
    e.preventDefault();
    this.props.action({
      name: this.state.name,
      age: this.state.age,
      weapons: this.state.weapons
    });

  }

  render() {
    let MonsterWeaponList = this.state.weapons.map((weapon, index) => {
      return (
        <option key={index} value={weapon}>
          {weapon}
        </option>
      )
    });

    return (
      <form onSubmit={this.AddMonster }>
        <label id="New">Name:</label>
        <input id="NewMonsterName" name="name" type="text" onChange={ this.handleInputChange }/>
        <br/>
        <label id="NewMonsterAge">Age:</label>
        <input id="NewMonsterAge" name="age" type="number" onChange={ this.handleInputChange }/>
        <br/>
        <label id="NewMonsterWeapon">Weapon:</label>
        <select id="NewMonsterWeapon" name="age" onChange={ this.handleInputChange }>
          { MonsterWeaponList }
        </select>
        <br/>
        <button>Add Monster</button>
      </form>
    );
  }
}

export default AddMonsters;