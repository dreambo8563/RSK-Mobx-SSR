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

这个是非常普通的table 不是太好，可控性低


## 更新Decorator版本 （更灵活）

### 实例

- 组建拼装

把表内容的一行为模板参数

```js
import { tabelHelper } from './../DecoratorHelper/TableDecorator/TableDecorator'

@tabelHelper
class TableItem extends Component {
    render() {
        const { name, age, address } = this.props.item
        return (
            <tr>
                <td>{name}</td>
                <td>{age}</td>
                <td>{address}</td>
            </tr>
        );
    }
}

export default withStyles(s)(TableItem)
```

- 使用

表头部分还是从children部分得到

```js
        <Test data={this.bodyinfo} className={s.table}>
          <th style={{ width: '100px' }}>
            <a href="">tilte1</a>
          </th>
          <th>title2</th>
          <th>title3</th>
        </Test>
```

