const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function start (){
rl.question('Welcome to Todo CLI! \n-------------------- \n(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit\n', (menuItem) => {
    if (menuItem === "v"){
        console.log("view")
        view()
    }
    else if (menuItem === "n"){
        console.log("new")
        // new()
    }
    else if (menuItem === "cX"){
        console.log("complete")
        // complete()
    }
    else if (menuItem === "dX"){
        console.log("delete")
        // delete()
    }
    else if (menuItem === "q"){
        console.log("quit")
        rl.close()
    }
})
}
start()


function log(text) {
	if (process.env.DEVELOPMENT) {
		console.log(text);
    }
}