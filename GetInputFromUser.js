//import the readline module
const readline=require('readline')

//create the interface for i/o
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

//Get input from terminal
rl.question('Enter your name : ', (name)=>{
    rl.question('Enter your age :', (age) => {
            rl.question('Enter your email :', (email)=>{

                console.log('------------------------')

                console.log(`Name : ${name}`)
                console.log(`Age : ${age}`)
                console.log(`Email : ${email}`)
                rl.close()

                console.log('-------------------------')
            })
        })
})

        