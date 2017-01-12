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

  edit(){
    this.props.onEdit(this.props.id, this.props.value);
  },

  remove() {
    this.props.onRemove(this.props.id);
  },

  render(){
    return <li className="list-group-item">
      {this.props.value}
      <a className="right glyphicon glyphicon-edit" href="#" onClick={this.edit}></a>
      <a className="right glyphicon glyphicon-remove" href="#" onClick={this.remove}></a>
    </li>
  }
})

//itemEditor
const ItemEditor = React.createClass({

  getInitialState(){
    return {
      value: this.props.value
    }
  },

  changeHandle(event){
    this.state.value = event.target.value;
    this.forceUpdate();
  },

  remove() {
    this.props.onRemove(this.props.id);
  },

  save(){
    this.props.onSave(this.props.id, this.state.value);
  },

  render(){
    return <li className="list-group-item">
      {this.props.id}
      <input className="item-edit" value={this.state.value} onChange={this.changeHandle}/>
      <a href="#" className="glyphicon glyphicon-ok" onClick={this.save}></a>
      <a className="glyphicon glyphicon-remove" href="#" onClick={this.remove}></a>
    </li>
  }
})

// List
const List = React.createClass({

  getInitialState(){
    return {
      key: 0,
      list: new Map(),
      editList: new Map()
    }
  },

  add(){
    const key = ++this.state.key;
    this.state.editList.set(key, '');
    this.forceUpdate();
  },

  removeItem(id) {
    this.state.list.delete(id);
    this.forceUpdate();
  },

  removeItemEditor(id) {
    this.state.editList.delete(id);
    this.forceUpdate();
  },

  save(id, value){
    this.state.editList.delete(id);
    this.state.list.set(id, value);
    this.forceUpdate();
  },

  edit(id, value){
    this.state.list.delete(id);
    this.state.editList.set(id, value);
    this.forceUpdate();
  },

  render(){

    const listDOM = [];
    const editListDOM = [];

    for (let entity of this.state.list) {
      listDOM.push(<Item onRemove={this.removeItem} onEdit={this.edit} key={entity[0]} id={entity[0]}
                         value={entity[1]}/>);
    }

    for (let entity of this.state.editList) {
      editListDOM.push(<ItemEditor onRemove={this.removeItemEditor} onSave={this.save} key={entity[0]} id={entity[0]}
                                   value={entity[1]}/>);
    }

    return <div>
      <button onClick={this.add} className="btn btn-default">Add</button>
      <ul className="list-group">
        {listDOM}
        {editListDOM}
      </ul>
    </div>
  }
});

ReactDOM.render(
  <List/>,
  document.getElementById('container')
);
