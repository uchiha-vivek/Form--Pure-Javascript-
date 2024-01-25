 // Tracing the elements by id

 const username = document.getElementById('username')
 const password = document.getElementById('password')
 const error = document.getElementById('error')
const form = document.querySelector('form')

// adding event listener
form.addEventListener('submit',function(e){
    const errors = [] // array of error

    // check on username
    if(username.value.trim() ===""){
        errors.push('Username required')
    }
    // check on password
    if(password.value.length < 4  ){
        errors.push('Password should be atleast 4 characters or maximum 10 characters')
    }
    // checks on array
    // The toggleAttribute() method of the Element interface toggles a Boolean attribute (removing it if it is present and adding it if it is not present) on the given element
    if(errors.length>0){
        e.preventDefault()
        error.toggleAttribute('hidden')
        error.innerHTML  =errors.join(',')
    }
})