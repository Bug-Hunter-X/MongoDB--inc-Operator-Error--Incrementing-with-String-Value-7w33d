```javascript
// Correct usage of $inc operator within the updateOne method
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field1: 1 } });
```