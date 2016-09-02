## 一般的tab两部分

### 导航部分
### 内容部分

可以由Navigation和Container来组合
Container 就是一个接受各种属性的div

### 实例
最灵活的可能


```js
@observer
class Test extends Component {
    @observable selectedIndex = 0
    @observable tabContent = (<div></div>)
    output() {
        this.selectedIndex = 0
        this.contentRender()
    }
    output1() {
        this.selectedIndex = 1
        this.contentRender()
    }
    contentRender() {
        switch (this.selectedIndex) {
            case 0: this.tabContent = (<h1>0000</h1>); break
            case 1: this.tabContent = (<h1>11111</h1>); break
            default: this.tabContent = (<h1>4444</h1>); break
        }
    }
    render() {
        return (
            <div>
                <Navigation className={s.good}>
                    <BaseButton onClick={:: this.output}>US</BaseButton>
                    <BaseButton className={s.bad} onClick={:: this.output1}>CN</BaseButton >
                    <BaseButton>UK</BaseButton>
                 </Navigation >
                 <Container className={s.container}>
                     {this.tabContent }
                 </Container>
            </div >
        )
    }
}

export default withStyles(s)(Test)
```