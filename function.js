function sayHello(){
    console.log('hello')
    return 'sayHellom';
}
sayHello();

const sayHellom = (num,index) =>{
    console.log('salom',`${sayHello()}`);
    return num+index;
}
console.log(sayHellom(1,2));