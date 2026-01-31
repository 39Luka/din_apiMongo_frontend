import axios from 'axios';
import { products } from '../src/data/products.js';

const API_URL = 'https://din-apimongo.onrender.com/productos';

async function seed() {
    console.log('🚀 Starting seed process from src/data/products.js...');

    for (const product of products) {
        try {
            const data = {
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                photo: product.image
            };

            await axios.post(API_URL, data);
            console.log(`✅ Successfully posted: ${product.name}`);
        } catch (error) {
            console.error(`❌ Failed to post ${product.name}:`, error.message);
            if (error.response) {
                console.error('Response error data:', error.response.data);
            }
        }
    }

    console.log('🏁 Seed process finished.');
}

seed();
