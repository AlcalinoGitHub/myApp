

import {json} from  "@sveltejs/kit"
import { firestore } from '$lib/firebase.js';

export async function POST(req) {
    const formData = new FormData(req.body);
    const username = formData.get('username');
    const password = formData.get('password');
    console.log(formData)
    console.log('Username:', username);
    console.log('Password:', password);
  
    return {
      status: 200,
      body: {
        message: 'Data received successfully'
      }
    };
  }