// import React, { Component, createContext } from "react";
// import firebase from "firebase";
// import { auth } from '../services/firebase';

// export const UserContext = createContext({ user: null });
// class UserProvider extends Component {

//     componentDidMount = () => {
//         auth.onAuthStateChanged(userAuth => {
//             this.setState({ user: userAuth });
//         });
//     };
//     render() {
//         return (
//             <UserContext.Provider value={this.state.user}>
//                 {this.props.children}
//             </UserContext.Provider>
//         );
//     }
// }
// export default UserProvider;