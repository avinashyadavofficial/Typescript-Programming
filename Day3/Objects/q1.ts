// Create a type for a Book object and print its properties.
// type Book={
//     authorName:string,
//     authorage:number,
//     authorbooks:string[]
// }
interface Book{
    authorName:string,
    authorage:number,
    authorbooks:string[]
}
const mybook:Book={
    authorName:"avi",
    authorage:21,
    authorbooks:["Aaa","Bbbb","Cccc"]
}
console.log(mybook.authorName);//avi
console.log(mybook.authorbooks);//[ 'Aaa', 'Bbbb', 'Cccc' ]