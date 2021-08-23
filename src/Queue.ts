export default class Queue {

    myData = [] as any;

    isEmpty() {
        return this.myData.length == 0;
        }

    enqueue(data){
        this.myData.push(data);
    }

}