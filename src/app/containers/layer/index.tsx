/// <reference path="../../index.d.ts"/>
import * as React from 'react';
import * as queryString from 'query-string';

export default ( ComposedScreen: any ) => class extends React.Component<LayoutContainerProps, LayoutContainerState> {
  public state: any;
  constructor(props: LayoutContainerProps){
    super(props);
    const params = queryString.parse(props.location.search);
    this.state = { inputValue: params.search || '' };
    this.typing = this.typing.bind(this);
    this.searchItem = this.searchItem.bind(this);
  }
  private typing({ target }: any){
    this.setState({inputValue: target.value});
    this.props.changeInput && this.props.changeInput(target.value);
  }
  private searchItem(event: any){
    event.preventDefault();
    const { history }: any = this.props;
    const { inputValue } = this.state;
    history.push(`/items?search=${inputValue.trim()}`);
  }
  public render() {
    return (<ComposedScreen {...this.props} {...this.state} onChange={this.typing} onPress={this.searchItem}/>);
  }
};
