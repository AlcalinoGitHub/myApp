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
export default postData