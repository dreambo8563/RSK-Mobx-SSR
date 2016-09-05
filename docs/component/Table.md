## 基本表格样式

### 基本配置
- 列表数据 作为属性传入
- 表头放在children中,自由配置各自的class
- table  样式可自行调整,携带className


### 实例

列表数据

```js
bodyinfo = [{
    name: "zhangsan",
    age: "18",
    address: "beijing",
  }, {
      name: "lisi",
      age: "18",
      address: "beijing",
    }, {
      name: "wangwu",
      age: "18",
      address: "beijing",
    }]


```

组件使用

```js
     <MyComponent data={this.bodyinfo} className={s.table}>
          <th style={{ width: '100px' }}>
            <a href="">tilte1</a>
          </th>
          <th>title2</th>
          <th>title3</th>
        </MyComponent>
```