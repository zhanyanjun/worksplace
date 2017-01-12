/**
 * Created by Archer on 2017/1/12.
 * email:  zxchcyc@gmail.com
 * github: https://github.com/zxchcyc
 * blog:   https://zxchcyc.github.io/
 */
// ReactDOM.render(
//   <div>
//     <button className="btn btn-default">Add</button>
//         <ul className="list-group">
//         <li className="list-group-item">...<a className="right glyphicon glyphicon-edit" href="#"></a> <a className="right glyphicon glyphicon-remove" href="#"></a></li>
//         <li className="list-group-item">
//           <input className="item-edit"/><a href="#" className="glyphicon glyphicon-ok"></a><a className="glyphicon glyphicon-remove" href="#"></a>
//         </li>
//         <li className="list-group-item">...</li>
//         <li className="list-group-item">...</li>
//         <li className="list-group-item">...</li>
//         </ul>
//   </div>,
//   document.getElementById('container')
// );

// 组件划分
// item
const Item = React.createClass({

  getInitialState() {
    return {
      isEdit:true
    }
  },

  edit(){
    this.setState({isEdit:true});
  },

  remove() {
    this.props.onRemove(this.props.id);
  },

  save(){
    this.props.onSave(this.props.id, this.refs.inputText.value);
    this.setState({isEdit:false});
  },

  render(){
    return this.state.isEdit ?
    <li className="list-group-item">
      {this.props.id +' '}
      <input className="item-edit" ref="inputText" defaultValue={this.props.value} />
      <a href="#" className="glyphicon glyphicon-ok" onClick={this.save}></a>
      <a className="glyphicon glyphicon-remove" href="#" onClick={this.remove}></a>
    </li>
    :
    <li className="list-group-item">
      {this.props.value}
    <a className="right glyphicon glyphicon-edit" href="#" onClick={this.edit}></a>
    <a className="right glyphicon glyphicon-remove" href="#" onClick={this.remove}></a>
    </li>
  }
})

// List
const List = React.createClass({

  getInitialState(){
    return {
      key: 0,
      list: new Map(),
    }
  },

  add(){
    const key = ++this.state.key;
    this.state.list.set(key, '');
    this.forceUpdate();
  },

  removeItem(id) {
    this.state.list.delete(id);
    this.forceUpdate();
  },

  save(id, value){
    this.state.list.set(id, value);
    this.forceUpdate();
  },

  render(){

    const listDOM = [];

    for (let entity of this.state.list) {
      listDOM.push(<Item onRemove={this.removeItem} onSave={this.save} key={entity[0]} id={entity[0]}
                         value={entity[1]}/>);
    }

    return <div>
      <button onClick={this.add} className="btn btn-default">Add</button>
      <ul className="list-group">
        {listDOM}
      </ul>
    </div>
  }
});

ReactDOM.render(
  <List/>,
  document.getElementById('container')
);
