const fs = require('fs');
// 
// console.log(fs)
interface DataSource {
    writaData(data: string): void;
    readData(): string;
}

//  
class FileDataSource implements DataSource {
    private filename: string;
    constructor(filename){
        this.filename = filename;
    }
    getFilename(){
        return this.filename;
    }
    setFilename(filename: string){
        this.filename = filename;
    }
    writaData(data: string){
        this.setFilename(data);
    }
    readData(): string{
        fs.readFile(this.filename, (err, data) => {
            if(err) throw err;
            console.log(data);
        })
        return this.getFilename();
    }
}
// 
class DataSourceDecorator implements DataSource {
    
    protected wrappee: DataSource;
    constructor(wrappee: DataSource){
        this.wrappee = wrappee;
    }
    public writaData(data: string){
        this.wrappee.writaData(data);
    }
    public readData(){
        // fs.readFile('demo.js', (err, data) => {
        //     if(err) throw err;
        //     console.log(data);
        // })
        return this.wrappee.readData()
    }
}

class CompressionDecorator extends DataSourceDecorator {
    public writaData(data: string){
        const finalData = data + 'final';
        this.wrappee.writaData(finalData);
    }
    public readData(){
        return this.wrappee.readData() + 'final';
    }
}

const source = new FileDataSource('./demo.js');
source.readData();

const decorator1 = new CompressionDecorator(source);

// const decorator2 = ne
// decorator1.readData();




