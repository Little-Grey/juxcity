$(function () {
    console.log(2222222);
    $('.nav_ul li dl dd').each(function (i) {
        $(this).on('click', function () {
            change(i);
        })
    })


    //导航tab切换,show,hied
    function change(temp_i) {
        $("#outer").children().eq(temp_i).show();
        $("#outer").children().eq(temp_i).siblings().hide()
    };








    // 搜索按钮的触发
    $('.btn_two').on('click', function () {
        console.log(1);
    })




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

    $(window).resize(function () {
        getHeight('.d2', '.d1');
    });

});