export const addNewUserFormControls = [
    {
        name: 'firstName',
        label: 'First Name',
        placeholder: 'First Name',
        type: 'input'
    },
    {
        name: 'lastName',
        label: 'Last Name',
        placeholder: 'Last Name',
        type: 'input'
    },
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Email',
        type: 'email'
    },
    {
        name: 'address',
        label: 'Address',
        placeholder: 'Address',
        type: 'input'
    }
]


export const addNewUserFormInitialState={
    firstName: '',
    lastName: '',
    email: '',
    address: ''
}