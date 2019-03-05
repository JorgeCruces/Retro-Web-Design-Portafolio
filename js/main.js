function wait(message, callback, seconds){
    setTimeout(callback,seconds * 1000);
    console.log(message);
}

function selfDestruct(){
    console.log('BOOOOM!');
}

wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ... ?');
