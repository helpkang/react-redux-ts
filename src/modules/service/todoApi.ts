import sleep from 'sleep-promise';

const  callData = async (todo: string): Promise<string> => {
    await sleep(2000);

    // return new Promise<string>(function (resolve) {
    //     resolve(todo);
    // })
    return todo;
}

export {callData}