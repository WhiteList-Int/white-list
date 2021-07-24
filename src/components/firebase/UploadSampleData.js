import * as firebase from 'firebase/app';
import sampleData from '../main-pages/comp/sampleData';

const db = firebase.firestore();


//Below is a function that will automatically populate the
//firebase firestore database with the default mockup data

export function populateWithDefaultRentals() {
    var rentalRef = db.collection('Rentals');

    sampleData.forEach((entry) => {
        rentalRef.doc(entry.id).set({
            name: entry.name,
            description: entry.desc, 
            categoryName: entry.categoryName,
            minPrice: entry.minPrice,
            maxPrice: entry.maxPrice,
            capacity: entry.capacity,
            available: entry.available,
            total: entry.total,
            imgs: entry.imgs,
            category: entry.category,
            value: entry.value,
            amenities: entry.amenities,
            stars: entry.stars, 
            key: entry.key,
            id: entry.id,
            lastUpdate: db.FieldValue.serverTimestamp()
        }).catch((err) => {
            console.error(err);
          });
    });
}