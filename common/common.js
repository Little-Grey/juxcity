$(function () {
    // 初始化
    layui.use(['element', 'form', 'table', 'laypage'], function () {
        var element = layui.element;
        var form = layui.form;
        var table = layui.table;
        var laypage = layui.laypage;

        //一些事件监听
        element.on('tab(demo)', function (data) {
            console.log(data);
        });
        //执行一个laypage实例---分页;管理员设置
        // laypage.render({
        //     elem: 'test1' //注意，这里的 test1 是 ID，不用加 # 号
        //         ,
        //     count: 50 //数据总数，从服务端得到
        // });

        //第一个实例
        table.render({
            elem: '#demo',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '账号',
                        width: 160
                    }, {
                        field: 'username',
                        title: '角色',
                        width: 160
                    }, {
                        field: 'sex',
                        title: '注册时间',
                        width: 160,
                        sort: true
                    }, {
                        field: 'city',
                        title: '最后登陆时间',
                        width: 160,
                        sort: true,
                    }, {
                        field: 'sign',
                        title: '最后ip',
                        width: 160
                    }, {
                        field: 'experience',
                        title: '状态',
                        width: 160,
                        sort: true,
                        templet: '#titleTpl' //添加了模版引擎的数据,添加了按钮
                    }, {
                        field: 'score',
                        title: '操作',
                        width: 160,
                        templet: '#btn_management'
                    }
                ]
            ],
            request: {
                pageName: 'page' //页码的参数名称，默认：page
                    ,
                limitName: 'limit' //每页数据量的参数名，默认：limit
            }

        });
        // 角色,数据第二个实例化
        table.render({
            elem: '#role',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '名称',
                        width: '50%',

                    }, {
                        field: 'score',
                        title: '操作',
                        width: '50%',
                        templet: '#btn_role'
                    }
                ]
            ]
        });
        //管理员日记,第三个数据列表实例化
        table.render({
            elem: '#diary_lists',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '管理员',
                        width: '25%',
                    }, {
                        field: 'experience',
                        title: '时间',
                        width: '25%',
                        sort: true
                    }, {
                        field: 'score',
                        title: 'IP',
                        width: '25%'
                    }, {
                        field: 'score',
                        title: '备注',
                        width: '25%'
                    }
                ]
            ]
        });
        // 用户管理数据列表实例化
        table.render({
            elem: '#user_list',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '昵称',
                        width: 142,
                    }, {
                        field: 'username',
                        title: '性别',
                        width: 142
                    }, {
                        field: 'sex',
                        title: '等级/经验值',
                        width: 142,
                    }, {
                        field: 'city',
                        title: '达人',
                        width: 142
                    }, {
                        field: 'sign',
                        title: '个性签名',
                        width: 142
                    }, {
                        field: 'experience',
                        title: '注册时间',
                        width: 142,
                        sort: true
                    }, {
                        field: 'score',
                        title: '最后登录时间',
                        width: 142,
                        sort: true
                    }, {
                        field: 'classify',
                        title: '最后登录IP',
                        width: 142
                    }, {
                        field: 'wealth',
                        title: '状态',
                        width: 142,
                        sort: true,
                        templet: '#btn_state_01'
                    }, {
                        field: 'wealth',
                        title: '操作',
                        width: 142,
                        templet: '#btn_handle_01'
                    }
                ]
            ]
        });
        // 标签管理数据列表实例化
        table.render({
            elem: '#labels_list',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '名称',
                        width: 142,
                    }, {
                        field: 'username',
                        title: '引用次数',
                        width: 142,
                        sort: true
                    }, {
                        field: 'sex',
                        title: '热门',
                        width: 142,
                        sort: true,
                        templet: '#btn_hot_01'
                    }, {
                        field: 'city',
                        title: '热门排序',
                        width: 142,
                        sort: true
                    }, {
                        field: 'sign',
                        title: '推荐',
                        width: 142,
                        sort: true,
                        templet: '#btn_recommend_01'
                    }, {
                        field: 'experience',
                        title: '推荐排序',
                        width: 142,
                        sort: true
                    }, {
                        field: 'score',
                        title: '官方',
                        width: 142,
                        sort: true,
                        templet: '#btn_official_01'
                    }, {
                        field: 'classify',
                        title: '添加时间',
                        width: 142
                    }, {
                        field: 'wealth',
                        title: '状态',
                        width: 142,
                        sort: true,
                        templet: '#btn_state_02'
                    }, {
                        field: 'wealth',
                        title: '操作',
                        width: 142,
                        templet: '#btn_handle_02'
                    }
                ]
            ]


        });
        // 话题管理数据列表实例化
        table.render({
            elem: '#topic_list',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '缩略图',
                        width: 178,
                        templet: '#topic_thumbnail'
                    }, {
                        field: 'username',
                        title: '封面图',
                        width: 178,
                        templet: '#topic_cover'
                    }, {
                        field: 'sex',
                        title: '标题',
                        width: 178,
                    }, {
                        field: 'city',
                        title: '内容',
                        width: 178,
                    }, {
                        field: 'sign',
                        title: '添加时间',
                        width: 178,
                        sort: true,
                    }, {
                        field: 'experience',
                        title: '推荐',
                        width: 178,
                        sort: true,
                        templet: '#btn_recommend_02'
                    }, {
                        field: 'wealth',
                        title: '状态',
                        width: 142,
                        sort: true,
                        templet: '#btn_state_03'
                    }, {
                        field: 'wealth',
                        title: '操作',
                        width: 178,
                        templet: '#btn_handle_03'
                    }
                ]
            ]


        });
        // 类目数据列表实例化
        table.render({
            elem: '#category_list',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '父类名称',
                        width: 178,
                    }, {
                        field: 'username',
                        title: '名称',
                        width: 178,
                    }, {
                        field: 'sex',
                        title: '品牌数',
                        width: 178,
                        sort: true
                    }, {
                        field: 'city',
                        title: '添加时间',
                        width: 178,
                        sort: true
                    }, {
                        field: 'wealth',
                        title: '状态',
                        width: 142,
                        sort: true,
                        templet: '#btn_state_04'
                    }, {
                        field: 'wealth',
                        title: '操作',
                        width: 178,
                        templet: '#btn_handle_04'
                    }
                ]
            ]


        });
        // 品牌系列管理数据列表实例化
        table.render({
            elem: '#brand_list',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '名称',
                        width: 178,
                    }, {
                        field: 'username',
                        title: '描述',
                        width: 178,
                    }, {
                        field: 'sex',
                        title: '系列数',
                        width: 178,
                        sort: true
                    }, {
                        field: 'city',
                        title: '官方',
                        width: 178,
                        sort: true,
                        templet: '#btn_official_02'
                    }, {
                        field: 'city',
                        title: '添加时间',
                        width: 178,
                        sort: true
                    }, {
                        field: 'wealth',
                        title: '状态',
                        width: 142,
                        sort: true,
                        templet: '#btn_state_05'
                    }, {
                        field: 'wealth',
                        title: '操作',
                        width: 178,
                        templet: '#btn_handle_05'
                    }
                ]
            ]


        });
        // 品牌管理据列表实例化
        table.render({
            elem: '#Series_list',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '品牌名称',
                        width: 178,
                    }, {
                        field: 'username',
                        title: '名称',
                        width: 178,
                    }, {
                        field: 'sex',
                        title: '分数',
                        width: 178,
                        sort: true
                    }, {
                        field: 'city',
                        title: '官方',
                        width: 178,
                        sort: true,
                        templet: '#btn_official_03'
                    }, {
                        field: 'city',
                        title: '添加时间',
                        width: 178,
                        sort: true
                    }, {
                        field: 'wealth',
                        title: '状态',
                        width: 142,
                        sort: true,
                        templet: '#btn_state_06'
                    }, {
                        field: 'wealth',
                        title: '操作',
                        width: 178,
                        templet: '#btn_handle_06'
                    }
                ]
            ]


        });
        /* 搜索热词管理 */
        /*  */
        /* 广告管理 */
        table.render({
            elem: '#advertising_list',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '图片',
                        width: 178,
                        templet: '#advertising_img'
                    }, {
                        field: 'username',
                        title: '位置',
                        width: 178,
                    }, {
                        field: 'sex',
                        title: '类型',
                        width: 178
                    }, {
                        field: 'city',
                        title: '官方',
                        width: 178,
                        sort: true,
                    }, {
                        field: 'city',
                        title: '添加时间',
                        width: 178,
                        sort: true
                    }, {
                        field: 'wealth',
                        title: '状态',
                        width: 142,
                        sort: true,
                        templet: '#btn_state_07'
                    }, {
                        field: 'wealth',
                        title: '操作',
                        width: 178,
                        templet: '#btn_handle_07'
                    }
                ]
            ]


        });
        /* 申请达人 */
        /*  */
        /* PO图 */
        table.render({
            elem: '#Po_list',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '用户昵称',
                        width: 158,
                        templet: '#Po_img_01'
                    }, {
                        field: 'username',
                        title: '图片',
                        width: 158,
                        templet: '#Po_img_02'
                    }, {
                        field: 'sex',
                        title: '内容',
                        width: 80,
                    }, {
                        field: 'city',
                        title: '点赞数',
                        width: 80,
                        sort: true,
                    }, {
                        field: 'sign',
                        title: '收藏数',
                        width: 80,
                        sort: true,
                    }, {
                        field: 'experience',
                        title: '评论数',
                        width: 80,
                        sort: true,
                    }, {
                        field: 'logins',
                        title: '浏览数',
                        width: 80,
                        sort: true,
                    }, {
                        field: 'score',
                        title: '添加时间',
                        width: 100,
                        sort: true,
                    }, {
                        field: 'classify',
                        title: '推荐',
                        width: 80,
                        sort: true,
                        templet: '#btn_recommend_03'
                    }, {
                        field: 'tests_01',
                        title: '状态',
                        width: 158,
                        sort: true,
                        templet: '#btn_state_08'
                    }, {
                        field: 'wealth',
                        title: '操作',
                        // width: 200,
                        templet: '#btn_handle_08'
                    }
                ]
            ]


        });
        /* 问答 */
        table.render({
            elem: '#answers_list',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '用户昵称',
                        width: 158,
                        templet: '#answers_img'
                    }, {
                        field: 'username',
                        title: '标题',
                        width: 158,
                    }, {
                        field: 'sex',
                        title: '内容',
                        width: 158,
                    }, {
                        field: 'city',
                        title: '点赞数',
                        width: 80,
                        sort: true,
                    }, {
                        field: 'sign',
                        title: '收藏数',
                        width: 80,
                        sort: true,
                    }, {
                        field: 'experience',
                        title: '评论数',
                        width: 80,
                        sort: true,
                    }, {
                        field: 'logins',
                        title: '浏览数',
                        width: 80,
                        sort: true,
                    }, {
                        field: 'score',
                        title: '添加时间',
                        width: 100,
                        sort: true,
                    }, {
                        field: 'classify',
                        title: '推荐',
                        width: 80,
                        sort: true,
                        templet: '#btn_recommend_04'
                    }, {
                        field: 'tests_01',
                        title: '状态',
                        width: 158,
                        sort: true,
                        templet: '#btn_state_09'
                    }, {
                        field: 'wealth',
                        title: '操作',
                        // width: 200,
                        templet: '#btn_handle_09'
                    }
                ]
            ]


        });
        /* 视频 */
        table.render({
            elem: '#video_list',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '用户昵称',
                        width: 158,
                        templet: '#video_img_01'
                    }, {
                        field: 'username',
                        title: '封面图',
                        width: 158,
                        templet: '#video_img_02'
                    }, {
                        field: 'sex',
                        title: '标题',
                        width: 80,
                    }, {
                        field: 'city',
                        title: '内容',
                        width: 80,
                        sort: true,
                    }, {
                        field: 'content',
                        title: '点赞数',
                        width: 80,
                        sort: true,
                    }, {
                        field: 'sign',
                        title: '收藏数',
                        width: 80,
                        sort: true,
                    }, {
                        field: 'experience',
                        title: '评论数',
                        width: 80,
                        sort: true,
                    }, {
                        field: 'logins',
                        title: '浏览数',
                        width: 80,
                        sort: true,
                    }, {
                        field: 'score',
                        title: '添加时间',
                        width: 100,
                        sort: true,
                    }, {
                        field: 'classify',
                        title: '推荐',
                        width: 80,
                        sort: true,
                        templet: '#btn_recommend_05'
                    }, {
                        field: 'tests_01',
                        title: '状态',
                        width: 158,
                        sort: true,
                        templet: '#btn_state_10'
                    }, {
                        field: 'wealth',
                        title: '操作',
                        // width: 200,
                        templet: '#btn_handle_10'
                    }
                ]
            ]


        });
        /* 日记 */
        table.render({
            elem: '#diary_list',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '用户昵称',
                        width: 158,
                        templet: '#diary_img'
                    }, {
                        field: 'username',
                        title: '标题',
                        width: 158,
                    }, {
                        field: 'city',
                        title: '内容',
                        width: 80,
                        sort: true,
                    }, {
                        field: 'content',
                        title: '点赞数',
                        width: 80,
                        sort: true,
                    }, {
                        field: 'sign',
                        title: '收藏数',
                        width: 80,
                        sort: true,
                    }, {
                        field: 'experience',
                        title: '评论数',
                        width: 80,
                        sort: true,
                    }, {
                        field: 'logins',
                        title: '浏览数',
                        width: 80,
                        sort: true,
                    }, {
                        field: 'score',
                        title: '添加时间',
                        width: 100,
                        sort: true,
                    }, {
                        field: 'classify',
                        title: '推荐',
                        width: 80,
                        sort: true,
                        templet: '#btn_recommend_06'
                    }, {
                        field: 'tests_01',
                        title: '状态',
                        width: 158,
                        sort: true,
                        templet: '#btn_state_11'
                    }, {
                        field: 'wealth',
                        title: '操作',
                        // width: 200,
                        templet: '#btn_handle_11'
                    }
                ]
            ]


        });
        /* 评论 */
        table.render({
            elem: '#discuss_list',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '昵称',
                        width: 178,
                        templet: '#discuss_img'
                    }, {
                        field: 'username',
                        title: '文章',
                        width: 178,
                    }, {
                        field: 'city',
                        title: '评论内容',
                        width: 178,
                        sort: true,
                    }, {
                        field: 'content',
                        title: '点赞数',
                        width: 178,
                        sort: true,
                    }, {
                        field: 'sign',
                        title: '回复数',
                        width: 178,
                        sort: true,
                    }, {
                        field: 'score',
                        title: '添加时间',
                        width: 178,
                        sort: true,
                    }, {
                        field: 'tests_01',
                        title: '状态',
                        width: 178,
                        sort: true,
                        templet: '#btn_state_12'
                    }, {
                        field: 'wealth',
                        title: '操作',
                        width: 178,
                        templet: '#btn_handle_12'
                    }
                ]
            ]


        });
        /* 回复 */
        table.render({
            elem: '#revert_list',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '评论内容',
                        width: 204,
                    }, {
                        field: 'username',
                        title: '被回复人',
                        width: 204,
                        templet: '#revert_img_01'
                    }, {
                        field: 'city',
                        title: '回复人',
                        width: 204,
                        sort: true,
                        templet: '#revert_img_02'
                    }, {
                        field: 'content',
                        title: '回复内容',
                        width: 204,
                        sort: true,
                    }, {
                        field: 'score',
                        title: '添加时间',
                        width: 204,
                        sort: true,
                    }, {
                        field: 'tests_01',
                        title: '状态',
                        width: 204,
                        sort: true,
                        templet: '#btn_state_13'
                    }, {
                        field: 'wealth',
                        title: '操作',
                        width: 204,
                        templet: '#btn_handle_13'
                    }
                ]
            ]


        });
        /* 产品统计 */
        table.render({
            elem: '#statistics_list',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '父类名称',
                        width: 476,
                    }, {
                        field: 'username',
                        title: '名称',
                        width: 476
                    }, {
                        field: 'tests_01',
                        title: '文章数',
                        width: 476,
                        sort: true,
                    }
                ]
            ]


        });
        /* 渠道管理 */
        table.render({
            elem: '#ditch_list',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '平台',
                        width: 238,
                    }, {
                        field: 'username',
                        title: '名称',
                        width: 238,
                    }, {
                        field: 'sex',
                        title: '标识',
                        width: 238,
                    },{
                        field: 'score',
                        title: '添加时间',
                        width: 238,
                        sort: true,
                    },  {
                        field: 'tests_01',
                        title: '状态',
                        width: 238,
                        sort: true,
                        templet: '#btn_state_14'
                    }, {
                        field: 'wealth',
                        title: '操作',
                        width: 238,
                        templet: '#btn_handle_14'
                    }
                ]
            ]


        });
        /* 版本管理 */
        table.render({
            elem: '#versions_list',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '平台',
                        width: 178,
                    }, {
                        field: 'username',
                        title: '渠道',
                        width: 178,
                    }, {
                        field: 'sex',
                        title: '版本',
                        width: 178,
                    },{
                        field: 'city',
                        title: '下载地址',
                        width: 178,
                    }, {
                        field: 'content',
                        title: '更新说明',
                        width: 178,
                    },{
                        field: 'score',
                        title: '添加时间',
                        width: 178,
                        sort: true,
                    },  {
                        field: 'tests_01',
                        title: '强制更新',
                        width: 178,
                        sort: true,
                        templet: '#btn_state_15'
                    }, {
                        field: 'wealth',
                        title: '操作',
                        width: 178,
                        templet: '#btn_handle_15'
                    }
                ]
            ]


        });
         /* 数据表优化 */
         table.render({
            elem: '#data_list',
            height: '460px',
            url: './test.json',
            // url: 'http://www.layui.com/demo/table/user/?page=1&limit=30',
            page: true, //开启分页
            skin: 'nob', //无边框
            limit: 10, //等又了后台,这里显示当前每页中数据的条数
            count: 2000, //page指的是当前页码
            cols: [
                [ //表头
                    {
                        field: 'id',
                        title: '数据表',
                        width: 178,
                    }, {
                        field: 'username',
                        title: '数据表类型',
                        width: 178,
                    }, {
                        field: 'sex',
                        title: '记录数',
                        width: 178,
                        sort: true,
                    },{
                        field: 'city',
                        title: '数据',
                        width: 178,
                        sort: true,
                    }, {
                        field: 'content',
                        title: '碎片',
                        width: 178,
                        sort: true,
                    },{
                        field: 'score',
                        title: '字符集',
                        width: 178,
                    },  {
                        field: 'tests_01',
                        title: '状态',
                        width: 178,
                    }, {
                        field: 'wealth',
                        title: '操作',
                        width: 178,
                    }
                ]
            ]


        });
    })
});