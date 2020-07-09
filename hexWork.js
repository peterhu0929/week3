new Vue({
    el:'#app',
    data:{
        message:'TEST',
        products: [
      {
        id: 1586934917210,
        unit: '台',
        category: '掌上主機',
        title: 'Switch',
        origin_price: 20000,
        price: 9980,
        description: '想玩就玩',
        content: '動森太好玩惹',
        is_enabled: true,
        imageUrl: 'https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      },
      {
        id: 1196934917910,
        unit: '台',
        category: '主機',
        title: 'PS5 Wifi',
        origin_price: 29999,
        description: '次世代超強規格',
        content: '我也想要換一台 PS5 Wifi',
        price: 9487,
        is_enabled: false,
        imageUrl: 'https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      }]
    },
    methods:{
        openModal(){
            $('#myModal').modal('show');
        }
    }
})