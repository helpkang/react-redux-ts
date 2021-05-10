import sleep from 'sleep-promise';

export async function  callData  (todo: string): Promise<string> {
    await sleep(500);
    return todo;
}