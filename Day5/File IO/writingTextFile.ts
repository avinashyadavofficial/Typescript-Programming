import{promises as fs} from'fs';
async function writeIntoTextFile(){
    try{
        let text="I am writing into Output.txt file."
        await fs.writeFile("output.txt",text,'utf-8');
        console.log("Written");
        await fs.appendFile("output.txt","\nWelcome Avinash Yadav",'utf-8');
        await fs.appendFile("output.txt","\nAAaaaaa",'utf-8');
    }
    catch(error){
        console.error("Error in writing file",error);     
    }
}
writeIntoTextFile();