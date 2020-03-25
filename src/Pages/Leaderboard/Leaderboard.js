// import React, { Component } from "react";
// import uuidv4 from "uuid/v4";

// import { regions } from "../../Constants";
// import Trophy from "../../assets/img/trophy.png";
// import Champion_League from "../../assets/img/leagues/champion.png";
// import "./leaderboard.css";

// export default class extends Component {
//   constructor() {
//     super();
//     this.state = {
//       topPlayer: [
//         {
//           name: "Bat IvKo",
//           trophies: 5760,
//           league: "Master III League 6",
//           clan: "BulgarianGang"
//         },
//         {
//           name: "Bat IvKo",
//           trophies: 5760,
//           league: "Master III League 6",
//           clan: "BulgarianGang"
//         },
//         {
//           name: "Bat IvKo",
//           trophies: 5760,
//           league: "Master III League 6",
//           clan: "BulgarianGang"
//         },
//         {
//           name: "Bat IvKo",
//           trophies: 5760,
//           league: "Master III League 6",
//           clan: "BulgarianGang"
//         },
//         {
//           name: "Bat IvKo",
//           trophies: 5760,
//           league: "Master III League 6",
//           clan: "BulgarianGang"
//         }
//       ],
//       topClans: [
//         {
//           name: "Dark Warriors",
//           trophies: "75000",
//           members: "50",
//           location: "India"
//         },
//         {
//           name: "Dark Warriors",
//           trophies: "75000",
//           members: "50",
//           location: "India"
//         },
//         {
//           name: "Dark Warriors",
//           trophies: "75000",
//           members: "50",
//           location: "India"
//         },
//         {
//           name: "Dark Warriors",
//           trophies: "75000",
//           members: "50",
//           location: "India"
//         },
//         {
//           name: "Dark Warriors",
//           trophies: "75000",
//           members: "50",
//           location: "India"
//         }
//       ],
//       topWarClans: []
//     };
//   }

//   render = () => {
//     const { topPlayer, topClans } = this.state;
//     return (
//       <div className="container-lg mt-3">
//         {/*  Top Players */}
//         <div className="card border-0 px-lg-5 mb-5">
//           <div className="card-body">
//             <div className="row">
//               <div className="col-6">
//                 <div className="card-title lb-card_title px-3">Top Players</div>
//               </div>
//               <div className="col-6 text-right">
//                 <select
//                   defaultValue="1"
//                   className="custom-select lb-card_select-box border-0 bg-light"
//                 >
//                   <option value="1">Country</option>
//                   {regions.map(region => (
//                     <option key={uuidv4()} value={region.key}>
//                       {region.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <hr className="m-0 my-2" />
//             <table className="table table-hover mt-3 lb-table">
//               <tbody>
//                 {topPlayer.map(({ name, trophies, league, clan }, i) => {
//                   return (
//                     <tr key={uuidv4()}>
//                       <td className="align-middle d-none d-lg-table-cell">
//                         #{i + 1}
//                       </td>
//                       <td className="align-middle">
//                         <img
//                           src={Champion_League}
//                           alt="_trophy.png"
//                           className="lb-icon d-inline d-lg-none"
//                         />
//                         {name}
//                       </td>
//                       <td className="align-middle">
//                         <img
//                           src={Trophy}
//                           alt="_trophy.png"
//                           className="lb-icon"
//                         />
//                         {trophies}
//                       </td>
//                       <td className="align-middle  d-none d-lg-table-cell">
//                         <img
//                           src={Champion_League}
//                           alt="_trophy.png"
//                           className="lb-icon"
//                         />
//                         {league}
//                       </td>
//                       <td className="align-middle d-lg-table-cell d-none">
//                         <img
//                           src="https://cdn.statsroyale.com/images/badges/16000040.png"
//                           alt="_trophy.png"
//                           className="lb-icon-clan"
//                         />
//                         {clan}
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//             <div className="text-right">
//               <a href="/" className="btn lb-see_more_btn px-3">
//                 See All <i className="fal fa-arrow-right ml-2"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/*  Top Clan */}

//         <div className="card border-0 px-5 mb-5">
//           <div className="card-body">
//             <div className="row">
//               <div className="col-6">
//                 <div className="card-title lb-card_title px-3">Top Clans</div>
//               </div>
//               <div className="col-6 text-right">
//                 <select
//                   defaultValue="1"
//                   className="custom-select lb-card_select-box border-0 bg-light"
//                 >
//                   <option value="1">Country</option>
//                   {regions.map(region => (
//                     <option key={uuidv4()} value={region.key}>
//                       {region.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <hr className="m-0 my-2" />
//             <table className="table table-hover mt-3 lb-table">
//               <tbody>
//                 {topClans.map(({ name, trophies, members, location }, i) => {
//                   return (
//                     <tr key={uuidv4()}>
//                       <td className="d-none d-lg-block align-middle">
//                         #{i + 1}
//                       </td>
//                       <td className="align-middle">
//                         <img
//                           src="https://cdn.statsroyale.com/images/badges/16000040.png"
//                           alt="_trophy.png"
//                           className="lb-icon-clan"
//                         />
//                         {name}
//                       </td>
//                       <td className="align-middle">
//                         <img
//                           src={Trophy}
//                           alt="_trophy.png"
//                           className="lb-icon"
//                         />
//                         {trophies}
//                       </td>
//                       <td className="align-middl0e d-none d-lg-table-cell">
//                         <i className="fal fa-users mr-3"></i> {members}/50
//                       </td>
//                       <td className="align-middle d-none d-lg-inline ">
//                         {location}
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//             <div className="text-right">
//               <a href="/" className="btn lb-see_more_btn px-3">
//                 See All <i className="fal fa-arrow-right ml-2"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Top War Clans */}

//         <div className="card border-0 px-5 mb-5">
//           <div className="card-body">
//             <div className="row">
//               <div className="col-6">
//                 <div className="card-title lb-card_title px-3">
//                   Top War Clans
//                 </div>
//               </div>
//               <div className="col-6 text-right">
//                 <select
//                   defaultValue="1"
//                   className="custom-select lb-card_select-box border-0 bg-light"
//                 >
//                   <option value="1">Country</option>
//                   {regions.map(region => (
//                     <option key={uuidv4()} value={region.key}>
//                       {region.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <hr className="m-0 my-2" />
//             <table className="table table-hover mt-3 lb-table">
//               <tbody>
//                 {topClans.map(({ name, trophies, members, location }, i) => {
//                   return (
//                     <tr key={uuidv4()}>
//                       <td className="align-middle d-none d-lg-inline">
//                         #{i + 1}
//                       </td>
//                       <td className="align-middle">
//                         <img
//                           src="https://cdn.statsroyale.com/images/badges/16000040.png"
//                           alt="_trophy.png"
//                           className="lb-icon-clan"
//                         />
//                         {name}
//                       </td>
//                       <td className="align-middle">
//                         <img
//                           src={Trophy}
//                           alt="_trophy.png"
//                           className="lb-icon"
//                         />
//                         {trophies}
//                       </td>
//                       <td className="align-middle d-none d-lg-table-cell">
//                         <i className="fal fa-users mr-3"></i> {members}/50
//                       </td>
//                       <td className="align-middle d-none d-lg-table-cell">
//                         {location}
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//             <div className="text-right">
//               <a href="/" className="btn lb-see_more_btn px-3">
//                 See All <i className="fal fa-arrow-right ml-2"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
// }
