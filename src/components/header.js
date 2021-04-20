import { Link } from "gatsby"
import React, { Component } from "react"
import "./header.css"

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = e => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }

    // this.state({hasScrolled: (scrollTop > 50) ? true : false})
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "header header-scrolled" : "header"}
      >
        <div className="header-group">
          <Link to="/">
            <img
              src={require("../images/logo-designcode.svg").default}
              width="30"
              alt=""
            />
          </Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy">
            <button>Buy</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
