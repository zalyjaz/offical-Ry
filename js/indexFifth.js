
		var box = document.querySelector('#itemlist');
		var slide = document.querySelector('.slide');
		var arraw = document.querySelector('.arraw');
		var lis = document.querySelectorAll('li');
		var json = [ //  包含了5张图片里面所有的样式
			{ //  1
				width: 420,
				// height:340,
				top: 80,
				left: 0,
				bottom:80,
				opacity: 20,
				z: 2,
				id: 1,
				// transform:0.8
			},
			{ // 2
				width: 590,
				// height:420,
				top: 40,
				left: 40,
				bottom:40,
				opacity: 60,
				z: 3,
				id: 2,
				// transform:0.9
			},
			{ // 3
				width: 670,
				// height:500,
				top: 0,
				bottom:0,
				left: 80,
				opacity: 100,
				z: 4,
				id: 3,
				// transform:1
			},
			// {  // 4
			// 	width:600,
			// 	top:70,
			// 	left:550,
			// 	opacity:60,
			// 	z:3,
			// 	id:4
			// },
			// {   //5
			// 	width:400,
			// 	top:20,
			// 	left:650,
			// 	opacity:20,
			// 	z:2,
			// 	id:5
			// }
		];
		box.addEventListener('mouseover', function () {
			// console.log('aaa')
			animate(arraw, {
				opacity: 100
			});
		});
		box.addEventListener('mouseout', function () {
			// console.log('aaa')
			animate(arraw, {
				opacity: 0
			});
		});
		var next = document.querySelector('.next');
		var prev = document.querySelector('.prev');
		var timer = null;
		var flag = true;
		next.addEventListener('click', function () {
			clearInterval(timer);
			if (flag == true) {
				move(true);
				flag = false;
			}
		});
		next.addEventListener('mouseleave', function () {
			clearInterval(timer);
			run();
		});
		prev.addEventListener('click', function () {
			clearInterval(timer);
			if (flag == true) {
				move(false);
				flag = false;
			}
		});
		prev.addEventListener('mouseleave', function () {
			// alert('prev')
			// clearInterva(timer);
			run();
		});

		move();
		run();

		function run() {
			clearInterval(timer);
			timer = setInterval(function () {
				// console.log('run')
				if (flag == true) {
					flag = false;
					move(true);
				}
			}, 2000);
		}

		function move(x) {
			if (x != undefined) {
				if (x) {
					json.push(json.shift());
				} else {
					json.unshift(json.pop());
				};
			};

			for (var i = 0; i < json.length; i++) {
				animate(lis[i], {
					// width: json[i].width,
					// height:json[i].height,
					top: json[i].top,
					bottom: json[i].bottom,
					left: json[i].left,
					opacity: json[i].opacity,
					zIndex: json[i].z,
					// transform:json[i].transform
				}, function () {
					flag = true;
				})
			};
		}

		function animate(obj, json, callback) {
			// 先停止定时器
			clearInterval(obj.timers);
			obj.timers = setInterval(function () {
				var stoped = true;
				// console.log('sss')
				for (var k in json) {
					// var leader = parseInt(getStyle(obj, k));
					var leader = 0;
					if (k == 'opacity') {
						leader = Math.round(getStyle(obj, k) * 100) || 100;
					} else {
						// console.log(json[k]);
						leader = parseInt(getStyle(obj, k)) || 0;
					};
					//         console.log(leader);
					// json[k]是目标位置
					var step = (json[k] - leader) / 10;
					step = step > 0 ? Math.ceil(step) : Math.floor(step);
					leader = leader + step;
					if (k == 'opacity') {
						obj.style[k] = leader / 100;
						obj.style['filter'] = 'alpha(opacity=' + leader + ')';
					} else if (k == 'zIndex') {
						obj.style['zIndex'] = json[k];
					}else {
						obj.style[k] = leader + "px";
					}
					if (leader != json[k]) {
						stoped = false;
					}
				};
				if (stoped) {
					// console.log('stop')
					clearInterval(obj.timers);
					callback && callback();
				};
			}, 50);
		};
		//获取属性值
		function getStyle(obj, attr) {
			if (obj.currentStyle) {
				return obj.currentStyle[attr];
			} else {
				return window.getComputedStyle(obj, null)[attr];
			};
		};
		//鼠标移入
		$("#itemlist ul li").on("mouseover",function () {
			clearInterval(timer);
			if (flag == true) {
				move(false);
				flag = false;
			}
		})
		//鼠标移出
		$("#itemlist ul li").on("mouseout",function () {
			run();
		})
		$(function(){
			$('#itemlist ul li').click(function(){
				var itemId=$(this).attr('id');
				if(itemId==='busby'){
					window.open('fifthChildrenFirst.html');
				}else if(itemId==='gridly'){
					window.open('fifthChildrenSecond.html');
				}else if(itemId==='reco'){
					window.open('fifthChildrenThree.html');
				}
			});
		})

