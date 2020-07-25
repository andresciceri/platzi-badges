import React from "react";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Andrés"
                lastName="Ciceri"
                twitter="CiceriDev"
                jobTitle="Frontend Engineer"
                avatarUrl="https://www.gravatar.com/avatar?id=identicon"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;

// import BadgeForm from '../components/BadgeForm';

// class BadgeNew extends React.Component {
//   state = {
//     form: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       jobTitle: '',
//       twitter: '',
//     },
//   };

//   handleChange = e => {
//     this.setState({
//       form: {
//         ...this.state.form,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <div className="BadgeNew__hero">
//           <img className="img-fluid" src={header} alt="Logo" />
//         </div>

//         <div className="container">
//           <div className="row">
//             <div className="col-6">
//               <BadgeForm
//                 onChange={this.handleChange}
//                 formValues={this.state.form}
//               />
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default BadgeNew;
