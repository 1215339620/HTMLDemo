
$(function () {
    $(".hero-list li").mouseenter(function () {
        $(this).addClass("active");
        $(this).siblings('li').removeClass("active");
    });
})
$(".type .cl li").click(function () {
    $(this).addClass("sel");
    $(this).siblings('li').removeClass("sel");
});
// // 模态框
// $('#exampleModal').on('show.bs.modal', function (event) {
//     var button = $(event.relatedTarget) // Button that triggered the modal
//     var recipient = button.data('whatever') // Extract info from data-* attributes
// })


$(document).ready(function () {
    render();
    var localDate = [];
    //获取本地
    function getDate() {
        var local = localStorage.getItem("local");
        if (local) {
            //将字符串改为数组
            return JSON.parse(local);
        } else {
            return [];
        }
    }

    //保存本地
    function saveLocal(local) {
        localStorage.setItem("local", JSON.stringify(local));
        render();
    }

    function render() {
        var data = getDate();
        // console.log(data);
        //清空之前存在的内容
        $(".hero").empty();
        for (let i = 0; i < data.length; i++) {
            // console.log(local[i]);
            //添加到页面中
            $(".hero").append(
                "<li class='heroLi' id=" + i + "><div class='example'><img src='" + data[i].imgurl + "' class='hero-img'><img src='images/错误.png' class='del'><button type='button' class='change' data-toggle='modal' data-target='#exampleModal'><img src='images/修改.png' class='changeimg'/></button><p id='occupation'>" + data[i].occupation + "</p><p class='name'>" + data[i].heroName + "</p></div></li>");
        }
    }
    //--------增-----------------增
    $("#addbtn").on("click", function () {
        $(".type .cl .all").siblings('li').removeClass("sel");
        $(".type .cl .all").addClass("sel");
        let inputName = $("#hero-name").val();
        let occ = $("#pro").val();
        let img = "images/" + inputName + ".png";
        var local = getDate();
        if (occ == ""||inputName.trim()=="") {
            alert("输入有误！");
            $("#hero-name").val("");
            $("#pro").val("");
        } else {
            local.push({
                heroName: inputName,
                occupation: occ,
                imgurl: img
            })
            $("#hero-name").val("");
            $("#pro").val("");
            saveLocal(local);
        }
    });
    // ------------删-----------------------------
    $(".hero").on("click", ".del", function () {
        var local = getDate();
        var index = $(this).parent().parent().attr("id");
        local.splice(index, 1);
        saveLocal(local);
    })

    //------------------改------------------------
    $(".hero").on("click", ".change", function () {
        var example = $(this).parent().parent();
        // console.log(example);
        var local = getDate();
        $("#heroName").val("");
        $("#occ").val("");
        $("#login").click(function () {
            var index = example.attr("id");
            var nameInput = $("#heroName").val();
            var occInput = $("#occ").val();
            var imgNew = "images/" + nameInput + ".png";
            if(nameInput==""||occInput==""){
                
            }else{
                local.splice(index, 1, {
                    heroName: nameInput,
                    occupation: occInput,
                    imgurl: imgNew
                });
                // console.log(index);
                saveLocal(local);
            }
        })
    })
    //-------------------------查--------------------
    $("#clearSearch").click(function () {
        $(".searchHero").empty();
        $(".searchList").hide();
    })
    $("#searchBtn").click(function () {
        $(".searchList").show();
        var searchName = $("#search").val();
        $("#clearSearch").show();
        var local = getDate();
        // console.log(searchName);
        if (searchName.trim() == ("")) {
            alert("请输入名称");
            $("#search").val("");
        } else {
            $("#search").val("");
            $(".searchHero").empty();
            for (let i = 0; i < local.length; i++) {
                if (searchName == local[i].heroName) {
                    console.log(i);
                    $(".searchHero").append("<li class='heroLi' id=" + i + "><div class='example'><img src='" + local[i].imgurl + "' class='hero-img'><p id='occupation'>" + local[i].occupation + "</p><p class='name'>" + local[i].heroName + "</p></div></li>")
                }
            }

        }
    })
    //-----------------------分类----------------------
    //全部
    $(".cl").click(function () {
        $(".searchList").hide();
    })
    $(".all").click(function () {
        render();
    })

    //坦克
    $(".tank").click(function () {
        var local = getDate();
        $(".hero").empty();
        for (let i = 0; i < local.length; i++) {
            if (local[i].occupation == "坦") {
                $(".hero").append(
                    "<li class='heroLi' id=" + i + "><div class='example'><img src='" + local[i].imgurl + "' class='hero-img'><img src='images/错误.png' class='del'><button type='button' class='change' data-toggle='modal' data-target='#exampleModal'><img src='images/修改.png' class='changeimg'/></button><p id='occupation'>" + local[i].occupation + "</p><p class='name'>" + local[i].heroName + "</p></div></li>");
            }

        }
    })
    //战士
    $(".warrior").click(function () {
        var local = getDate();
        $(".hero").empty();
        for (let i = 0; i < local.length; i++) {
            if (local[i].occupation == "战") {
                $(".hero").append(
                    "<li class='heroLi' id=" + i + "><div class='example'><img src='" + local[i].imgurl + "' class='hero-img'><img src='images/错误.png' class='del'><button type='button' class='change' data-toggle='modal' data-target='#exampleModal'><img src='images/修改.png' class='changeimg'/></button><p id='occupation'>" + local[i].occupation + "</p><p class='name'>" + local[i].heroName + "</p></div></li>");
            }

        }
    })
    //刺客
    $(".assassin").click(function () {
        var local = getDate();
        $(".hero").empty();
        for (let i = 0; i < local.length; i++) {
            if (local[i].occupation == "刺") {
                $(".hero").append(
                    "<li class='heroLi' id=" + i + "><div class='example'><img src='" + local[i].imgurl + "' class='hero-img'><img src='images/错误.png' class='del'><button type='button' class='change' data-toggle='modal' data-target='#exampleModal'><img src='images/修改.png' class='changeimg'/></button><p id='occupation'>" + local[i].occupation + "</p><p class='name'>" + local[i].heroName + "</p></div></li>");
            }

        }
    })
    //法师
    $(".master").click(function () {
        var local = getDate();
        $(".hero").empty();
        for (let i = 0; i < local.length; i++) {
            if (local[i].occupation == "法") {
                $(".hero").append(
                    "<li class='heroLi' id=" + i + "><div class='example'><img src='" + local[i].imgurl + "' class='hero-img'><img src='images/错误.png' class='del'><button type='button' class='change' data-toggle='modal' data-target='#exampleModal'><img src='images/修改.png' class='changeimg'/></button><p id='occupation'>" + local[i].occupation + "</p><p class='name'>" + local[i].heroName + "</p></div></li>");
            }

        }
    })
    //射手
    $(".shooter").click(function () {
        var local = getDate();
        $(".hero").empty();
        for (let i = 0; i < local.length; i++) {
            if (local[i].occupation == "射") {
                $(".hero").append(
                    "<li class='heroLi' id=" + i + "><div class='example'><img src='" + local[i].imgurl + "' class='hero-img'><img src='images/错误.png' class='del'><button type='button' class='change' data-toggle='modal' data-target='#exampleModal'><img src='images/修改.png' class='changeimg'/></button><p id='occupation'>" + local[i].occupation + "</p><p class='name'>" + local[i].heroName + "</p></div></li>");
            }

        }
    })
    //辅助
    $(".assist").click(function () {
        var local = getDate();
        $(".hero").empty();
        for (let i = 0; i < local.length; i++) {
            if (local[i].occupation == "辅") {
                $(".hero").append(
                    "<li class='heroLi' id=" + i + "><div class='example'><img src='" + local[i].imgurl + "' class='hero-img'><img src='images/错误.png' class='del'><button type='button' class='change' data-toggle='modal' data-target='#exampleModal'><img src='images/修改.png' class='changeimg'/></button><p id='occupation'>" + local[i].occupation + "</p><p class='name'>" + local[i].heroName + "</p></div></li>");
            }

        }
    })

})