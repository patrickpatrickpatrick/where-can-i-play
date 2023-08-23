// from https://stackoverflow.com/a/6860916

export default function guidGenerator(): string {
    const S4 = function(): string {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
