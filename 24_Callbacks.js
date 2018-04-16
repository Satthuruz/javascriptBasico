setTimeout(function callback(){
    console.log('Mensaje A')
},1000)
//
for(let i = 0; i < 9999999999; i ++){};

setTimeout(function callback(){
    console.log('Mensaje B')
},0)

console.log('Mensaje C')

