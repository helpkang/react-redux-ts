import sleep from 'sleep-promise';

export async function addTodo (todo: string): Promise<string> {
    await sleep(500);
    return todo;
}