const user = {
    id: 50001,
    name: 'Tomas alva Edison',
    address: {
        street:{
            first:'35/A Rampson vila ,Dhaka',
            second: 'third floor',
            third: 'appartment'
        } ,
        postOffice: 'cantonment',
        phoneNumber: '0186969519',
        city: 'Dhaka',

    },
    postOffice: 'cantonment',
    city: 'Dhaka',
}
const secondStreet = user.address?.street?.third;
console.log(secondStreet);