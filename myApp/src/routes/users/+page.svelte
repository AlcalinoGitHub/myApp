<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import getData from './getFire.js';
    import addUser from '$lib/usercreate.js';

    const data = writable([]);

    onMount(async () => {
    const retrievedData = await getData();
    console.log('retrievedData:', retrievedData);
    data.set(retrievedData);
  });

  async function postData(event) {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');
  
    console.log('Username:', username);
    console.log('Password:', password);
  
    const response = await fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    });
  
    const data = await response.json();
    console.log('Response:', data);
  }


  </script>
  

{#each $data as item}
  <div>{item.username}</div>
  <div>{item.password}</div>
  <br>
{/each}

<form on:submit={postData(event)}>
  <input type="text" name="username" placeholder="Username">
  <input type="password" name="password" placeholder="Password">
  <button type="submit">Submit</button>
</form>



