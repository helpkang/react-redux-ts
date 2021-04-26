const  callData = (todo: string): Promise<string> => {
    return new Promise<string>(function (resolve) {
        resolve(todo);
    })
}

export {callData}