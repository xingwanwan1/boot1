/**
 * Created by 赵晓刚 on 2017/4/25.
 */
angular.module("app")
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("/community/preface");
        $urlRouterProvider.when("/community","/community/preface");
        $stateProvider
            .state({
                name:"index",
                url:"/index",
                template:"首页"
            })
            .state({
                name:"community",
                url:"/community",
                templateUrl:"router/community.html"
            })
            .state({
                name:"party",
                url:"/party",
                template:"党组织活动服务"
            })
            .state({
                name:"resident",
                url:"/resident",
                template:"居民自治活动服务"
            })
            .state({
                name:"community.preface",
                url:"/preface",
                templateUrl:"router/preface.html"
            })
            .state({
                name:"community.list",
                url:"/list",
                templateUrl:"router/list.html"
            })
            .state({
                name:"community.summary",
                url:"/summary",
                templateUrl:"router/summary.html"
            })
            .state({
                name:"community.look",
                url:"/look",
                templateUrl:"router/look.html"
            })
    })
    .directive("myFile", function () {
        return {
            templateUrl: 'router/input.html',
            restrict: 'E',
            scope: {},
            controller: function ($scope) {
                $scope.fileid = 'file' + $scope.$id;
            },
            link: function (scope, ele) {
                var inputFile = ele.find("div");
                var input = $(inputFile).find('input');
                input.on("change", function () {
                    var reader = new FileReader();
                    reader.readAsDataURL(this.files[0]);
                    reader.onload = function () {
                        //console.log(reader.result);
                        //console.log( $(inputFile).find("label")[0])
                        $(inputFile).find("label")[0].style.background='url('+this.result+') no-repeat center center';
                        $(inputFile).find("label")[0].style.backgroundSize="100% 100%";
                    }
                })
            }
        }
    })
