import * as React from 'react';
import * as queryString from 'query-string';

export default ( ComposedScreen: any ) => class extends React.Component<any, any> {
  state: any;
  constructor(props:any){
    super(props);
    const params = queryString.parse(props.location.search);
    this.state = { inputValue: params.search || '' }
    this.typing = this.typing.bind(this);
    this.searchItem = this.searchItem.bind(this);
  }
  typing({ target }:any){
    this.setState({inputValue: target.value});
    this.props.changeInput && this.props.changeInput(target.value);
  }
  searchItem(event:any){
    event.preventDefault();
    const { history }:any = this.props;
    const { inputValue } = this.state;
    history.push(`/items?search=${inputValue.trim()}`);
  }
  render() {
    return (<ComposedScreen {...this.props} {...this.state} onChange={this.typing} onPress={this.searchItem}/>);
  }
}
