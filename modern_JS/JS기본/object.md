# 객체(object)

```javascript
let user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
delete user.name;

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let name in salaries) {
  sum += salaries[name];
}
```
