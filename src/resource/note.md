1. sessionStorage和localStorage 两者的唯一区别在于时效性。
sessionStorage在关闭窗口或标签页之后将会删除这些数据。
而localStorage则没有这样的特性，今天、下周、明年、一百年，甚至理论上的成千上万年后都能用，除非你手动去删除。

2. 报错：
Error in v-on handler (Promise/async): "
Error: Avoided redundant navigation to current location: “/profile”."

产生原因： 在profile页面点击 个人主页跳转到本页面产生
解决：
原@click="$router.push({ name: 'profile' }) 修改为：
@click="$router.push({ name: 'profile' },onComplete => {}, onAbort => {} )