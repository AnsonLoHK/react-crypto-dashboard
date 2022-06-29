import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function Home() {
  return <div>admin首页</div>;
}

function Me(props) {
  console.log(props);
  return <div>admin我的</div>;
}

function Product(props) {
  return <div>admin产品页面:{props.match.params.id}</div>;
}

export class Test extends Component {
  constructor() {
    super();
  }
  render() {
    {
      /*若将路径写成对象形式,且和下面相同,会自动将pathname、search、hash自动拼接在url路径上,state为传入组件的数据*/
    }
    let obj = {
      pathname: "/me",
      search: "?username=admin",
      hash: "#abc",
      state: { msg: "hello" },
    };
    return (
      <div id="app">
        {/*BrowserRouter内部只能有一个根容器,包裹其他内容*/}
        {/*添加basename='/xx'后,点击Link跳转其他路由时,url会将/xx添加到路由名前,所以使用路由路径和加了admin的路由路径都能匹配该路由*/}
        <Router basename="/">
          <div>
            <div className="nav">
              <Link to="/">Home</Link>
              <Link to="/product/123">Product</Link>
              {/*可在对应的组件中输出props查看传入的对象的信息,添加replace将跳转前的上一个页面替换成当前页面,只将当前页面入栈*/}
              <Link to={obj} replace>
                个人中心
              </Link>
            </div>

            <Route path="/" exact component={Home}></Route>
            <Route path="/product/:id" component={Product}></Route>
            <Route path="/me" exact component={Me}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default Test;
