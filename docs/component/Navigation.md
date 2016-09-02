# 导航组建

## 预期有多个子元素组成

- 本身接受 className等其他各种属性
- 子元素自己配置自己的


## 实例

```js
const config = {
    cc: 'ddd',
}

class Test extends Component {
    output() {
        console.log(config.cc)
    }
    render() {
        return (
            <Navigation className={s.good}>
                <BaseButton onClick={::this.output}>US</BaseButton>
                <BaseButton className={s.bad}>CN</BaseButton>
                <BaseButton>UK</BaseButton>
            </Navigation>
        )
    }
}

export default withStyles(s)(Test)
```