// Uncomment this file if it is ok to contain multiple functions
// in one js file...


// import * as firebase from 'firebase/app';
// import sampleData from '../main-pages/comp/sampleData';

// const db = firebase.firestore();



// //Below is a function that will accept a category as a parameter
// // and shall return an array of rentals with that category

// //Used in filtering; Place inside a useEffect to get real time updates
// export function getRentalWith(category) {
//     var type = db.collectionGroup('Rentals')
//                 .where('category', '==', category.toString());

//     type.onSnapshot((querySnapshot) => {
//         const items = [];
//         querySnapshot.forEach((doc) => {
//           items.push(doc.data());
//         });
//         return items
//       });

// }


// //Below is a function that will accept a new entry as a parameter
// // and shall update the firebase firestore database
// export function addRental( name, desc, categoryName,
//     minPrice, maxPrice, capacity, available, total,
//     imgs, category, value, amenities,
//     stars, key, id
//     ) {
//         var rentalRef = db.collection('Rentals');

//         rentalRef.doc(id.toString()).set({
//             name: name,
//             description: desc, 
//             categoryName: categoryName,
//             minPrice: minPrice,
//             maxPrice: maxPrice,
//             capacity: capacity,
//             available: available,
//             total: total,
//             imgs: imgs,
//             category: category,
//             value: value,
//             amenities: amenities,
//             stars: stars, 
//             key: key,
//             id: id,
//             lastUpdate: db.FieldValue.serverTimestamp()
//         }).catch((err) => {
//             console.error(err);
//           });
// }


// //Below is a function that will accept a rental ID as a parameter
// // and shall update the firebase firestore database
// export function deleteRental(rentalId) {
//     var rentalRef = db.collection('Rentals');
//     rentalRef
//       .doc(rentalId)
//       .delete()
//       .catch((err) => {
//         console.error(err);
//       });
//   }


  
// //Below is a function that will accept a new entry as a parameter
// // and shall update the firebase firestore database
// export function editRental(
//     name, desc, categoryName,
//     minPrice, maxPrice, capacity, available, total,
//     imgs, category, value, amenities,
//     stars, key, id
//     ) {
//         var rentalRef = db.collection('Rentals');

//         rentalRef.doc(id.toString()).update({
//             name: name,
//             description: desc, 
//             categoryName: categoryName,
//             minPrice: minPrice,
//             maxPrice: maxPrice,
//             capacity: capacity,
//             available: available,
//             total: total,
//             imgs: imgs,
//             category: category,
//             value: value,
//             amenities: amenities,
//             stars: stars, 
//             key: key,
//             id: id,
//             lastUpdate: db.FieldValue.serverTimestamp()
//         }).catch((err) => {
//             console.error(err);
//           });
// }

