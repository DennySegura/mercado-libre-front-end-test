import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppBar from '../../components/app-bar';

export default class Home extends React.Component {
  state: any;
  constructor(props:any){
    super(props);
    this.typing = this.typing.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      inputValue: null
    }
  }
  componentDidMount(){
    this.props.searchProduct('MLA716454202');
  }
  typing({ target }:any){
    this.setState({inputValue: target.value});
  }
  search(event:any){
    event.preventDefault();
    const { history }:any = this.props;
    history.push(`/items?search=${this.state.inputValue.trim()}`);
  }
  render() {
    const { inputValue }: any = this.state;
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{'Test Front-End Mercado Libre'}</title>
          <link rel="canonical" href={'http://localhost:3000/'} />
        </Helmet>
        {/* <AppBar value={inputValue} onChange={this.typing} onPress={this.search}/> */}
      </div>
    );
  }
}
