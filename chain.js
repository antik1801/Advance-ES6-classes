const users = [{id: 1, name: 'Abul', job: 'doctor'}]

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'dabul', job: 'leader'}
    ]
}
const firstJob = data.data[0].name;
// console.log(firstJob);
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
const userFloor = user?.address?.street?.second
console.log(userFloor);