	//此处绑定路由跳转的相关事项
function Router() {
  this.routes = {};
  this.currentUrl = '';
}
Router.prototype.route = function(path, callback) {
    this.routes[path] = callback || function(){};
};
//只刷新第一个路由后的路由，注意用的是slice方法
Router.prototype.refresh = function() {
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl]();
};
//初始化时监听load和hashchange两个方法
Router.prototype.init = function() {
	//在执行时，冒泡的时候，不执行，也就是刷新的时候不运行，及在使用load和hashchange的时候不调用
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}
window.Router = new Router();
window.Router.init();
//选择对应操作的页面元素
var content = document.querySelector('body');
var section = $('section')

// change Page anything
function changeBgColor(color) {
    //content.style.backgroundColor = color;
}
function changeDisplay(display){
	//t11.style.display = display;
}

Router.route('/', function() {
console.log("/")
});
Router.route('/allGoods', function() {
console.log('allGoods')
//section.html("<div>全部商品页面<div>")
});
Router.route('/householdApplianceShopping', function() {
console.log("householdApplianceShopping")
//section.html("<div>家电城<div>")
});
Router.route('/blackSky', function() {
console.log("blackSky")
//section.html("<div class='router_test1'>天黑黑<div>")
});
Router.route('/groupShopping', function() {
console.log("groupShopping")
//section.html("<div>团购<div>")
});
Router.route('/found', function() {
console.log("found")
//section.html("<div>发现<div>")
});
Router.route('/second-hand-goods', function() {
console.log("second-hand-goods")
//section.html("<div>二手特卖<div>")
});
Router.route('/WeiXinCard', function() {
console.log("WeiXinCard")
//section.html("<div>微信沃卡<div>")
});
Router.route('/famous', function() {
console.log("famous")
//section.html("<div>名品汇<div>")
});
Router.route('/allGoods/test1',function(){
	console.log("allGoods/test1")
	var section_contant = 
	"<div id='des'>32123</div>";
	section.html(section_contant)
	
	$("#des").load("pages/main.html")
})
