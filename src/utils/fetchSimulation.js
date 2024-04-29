const fetchSimulation = (dataBase,time) => {
    return new Promise ((resolve, rejact) =>{
        setTimeout(() => {
            resolve (dataBase);
            rejact (new Error("Algo malió sal"))
        }, time)
    })
}

export default fetchSimulation;
