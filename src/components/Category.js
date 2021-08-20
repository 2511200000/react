import React, { Component } from "react";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          categories: json,
        });
        console.log(this.state.categories);
      });
  }
  render() {
    return (
      <div>
        <div className="panel-group category-products" id="accordian">
          {this.state.categories.map((element, index) => (
            <div key={index} className="panel panel-default">
              <div className="panel-heading">
                {/* <h4 className="panel-title"><a href="#">Shoes</a></h4> */}

                <h4 className="panel-title">
                  <a href="#">{element}</a>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
