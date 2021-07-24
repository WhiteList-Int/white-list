import * as firebase from 'firebase/app';

const db = firebase.firestore();



//Below is a function that will accept a category as a parameter
// and shall return an array of rentals with that category

//Used in filtering; Place inside a useEffect to get real time updates
export default function getRentalWith(category) {
    var type = db.collectionGroup('Rentals')
                .where('category', '==', category.toString());

    type.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        return items
      });

}