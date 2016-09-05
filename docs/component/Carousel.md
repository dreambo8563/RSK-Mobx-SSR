## 基本想法 轮播的内容由children传入
组件内部计算基本容器尺寸

### 要求
需要第一个children外面带个div,如下面例子
轮播的小点部分的css需要自己他调整

### 实例

轮播本身的特点应该是每个children都是一样的组件,关键是宽高等属性一样
>注意第一个children外层div 和display 样式是必须的

children 组建(下面的ImageWithStatusText) 应该有自己明确宽高样式

```js
      <MyComponent className={s.test}>
          <div style={{ display: 'inline-block' }}>
            <ImageWithStatusText
              href="www.baidu.com"
              src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png" />
          </div>

          <ImageWithStatusText
            href="www.baidu.com"
            src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png" />
          <ImageWithStatusText
            href="www.baidu.com"
            src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png" />
          <ImageWithStatusText
            href="www.baidu.com"
            src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png" />
          <ImageWithStatusText
            href="www.baidu.com"
            src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png" />
        </MyComponent>
```