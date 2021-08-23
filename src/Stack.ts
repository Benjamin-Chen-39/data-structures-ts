export default class Stack {

    myData = [] as any;

isEmpty() {
    return this.myData.length == 0;
    }

push(data) {
    this.myData.push(data);
}    

count(){
    return this.myData.length;
 }
 pop(){
    return this.myData.pop();
 }
 peek(){
     return this.myData.slice(-1)[0];
 }

}