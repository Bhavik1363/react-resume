import React from "react";
import firebase from "../../firebase";
import Button from "@material-ui/core/Button";
import "./adminmain.css"

const db = firebase.firestore();
const collection = db.collection("Admin");

export default class AdminLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      email: "",
      showPassword: false,
      isLogged: false,
      userList: [],
    };
  }

  componentDidMount() {
    collection
    .onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        let userObj = doc.data();
        userObj.docid = doc.id;
        if(doc.data().password){

          users.push(userObj);
        }
        console.log("doc data admin login", userObj,users);
      });
      setTimeout(() => {
        if (users.length > 0) {
          this.setState({
            userList: users,
          });
        } else {
          this.setState({
            userList: users,
          });
        }
      }, 100);
    });
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log(this.state)
    );
  };
  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  submit = () => {
    let promise = new Promise((res, rej) => {
      collection
        .where("userEmail", "==", this.state.email.trim().toLowerCase())
        .get()
        .then((snapshot) => {
          if (snapshot.docs.length) {
            snapshot.forEach((doc)=> {
              console.log('Data login',doc.data())

            })
            res("success");
          } else {
            rej("failed");
          }
        });
    });
    promise.then((res) => {
      let loginpromise = new Promise((resolve, reject) => {
        if (this.state.password == this.state.userList[0].password) {
          resolve(true);
        } else {
          alert("You entered a wrong password");
          reject(false);
        }
      });
      loginpromise.then((check) => {
        collection
          .doc("user")
          .update({ isLogged: true })
          .then(() => {
            localStorage.setItem('Isloggedin',true)
            window.location.href = "/admin";
            this.setState(
              {
                isLogged: true,
              },
              () => {
                localStorage.setItem("email", this.state.email);

                localStorage.setItem("isLogged", this.state.isLogged);
                alert("Welcome Admin");
              }
            );
          });
      });
    }).catch(err => {
      alert("You are not register please contact the administrator")
    })
  };
  render() {
    return (
      <div className="w3layouts-main">
        {/* <img
          src={logo}
          classNameName="widthlogoslider positionlogo"
          style={{ position: "absolute" }}
        ></img> */}

        <div className="bg-layer">
          <h1 className="adminlogintext">Login</h1>

          <div className="header-main">
            <div className="main-icon">
              <span className="fa fa-eercast"></span>
            </div>
            <div className="header-left-bottom">
              <form action="#" method="post">
                <div className="icon1">
                  <span className="fa fa-user"></span>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={this.state.email}
                    name="email"
                    onChange={this.handleChange}
                    required=""
                    className="inputadmin"
                  />
                </div>
                <div className="icon1">
                  <span className="fa fa-lock"></span>
                  <input
                    type="password"
                    placeholder="Password"
                    required=""
                    value={this.state.password}
                    name="password"
                    onChange={this.handleChange}
                    className="inputadmin"
                  />
                </div>

                <div className="bottom">
                  <Button className="adminloginbutton" onClick={this.submit}>
                    Login{" "}
                  </Button>{" "}
                </div>
                <div className="links">
                  <div className="clear"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
