/* eslint-disable  */
/* eslint-disable  */
/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from "react";
import TopBar from "./topbar";
import Sidebar from "./sidebar";
import Dashboard from "./Dashboard";
import AdminLogin from "./AdminLogin";
import "./adminmain.css";

class AdminMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileNavOpen: false,
      pageName: "Dashboard",
      authStateSpin: false,
      user: { loggedIn: false },
      alertDialog: {
        isOpen: false,
        title: "",
        subTitle: "",
      },
    };
  }
  componentDidMount() {
    let userLoginStatus = localStorage.getItem("Isloggedin");
    this.setState({
      authStateSpin: userLoginStatus,
      user: { loggedIn: userLoginStatus },
    });
  }

  sideOptionSelected = (pageNameToLoad) => {
    this.setState({
      pageName: pageNameToLoad,
    });
  };

  render() {
    const {pageName} = this.state;
    return (
      <div>
        {this.state.authStateSpin ? (
          <div>
            <div
              style={
                ({ backgroundColor: "" },
                { display: "flex" },
                { height: 100 + "%" },
                { overflow: "hidden" },
                { width: 100 + "%" })
              }
            >
              <TopBar
                onMobileNavOpen={() =>
                  this.setState({
                    isMobileNavOpen: true,
                  })
                }
                sideOptionSelected={(value) => {
                  this.sideOptionSelected(value);
                }}
              />
              <Sidebar
                sideOptionSelected={(value) => this.sideOptionSelected(value)}
                onMobileClose={() => this.setState({ isMobileNavOpen: false })}
                openMobile={this.state.isMobileNavOpen}
              />
              <div className="margintopleft">
                <div>

                  {this.state.pageName === "Dashboard" && <Dashboard />}

                </div>
              </div>
            </div>
          </div>
        ) : (
          <AdminLogin />
        )}
      </div>
    );
  }
}

export default AdminMain;
