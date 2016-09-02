## dialog的注释帮助方法

## 要求

    - 需要提供s.container这个class,是给dialogContainer用的,需要给出宽高等基本css
    - Test 是dialog内部内容的组建,可以出发onClose来通知外层组件

## 实例

- 组件


```js
import s from './Test.css'
import { dialog } from './../DecoratorHelper/DialogDecorator.js/DialogDecorator'


@dialog(s.container)
class Test extends Component {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
    }
    render() {
        return (
            <div>
                <input onChange={:: this.props.onClose} type ="text" />
                <input type="text" />
            </div >
        )
    }
}

export default Test
```

- 外层组件需要对onClose作出反应

```js
  <Test onClose={::this.postTest} />
```