### The advance version of Frame with using TypeScript and InversifyJs 



## A Example

```js
const template = `
div .root style{{display: flex; align-items: center; flex-direction: column;}}
    h1 {{ Satrt with your Frame app }} 
    input {{ <aValue> }} @input=>inputEvents 
    p {{ <aValue> }}
    button {{ 这是一个按钮 }} @click=>clickEvents 
    ul 
        li *eachItem=>dataArray 
            a href{{https://gitborlando.cn}} 
            img src{{https://gitborlando.cn/aImg.jpg}} 
            div .info 
                h4 {{User:}} 
                p {{ <eachItem.user> }} 
            div .info 
                h4 {{Password:}} 
                p {{ <eachItem.password> }} 
            div .info 
                h4 {{Sex:}} 
                p {{ <eachItem.sex> }} 
    myComponent @component=>myComponent prop{{ <aProp> }} 
`
//import myComponent from './myComponent'

export default {
    template,
    data:{
        aValue: '',
        dataArray: [
            {user:'', password: '', age: ''}
        ],
        aProp: 'this is a component'
    },
    method:{
        inputEvents(){
            this.data.aValue = this.curent.value
        },
        clickEvents(){
            alert(this.curent.innerText)
        }
    },
    component:{
        //myComponent
    },
    beforeMount:{
        aValue(){
            this.data.aValue = '双向绑定'
        }
    },
    afterMount:{
        async getUser(){
            let res = await fetch('https://gitborlando.cn/example')
            this.data.dataArray = await res.json()
        }
    },
    style:{
        h1: `
            color: skyBlue;`
            ,
        img: `
            width: 35px;`
            ,
        li: `
            list-style-type: none;`
            ,
        ul : `
            margin-top: 25px;
            padding: 0;`
            ,
        '.info': `
            display: flex;
            flex-direction: row;`
            ,
        h4: `
            margin: 16px 15px`
    }
}
```



### Reactive principle

1.
```js
template = ` p {{ <data.a.b.c> }} `
```
2.
```js
data: {
  a: {
    b: {
      c: 123
    }
  }
}
```
3.
```js
map1: {
  'data.a.b.c' : p
}

map2: {
  { c: 123 } : 'data.a.b.c'
}
```
4.
```js
data.a.b.c = 456
```
5.
```js
target: {c:123}, key: c, value: 456
```
6.
```js
map2.get({ c: 123 }) => 'data.a.b.c'

map1.get('data.a.b.c') => p

{ c: 123 } => p

p.innerText = 456
```

