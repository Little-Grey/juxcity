$(function () {
    // 退出登录
    $('.pc_quit s').on('click', function () {
        var r = confirm("确认退出?")
        if (r == true) {
            alert('退出成功');
        };
    })

    // 导航的索引/
    $('.nav_ul li dl dd').each(function (i) {
        $(this).on('click', function () {
            sessionStorage.setItem('index', i);
            change(i);
        })
    })
    // sessionStorage
    $(document).ready(function () {


        var user = JSON.parse(sessionStorage.getItem('index'))
        change(user);
    });

    //导航tab切换,show,hied
    function change(temp_i) {
        $("#outer").children().eq(temp_i).show().siblings().hide();
        // 导航的点击索引
        $('.nav_ul li dl dd').eq(temp_i).addClass('layui-this').siblings().removeClass('layui-this');

    };


    // $('.nav_ul li').each(function(i){
    //     // console.log(i);
    //     $(this).on('click',function(){
    //         // console.log(i)
    //         sessionStorage.setItem('index', i);
    //         $('.nav_ul li').eq(i).addClass('layui-nav-itemed');
    //     })
    // })

    // 调用
    getHeight('.add_administrator', '.layui-bg-cyan');
    getHeight('#outer', '.layui-bg-cyan');

    /**
     * 封装了一个获取到整个屏幕的高度.100vh单位系获取整个屏幕的宽度,
     * 
     * @param {*} box1 是下面的盒子，
     * @param {*} box2 是导航栏顶部的盒子
     */
    function getHeight(box1, box2) {
        $(box1).css({
            'height': $(window).height() - $(box2).height()
        });
    }




    // 点击新增管理员弹出对应页面
    $('.btn_two').on('click', function () {
        $('.add_administrator').show();
    });

    // 点击新增管理员页面返回,返回上一层
    $('.back_admin').on('click', function () {
        var r = confirm("确认返回?")
        if (r == true) {
            $('.add_administrator').hide();
        };
    });

    // 点击增加角色弹出对应页面-添加角色页面
    $('.part').on('click', function () {
        $('.add_role').show();
    })
    // 点击新添加角色页面返回,返回上一层
    $('.back_part').on('click', function () {
        var r = confirm("确认返回?")
        if (r == true) {
            $('.add_role').hide();
        };
    })







});