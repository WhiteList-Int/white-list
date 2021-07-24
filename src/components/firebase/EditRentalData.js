import * as firebase from 'firebase/app';

const db = firebase.firestore();


//Below is a function that will accept a new entry as a parameter
// and shall update the firebase firestore database
export function editRental(
    name, desc, categoryName,
    minPrice, maxPrice, capacity, available, total,
    imgs, category, value, amenities,
    stars, key, id
    ) {
        var rentalRef = db.collection('Rentals');

        rentalRef.doc(id.toString()).update({
            name: name,
            description: desc, 
            categoryName: categoryName,
            minPrice: minPrice,
            maxPrice: maxPrice,
            capacity: capacity,
            available: available,
            total: total,
            imgs: imgs,
            category: category,
            value: value,
            amenities: amenities,
            stars: stars, 
            key: key,
            id: id,
            lastUpdate: db.FieldValue.serverTimestamp()
        }).catch((err) => {
            console.error(err);
          });
}

