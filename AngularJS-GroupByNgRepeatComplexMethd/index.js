var app = angular.module('groupbynestedngrepeatfunctionality', ['angular.filter']);
app.controller('GroupByNestedNgRepeatController', function ($scope, $window) {
    $scope.ShowMore = false;
    $scope.ItemDetails = [
        {
            ItemId: 1,
            TransactionId: "TX001",
            ItemCategory: "Computer",
            ItemCode: "KB384",
            ItemName: "KeyBoard",
            ItemOldPrice: "600",
            ItemNewPrice: "500",
            ShowMore:true
        },
    {
        ItemId: 2,
        TransactionId: "TX001",
        ItemCategory: "Computer",
        ItemCode: "MU932",
        ItemName: "Mouse",
        ItemOldPrice: "500",
        ItemNewPrice: "400",
        ShowMore: false
    },
    {
        ItemId: 3,
        TransactionId: "TX001",
        ItemCategory: "Computer",
        ItemCode: "PD843",
        ItemName: "Pendrive",
        ItemOldPrice: "600",
        ItemNewPrice: "400",
        ShowMore: false
    },
    {
        ItemId: 4,
        TransactionId: "TX001",
        ItemCategory: "Computer",
        ItemCode: "DV0495",
        ItemName: "DVD Drive",
        ItemOldPrice: "2000",
        ItemNewPrice: "1500",
        ShowMore: false
    },
       {
           ItemId: 5,
           TransactionId: "TX002",
           ItemCategory: "Electricity",
           ItemCode: "KB384",
           ItemName: "KeyBoard",
           ItemOldPrice: "500",
           ItemNewPrice: "300",
           ShowMore: true
       },
    {
        ItemId: 6,
        TransactionId: "TX002",
        ItemCategory: "Electricity",
        ItemCode: "MU932",
        ItemName: "Mouse",
        ItemOldPrice: "400",
        ItemNewPrice: "300",
        ShowMore: false
    },
    {
        ItemId: 7,
        TransactionId: "TX002",
        ItemCategory: "Electricity",
        ItemCode: "PD843",
        ItemName: "Pendrive",
        ItemOldPrice: "800",
        ItemNewPrice: "700",
        ShowMore: false
    },
    {
        ItemId: 8,
        TransactionId: "TX002",
        ItemCategory: "Electricity",
        ItemCode: "DV0495",
        ItemName: "DVD Drive",
        ItemOldPrice: "1000",
        ItemNewPrice: "800",
        ShowMore: false
    }
    ]; 
   
    $scope.SelectedTransactionId = function (item) {
        $scope.selectedGroupItems = item;
    }
    
});
