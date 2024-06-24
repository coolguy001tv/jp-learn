// const words = `
//
//
// | 汉字写法      | 假名写法       | 含义                     | 罗马音             | 例句 |
// | :-------- | :--------- | :--------------------- | :-------------- | :- |
// | 言う        | いう         |                        | iu              |  abc  |
// | \\~でしょう    | \\~でしょう     | ……吧                    | desyou          |    |
//
//
// `

export const getWordList = async function (){
    const words = await fetch('./word-list.txt').then(response=>response.text())
    const word_arr = words.split(/\r?\n/).filter(Boolean).slice(2);//不要前面2个
    const reg = /\|\s*(.+?)\s+\|\s*(.+?)\s+\|\s*(.+?)\s+\|\s*(.+?)\s+\|\s*(.+?)\s+/
    const final_words = [];
    for(let x of word_arr){
        const result = reg.exec(x);
        if(result){
            const [,han,kana,meaning,roman,sentence] = result;
            const tReg = /\\/g
            final_words.push([han.replace(tReg,''),kana.replace(tReg,''),meaning,roman,sentence])
        }

    }
    return final_words;

}
