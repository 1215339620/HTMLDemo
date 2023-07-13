window.onload = function () {
    //初始化方法
    Day();
    starOnclick();
    delOnclik();
    change();
    // circleOnclick();
    changeBackImg();
    todoNumber();
    doneNumber();
    prevent();
    Carousel();
    //年月日 周几
    function Day() {
        var t = new Date();
        var year = t.getFullYear();
        var month = t.getMonth() + 1;
        var data = t.getDate();
        var weekday = new Array(7);
        var day = t.getDay();
        weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
        document.getElementById('data').innerHTML = year + "年" + month + "月" + data + "日   " + weekday[day] + "&nbsp;&nbsp";
    }
    //时间跳动
    var time = setInterval(function () {
        timer()
    }, 1000);

    function timer() {
        var t = new Date();
        var hour = t.toLocaleTimeString();
        document.querySelector(".time").innerHTML = hour;
    }

    //回车键添加任务
    var input = document.getElementById('input');
    input.onkeydown = function (event) {
        if (event.keyCode == 13) {
            addNew();
        }
    }
    //给添加按钮添加功能
    var add = document.getElementById('add');
    add.onclick = function () {
        addNew();
    }
    //封装添加新任务方法
    function addNew() {
        let task = input.value;
        if (task.trim() == '') {
            alert("！！！请输入任务！！！");
            input.value = '';
        } else {
            let example = document.querySelector('.todo-example');
            let newTask = example.cloneNode(true);
            //复制节点  ture可以复制该节点内的节点，false则只复制该节点
            //通过newTask找到example中的todo-item
            let newTaskNode = newTask.querySelector('.todo-item');
            newTaskNode.querySelector(".todo-text").innerText = task;
            var del=newTask.querySelector('.del');
            del.style.display='none';
            // console.log(newTaskNode);
            // document.getElementsByClassName('todo-item')[0].style.animation=' sli 1s cubic-bezier(0.46, 0.03, 0.52, 0.96) 1';
            //将输入的task加到未完成的第一个任务
            let firstTodo = document.querySelector('.todo-list .todo-item');
            document.querySelector('.todo-main').insertBefore(newTaskNode, firstTodo);
            //添加之后，输入框变为空
            input.value = '';
            // circleOnclick();
        }
        //点击圆圈完成任务
        var staus = null;
        var todo = document.querySelector('.unaccomplished');
        todo.onclick = function (event) {
            // var staus =1;
            var timingSelect = todo.parentElement.parentElement;
            var timing = timingSelect.querySelector('.timing');
            var delayTime = timingSelect.querySelector('.delay');
            var del=timingSelect.querySelector('.del');
            if (todo.src.includes("circle1")) {
                //判断是否完成
                staus = 2;
                //点击切换已完成
                todo.setAttribute('src', 'photos/circle2.png');
                //点击圆圈，任务加横线
                let todoText = todo.parentElement.parentElement.querySelector('.todo-text');
                // todoText.style.textDecoration='line-through';
                todoText.setAttribute('style', 'color:grey;text-decoration: line-through;');
                // var timingSelect = todo.parentElement.parentElement;
                // var timing = timingSelect.querySelector('.timing');
                // var delayTime = timingSelect.querySelector('.delay');
                timing.style.display = 'none';
                delayTime.style.display = 'none';
                del.style.display='block';
                //将输入的task加到已完成的任务
                document.querySelector('.done-main').appendChild(todo.parentElement.parentElement);
                // console.log(timingSelect);
                todoNumber();
                doneNumber();
            } else {
                staus = 1;
                //点击切换未完成
                todo.setAttribute('src', 'photos/circle1.png');
                //点击圆圈，任务取消横线
                let todoText = todo.parentElement.parentElement.querySelector('.todo-text');
                // todoText.style.textDecoration='none';
                todoText.setAttribute('style', 'text-decoration=none;');
                // var timingSelect = todo.parentElement.parentElement;
                // var timing = timingSelect.querySelector('.timing');
                // var delayTime = timingSelect.querySelector('.delay');
                timing.style.display = 'block';
                delayTime.style.display = 'block';
                del.style.display='none';
                //将任务添加到未完成
                //将输入的task加到未完成的第一个任务
                let firstTodo = document.querySelector('.todo-list .todo-item');
                document.querySelector('.todo-main').insertBefore(todo.parentElement.parentElement, firstTodo);
                // console.log(timingSelect);
                todoNumber();
                doneNumber();
            }
        }
        //定时功能
        var timingSelect = document.querySelector('#timing');
        var delayTime = document.querySelector('#delayTime');
        
        var tim = 0;
        var delayTim = 0;
        //定义未定时的状态为0
        var state = 0;
        timingSelect.onchange = function () {
            tim = timingSelect.value;
            
            // console.log(tim);
            if (state == 0) {
                var timeOut = setInterval(() => {
                    console.log(tim);
                    tim--;
                    if (tim == 0) {
                        console.log(staus);
                        clearInterval(timeOut);
                        let a = confirm("定时时间已到！如果未完成清单任务，请确认是否使用延时功能。");
                        if (a == true) {
                            delayTime.removeAttribute('disabled');
                            //延时功能
                            //延时回车确定时间，实现功能
                            delayTime.onkeydown = function (event) {
                                if (event.key == 'Enter') {
                                    //阻止默认
                                    // console.log(11111);
                                    event.preventDefault();
                                    //让元素失去焦点
                                    this.blur();
                                    delayTim = delayTime.value;
                                    // console.log(delayTim);
                                    setTimeout(() => {
                                        alert("延时时间已到！");
                                        let it = timingSelect.parentElement.parentElement;
                                        let todo = it.querySelector('.unaccomplished');
                                        var del=it.querySelector('.del');
                                        todo.setAttribute('src', 'photos/circle2.png');
                                        //点击圆圈，任务加横线
                                        let todoText = it.querySelector('.todo-text');
                                        todoText.setAttribute('style', 'color:grey;text-decoration: line-through;');
                                        timingSelect.parentElement.style.display = 'none';
                                        delayTime.parentElement.style.display = 'none';
                                        todo.style.display = 'none';
                                        del.style.display='block';
                                        //将输入的task加到已完成的任务
                                        document.querySelector('.done-main').appendChild(it);
                                        todoNumber();
                                        doneNumber();
                                    }, 1000 * delayTim);
                                }
                            }
                        } else {
                            alert("您已完成该任务，继续加油吧！");
                            let it = timingSelect.parentElement.parentElement;
                            let todo = it.querySelector('.unaccomplished');
                            var del=it.querySelector('.del');
                            todo.setAttribute('src', 'photos/circle2.png');
                            //点击圆圈，任务加横线
                            let todoText = it.querySelector('.todo-text');
                            todoText.setAttribute('style', 'color:grey;text-decoration: line-through;');
                            timingSelect.parentElement.style.display = 'none';
                            delayTime.parentElement.style.display = 'none';
                            todo.style.display = 'none';
                            del.style.display='block';
                            //将输入的task加到已完成的任务
                            document.querySelector('.done-main').appendChild(it);
                            todoNumber();
                            doneNumber();
                        }
                    }
                    if (staus == 2) {
                        clearInterval(timeOut);
                    }
                }, 1000);
                state = 1;
            } else {
                alert("您已定时，请勿重复定时！");
                tim=0;
                clearInterval(timeOut);
            }
        }
        starOnclick();
        delOnclik();
        todoNumber();
        doneNumber();
        prevent();
        // fixTime();
    }
    //点击星星，使星星变化
    function starOnclick() {
        var stars = document.querySelectorAll('.star1');
        stars.forEach(function (star) {
            star.onclick = function () {
                if (star.src.includes('2')) {
                    star.setAttribute('src', 'photos/important1.png');
                } else {
                    star.setAttribute('src', 'photos/important2.png');
                }
            }
        })
    }
    //删除操作
    function delOnclik() {
        var dels = document.querySelectorAll('.del');
        dels.forEach(function (del) {
            del.onclick = function () {
                let c = confirm("您确认删除此项记录吗？");
                if (c == true) {
                    del.parentElement.parentElement.remove();
                }
                todoNumber();
                doneNumber();
                tim=0;
            }
        })
    }
    //切换主题
    function change() {

        let select = document.querySelector('#select');
        select.onchange = function () {
            let color = select.value;
            let container = document.querySelector('.container')
            container.setAttribute('style', 'background-color: ' + color + ';');
        }

    }
    //改变背景功能
    function changeBackImg() {
        var changeBack = document.getElementById('changeBackImg');
        var i = 1;
        changeBack.onclick = (() => {
            let container = document.querySelector('.container');
            container.setAttribute('style', 'background-image: url(photos/b' + i + '.jpg);');
            // i++;
            if (i < 4) {
                i++;
            } else {
                i = 1;
            }
        })
    }
    //未完成数与完成数
    function todoNumber() {
        let num = document.querySelector('.todo-main').children.length;
        document.querySelector('.todo-number').innerHTML = num;
    }

    function doneNumber() {
        let num = document.querySelector('.done-main').children.length;
        document.querySelector('.done-number').innerHTML = num;
    }
    //编辑时阻止回车键
    function prevent() {
        var toText = document.querySelector('.todo-text');
        toText.onkeydown = function (event) {
            if (event.key == 'Enter') {
                //阻止默认
                event.preventDefault();
                //让元素失去焦点
                this.blur();
            }
        }
    }
    let CarouselTimer = 0;

    function Carousel() {
        var scroll = document.getElementById('scroll');
        var timer = setInterval(function timerr() {
            CarouselTimer--;
            scroll.setAttribute('style', 'left:' + CarouselTimer + "px;");
            if (CarouselTimer == -400) {
                CarouselTimer = 0;
            }
        }, 12);
        scroll.onmouseover = function () {
            clearInterval(timer);
        }
        scroll.onmouseout = function () {
            Carousel();
        }
    }
}