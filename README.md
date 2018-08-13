# FrontPractive 

## 该项目是angular version 6.1.0， 使用angular cli 快速生成文件 


## Development server  启动服务

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. 
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build  创建发布文件
```angular2html
    npm run build 
```
默认生成文件到dist/下
发布环境时使用 `--prod` 参数


## Running unit tests  单元测试

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).


  

```
ng generate module **  --routing  创建一个module & routing

ng generate component ** 创建一个component 

```

####生成翻译文件

```$xslt
    npm run translate 
```
翻译文件生成后讲对应的source 改为对应的target 
复制 <source/> 标记，把它改名为 target，并把它的内容改为英语版的内容

#### 测试英文网站
```$xslt
    npm run start:en
```
#### 编译英文
```$xslt
    npm run build:en
```

###todo list

 
|todo说明 |进度 |
|:------|:---|
|http请求 | ok |
|路由守卫 | ok|
|国际化| 暂时生成不同项目ok |
|


1. http  请求  //done
2. 3层路由测试与组件之间的通讯
3. 路由守卫  // done
4. Resolve 预先获取组件数据（预加载）
5. 懒加载 && 预加载 懒加载OK
6. 国际化  (需要重新考虑新思路)  // 暂时生成不同项目
7. 共用组件（例：radio / modelBox ）
8. pipe directive 编写
9. 组件1，时间选择； ok
   组件2：分页  ok； 
   组件3； radio ；
   组件4：modelBox；
   组件5：loading 


















