import * as firebase from 'firebase/app';

const db = firebase.firestore();


//Below is a function that will accept a rental ID as a parameter
// and shall update the firebase firestore database
export function deleteRental(rentalId) {
    var rentalRef = db.collection('Rentals');
    rentalRef
      .doc(rentalId)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

