const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let list = []
let incomplete = '[ ] '
let complete = '[✓] '

function start(){
rl.question('\n(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit\n', (menuItem) => {
    if (menuItem === "v"){
        view()
    }
    else if (menuItem === "n"){
        add()
    }
    else if (menuItem[0] === "c"){
        let x = parseInt(menuItem[1])
        comp(x)
    }
    else if (menuItem[0] === "d"){
        let x = parseInt(menuItem[1])
        del(x)
    }
    else if (menuItem === "q"){
        console.log("See you soon! ✌🏽");
        rl.close();
    }else{
        console.log('Please enter a valid menu item.')
        start()
    }
})
}

function view() {
    // console.log('list', list);
    if (!list.length){
        console.log ('Your list is empty 🙈')
    }else{
        list.forEach((item, index) => {
            let status = item.complete ? complete : incomplete;
            console.log(index + status + item.name)
        })
      
    }
    start()
};

function add() {
    rl.question('What would you like to add to your to-do list?\n', (tditem) => {
        let item = {};
        item.name = tditem;
        item.complete = false;
        list.push(item);
        console.log ('"' + tditem + '"added 💪🏽');
        start()
    });
};

function comp (x){
    list[x].complete = true;
    console.log ('"' + list[x].name + '" completed 🙌🏽')
    start()   
}
function del (x){
    console.log ('"' + list[x].name + '" deleted 🙅🏽‍♀️')
    list.splice(x, 1)
    start()  
}

console.log('\nWelcome to Todo CLI! 👋🏽 \n--------------------');
start()
