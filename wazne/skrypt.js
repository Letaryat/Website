$(function () {
    $("#inputFile").change(function () {
        readURL(this);
    });
});


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            //alert(e.target.result);
            $('#imgLogo').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

var obrazki=["https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/96ff5ce05ea0cdbfaf487f96912622b0a256be0e.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/f6ba5a3003f911fbed3f574c2e340466ca383d60.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/81ffc36efc999c537310d28a82a837d141a32e64.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/f12e03ad412fa9c27e6d1443b2d1b1028dbf2faa.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/bb6e07428f2886b28e91e68d210dd4e93d47715b.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/f40be2d8f126de05034705a66b9c45085225c140.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/b52bd23d8c484b108683f378441fdd5d8bcf285f.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/f5e084ea8a9ea70fef63412694a58978b6eb0a2c.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/717f8645fa31bec75d343abced8761672254f74d.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/8b844b61b953d353deff005013883789c83e232d.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/4957cc68eec4c2d9ee1df6de65f073951d1e94ee.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/8afd807deaf29be85e1dac19c98e202c96e5965b.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/d6dda6493dfa4ee23d690f95b8ec4edad15b2e23.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/3263c975bda7633d517bdcb555f897dbb0dc711e.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/6f9bde877ac7ceb9172f17008b87c31267c0a14b.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/ccaeeda206ea1a561c35c9bc1252e50a9a36e78e.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/499ac3ba9e69f30642b12e0f9b7438927207dcac.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/331e472e4d2d5bedbb711f55a90071b8fccc3c5d.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/e119bfe908ffa70258fa02d6ecdf85825a8766e7.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/e9afe4cf0c690c3f161b459f77c707287dec9804.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/2b817dadbde606a4773e34198e6220d8170da5c3.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/b8b64fcfbd3db78f784d6a9e98352b69eebb6a3c.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/807120/7393d6b86a0008c3ced5988f36e287f252f40384.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/807120/e1fb4d628839cb7dfd0eafe5e5125a7f73996db7.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/807120/6d09bb7c5e7edd5a258dccf1a02d663b5800e754.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/519870/4d4f4b5fbc47d2424acaf00ae58ba289db4aebc9.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/588650/cb7486f3edec85c92a7a544c7714497b5efa15c4.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1260820/ead30493d7248394133b39d90e77cb7b692b4582.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/508730/349f1c73bb2fc796fa19fab3a7f61cc727527c8b.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628750/4d595b2d9b3fab62b13465611b8f038bbbaf94ea.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628750/64159e98e202e791335cc7e0b151fafd60b8f915.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628750/d888caf4fc5346f2ac2b48c23aed031fb0432952.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628750/46f0b893dba6ba86fa6d1e2b80da7e618d50861e.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628750/f45fcea82b657b14cf475a1f325e604f955345b8.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628750/152d5eb5c9922f3e3d037c211238c64ca85e9a97.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628750/8997c6d90b2b466eedd60a3c597990357a02416d.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628750/a5f54d1e07ac012b6c7a99fe0fa4b4719db5c790.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628750/08c93e0a6d0eae56fa861cdcfa4d0a0c0120c134.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/650330/6aac5db5c6bb6a39c977ae576fe342f6d0afeaba.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1054490/a29f56764838e8d9366d007b8079b3b9cc2b43b8.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1054490/0057d489bd9bf2611efccb8295b4c163d094369c.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1054490/f1b6afa5b3647b807c07e2955a159cf7493f7f8e.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1054490/03287207463832face212a6945321999cee63cc9.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1117380/e01b769e778acebaa03e496624bce94648428e60.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1117380/ad60cb0dcabf83b1c0beab132cebb756fd743e5b.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/457140/be6fedcf83ec8000ce69c29104622efc2bb02c9c.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/457140/23993b6666a8721ede7e8a809d1652777008a17c.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/457140/08e67b11ba810aecf3250de7ee2193fa3bb153b3.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/465200/e89b3a70625c980c3d68869f5cdb1da9baa447f8.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628670/101f0f44661206e8e1ce68f36f7625bfa96bdd92.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628670/3b321f3b302bb8ae50b11acf83dd925a9b6f855d.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628670/1b288da484dc60c28f130754195a48824ea426ee.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601840/2088aeaa172a240b51735fb50f1cf5039ce81663.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601840/f2ddd1b708f2091e3d807e82ac762edd205300a9.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601840/85ac6d90549d80cfae369ad76e06d6b4c11e45e6.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601840/1ff82a808a21a123a36afbd8aedfe1169c12dfb9.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601840/80ab65c366f66be94eed12cd3d80144754b7e289.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/449960/939261b888699b9d564218fafa183a10015ae07c.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/619150/a271bfb36e217da05f79efd6080379cc7f657f16.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/619150/442d89341af1efa1e16a97ddab86bac14cac0e96.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/619150/ffcd5c38968642d62d7429c3ae3612876c240715.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/619150/5e2f4956af1d3e09f3880b39adcf930f060ee394.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/546170/9dbe615bfa1085d747405592f3133c92713d7007.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1069740/90b2c7961dd666cec02e1461fbd44a7e155a5dd5.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/371970/83dfcb8a0594fbc5729417e6a3bf401457aa86f5.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1069740/99e0f27ac1cd7117b342b035d8b725ddb1b76d28.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1069740/5b4be2c7e9dac5355f5bd5589f5601092548b252.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1069740/85030942387d8c7803922f84c31e82bc42728279.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1069740/02d111604ea5309ce7dcae5d61cafbb28a61ed57.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/604780/c3c0b1a25a8c499f9430914d1ccf2d15f0aa74b0.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/604780/c5116884298d2ae449299568932d0f1dbe913cbe.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/604780/82bc6f22f18e9fc48154f6c95771049832a523e8.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/604780/b648ad99ee4630f7762f1ae0c597f8cc4b920962.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/604780/2fac359b2f35be9aa280f784f28470d5d1abfeb5.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/604780/c242c122ac954ee51cfe4059640d46b5e36871bf.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/604780/dadcf192eda2fbd04735b5b157d77a008812b859.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/604780/0981576b66b25cd908251c1537db7460bdbfec3a.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/604780/c706935c3650e6ca5401725ce3a5e618b0b778fc.png",
"",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/860950/759142f1b6fb70ace7ff5c73c0eaf45f36e70c3d.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/860950/4d5cc5c851e765af579747f6ab2c0f8c0aed1a7c.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/382560/ff8b2cef34985dc68efc6bccedade5edaf07d9af.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/382560/a2af18d987a14aba583c3b06deebd7ca8349c540.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/477160/580f68baf65e8567f4e96fcea5ea86f4d28767d6.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1492660/2e956d73aa7a13a1462ba6b0467e108f3e42ec79.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1492660/46075f95a7b565e0ba7e4b74750ebe337d63a29f.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1492660/06bb85cd5f39a963a39ae9327ea4eb7da5cd30d4.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1492660/8999640c5cc2c5532549ea15819370d17ebd9405.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/657730/41ad97600653026f4ac527c00393910165b32290.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/657730/460e5c9b8888e4ec0c35687b4e0675a4b96620d1.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/657730/79fb14a374375656abbcc4d45256382a15351fdb.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/657730/7164467b03a92dc89e53517fbf56af8b808083f9.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/381870/6b94f2166f8a723e374f7b8d276505f3c89f6079.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/513980/91a79d510cc3528da5b6ae2b4c25cb4a050b25e0.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/655730/24c857e7dff0d90c9b6323675ffe0e4025db144c.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/655730/6d3b81463b8a317e92374b755a6d570356af9636.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/431840/4718aad9a4b04c3cfb049bb7cbf2bd35c2e2eb11.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/713380/fce51c0a660979a0a78f24d4c231e96921aa9473.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1465660/6b6bec4134f4b0419920b3ae6e344c214ad1c191.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1465660/bd04ee3a8e6c35c39f8670c034a5ea7fd15ca3f1.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/6ba690251e2719a456eb6158fe24ff94164be1a6.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/7c2d50439db54d0f305e7ed3fad30a426a92dc77.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/570/c6a479fae8979bc9c1a02378e488e3ce06b52cb1.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/632360/7617c94cb79497d51f74606e7991861d776505c9.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/ebe6b674deca163b28423e3b925bd36b0f0f357b.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/175875a819256fdeb4a2f4bf1b124afba6c3e2e3.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/77a5bfca9dcc44e2e3aaaabea62249407f9f4ec0.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1442870/53e6b33ff221c4243c85397eb53ed4d33d940166.png",
//non gifs
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/514540/5f067044bcc49b5c3ffd1479bc67c472816cbd16.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/514540/76fe60c202be9123c1090ec2760d7f3b9ef5a138.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/514540/d5bac66fda92252dff170ea95b5332a6c6bedebd.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/514540/6cba15e1c53d39fcc4d5d530d9b1da1311c56597.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/514540/e944eb4353f5a9f18b080f09423f9d628e02f963.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/514540/0f6f71c474aa67ffa59fdd9059736bf08d1bbfe0.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/514540/42017e22a41a0c6ff6cbcec1a71475ddc864aaf9.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/514540/13d9a7205c610c80187e2c53d0764a7cf3ef9ce5.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/514540/ee5f78179058c9e4d4b1d209bdb1334a66b84f77.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/503830/420efee31f0b0a3fe39cb7409dbe9c3a3e0a0e3a.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/503830/f11982f49fc45890633921760df30d5aadee4ec4.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/503830/f7bed8b74bed265a43b616158c5ac591701a4385.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/503830/6efa47b5601d4705d47b3a9b629b8f59072da376.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1461450/61416d5e71b85a99bfd10239f7513c26c3a79871.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/728880/48846c7c1a0e0255db5bcdf665ebfb1ccc11a103.png",
"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/1222730/60f3c07a521a0a67ffa694b2e842861a348cfe21.png",
"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/1222730/e81701db085735b48bfdae7c8a97393a02759bb5.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/730/c30260bb120bf1379f075802653c8eb86da7a7e9.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/730/08763b38c214a554b5e83c5a39a048495b6ecee6.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/730/c2a822b6422d7a2c9e72ec74bf54139db8723ef0.png",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/8472d7295ca91f42faaae0fb9143b2d94bd5b719.png",
];
function klik(w){
    var w=event.target.id;
    document.querySelector("#avframe").src=obrazki[w];
}
var tla=["https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/651670/1bc4c8e969779919d1607a5e22faa9fa139ff613.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/651670/85d3e0de79febc1d58ef4931aa0158ad721060c0.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/807120/5b11cc0beb1e78e4f804b41367417026c0ec0f7b.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/807120/27cb59a88263f1cf56371700c41ee999dd4711ac.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/807120/a2ca9e850e0d6220ecb5f163f8977bd418f69327.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/807120/c2e08086f4445181c74cef6d43c804b9b93ef62c.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/588650/2865b49d9a6d0dcdc89c617cbc186ab2ffa26f28.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/588650/abba03a95fe7d3d6494559491b7d0f4575eb7bca.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1260820/bc8db34b2519e52db7bfb2d5c3ff58dc8c90c5b9.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628750/2b5d1381949807976c1bdf62881a5e8894b9f089.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628750/a4278288b54cb5faf7392475308bd9d42aff1c84.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628750/6ff844218cc3da0bf6634ad29e5e886ca6104ab1.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628750/5dd2e07e1a5da3d4aec1f673e006232b4e6ad2d2.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628750/f8b2fe4c8f299f3f1c6fd31f7da4d897d7a48e70.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628750/6f91f6e8ed0945502b21499bf98c02fd2c8d0405.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628750/525c9bbf9c0551a2a5bdb27c8dabb4de2f2b0d5c.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628750/cb9c467430937b56af7697455b4cb80ca837566b.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628750/842eec475525b3b97f6287eb394b70b4d35fcf4f.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1054490/d73ba246a6f847f4ed69d6d4cdacb5d053a1f7d4.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1054490/248f08a7275f7c4ba3ce4133cfe7d9049a8fb40b.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1054490/8044c651c23202590505d17436ddd500bd45177e.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1054490/0eab862fa013e36571ba443aeb87c653b39a8f39.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/375520/5526650c056b1b7de1f17802302b980b2ed884c5.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/465200/483615d2bb310cd75c5d746708dbeb4e0dba738b.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/457140/f1a5f6f3bd68869f07527ca27d8312fa1c73363a.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/457140/14a3a9ed9ff822b7a80d2494e98c37314ed277e3.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/628670/75f08ec46d67386848ddb2d20589e2552aac015a.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601840/cd29a5ae66372de10b0be4cfe0d058964ff037da.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601840/2ddf2b9df52a1a824af50d5c60902ab99c69a502.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601840/f570bff67aa5549e54bceee13944e2d535a6e357.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/449960/76027cf161ec554b7de01de74263efefabc64b27.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/449960/36f93a49729f07063b339aa716c4e2aad0149278.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/449960/03fbf5507a1c214272874063d8985ede91ab3766.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/619150/c2b29bf2d7d06a6249b6fdccd4e493fd45046edc.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1406990/ad94df4fcc8a92d50bef360c6ca0516a31a51299.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1406990/f5e956f69e888392812e8ddcf4a5ef10dc03bad7.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1406990/4a752216cab589bce482b91aff498c748a19b078.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/296870/75fec9af0d2d37e014b3b531e3e52af30fbf0090.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1069740/04ab4a7df94b15cbbcf60286fe49e14dcf606278.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1069740/16a2647b30a0bed1d92479091b5699ff38a3b1f4.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1069740/50280ba19c374578b69aae939893a725cfe0bc87.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1069740/3a79c149e88537efc726016f55824f824bb1f7b8.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1492660/70c3ff97957a8a23fdf7a688f2583d5462fd8c4c.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1465660/7345fd62bd4d80da5a91586edc1373a1303662d4.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1461450/eaf914dead274e691a082d65937fe5f373e71389.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1442870/b9f35390fb728187a36bc9b521797941008917bb.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/728880/310460da880bc7fff158707b3972c40e6961a7c6.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/728880/7b3580c7b48b50a68ff3d980e57ef24a120d6991.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/870780/7812e95b90134e5fb5729f8e177e48937c40db51.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/870780/b10b21f550618280cd7db52e7443d0b64fd4924d.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/870780/6e8e6ae20fe9bbadffa430e950a29e7a4f0d72c9.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/870780/284348c8d94cb573a29e150fa9c2fbaefc3c717d.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/870780/ade18fe55d3f3c776d2f58df45fa1cc26d73fb5b.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/870780/92be1eea0998d18fe6f026587de282ac64c3751c.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/632360/fe65d7f7c9d2bc633d1960e1ed659ced46267c23.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/570/8144f2b875ebda693f4dec2f7c43a7a1a916375f.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/248954cba9bc08b6e16c676f5c1814ff823af907.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/5d55e33857c40b4ae57aaba611cf7ce8a2b41c5b.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/b31c14955cd9e39d704f7dfd36cb9cc2129d6fbc.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/9d99f6e2b001eb45a9c3029631da2ced35f2dcfb.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/c27b2be3d22be57b7b92b174ec6a65f327876b0d.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/b9184bd8b587515c4b4279c4e24fe7e1f01cbc1e.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/bcf718b36dc9fe0d8b5489b6063869e637be2504.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/a4a54f29f2b1486fb68ed5bf9bef97f62250a6dd.mp4",
//zup
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/b2aebf7aaba89d41fe7cc2c6d0a1f9793cda3b0d.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/fb1550993ae5d633472a96171268b51bc478f636.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/a63ca66f57dd31f180257035959b5f503980c8a2.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/35008464b7252317324727c4415a47b4ff07323d.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/601220/eb617487f84c41c4ca3be0c474a91970148ac873.mp4",
"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1263950/e85ccee455e0712e4abedb3cb0bea01c2799f9b1.mp4",
];
function bgg(b){
    var b=event.target.id;
    document.querySelector("#bg").src=tla[b];
}



var coll = document.getElementsByClassName("collapsible");
var i;

$("#button").click(function(){
    if($(this).html() == "-"){
        $(this).html("+");
    }
    else{
        $(this).html("-");
    }
    $("#box").slideToggle();
});


function defaulttheme(){
    var body = document.querySelector("body");
    body.classList.remove("MidnightTheme");
    body.classList.add("DefaultTheme");
    body.classList.remove("CosmicTheme");
    body.classList.remove("SummerTheme");
    body.classList.remove("DarkModeTheme");
    body.classList.remove("SteelTheme");
    body.classList.remove("GoldenProfileDebutTheme");
    body.classList.remove("WinterProfile2020Theme");
}

function cosmictheme(){
    var body = document.querySelector("body");
    body.classList.remove("MidnightTheme");
    body.classList.remove("DefaultTheme");
    body.classList.add("CosmicTheme");
    body.classList.remove("SummerTheme");
    body.classList.remove("DarkModeTheme");
    body.classList.remove("SteelTheme");
    body.classList.remove("GoldenProfileDebutTheme");
    body.classList.remove("WinterProfile2020Theme");
}



function midnighttheme(){
    var body = document.querySelector("body");
    body.classList.add("MidnightTheme");
    body.classList.remove("DefaultTheme");
    body.classList.remove("CosmicTheme");
    body.classList.remove("SummerTheme");
    body.classList.remove("DarkModeTheme");
    body.classList.remove("SteelTheme");
    body.classList.remove("GoldenProfileDebutTheme");
    body.classList.remove("WinterProfile2020Theme");
}



function summertheme(){
    var body = document.querySelector("body");
    body.classList.remove("MidnightTheme");
    body.classList.remove("DefaultTheme");
    body.classList.remove("CosmicTheme");
    body.classList.add("SummerTheme");
    body.classList.remove("DarkModeTheme");
    body.classList.remove("SteelTheme");
    body.classList.remove("GoldenProfileDebutTheme");
    body.classList.remove("WinterProfile2020Theme");
}



function darkmodetheme(){
    var body = document.querySelector("body");
    body.classList.remove("MidnightTheme");
    body.classList.remove("DefaultTheme");
    body.classList.remove("CosmicTheme");
    body.classList.remove("SummerTheme");
    body.classList.add("DarkModeTheme");
    body.classList.remove("SteelTheme");
    body.classList.remove("GoldenProfileDebutTheme");
    body.classList.remove("WinterProfile2020Theme");
}


function steeltheme(){
    var body = document.querySelector("body");
    body.classList.remove("MidnightTheme");
    body.classList.remove("DefaultTheme");
    body.classList.remove("CosmicTheme");
    body.classList.remove("SummerTheme");
    body.classList.remove("DarkModeTheme");
    body.classList.add("SteelTheme");
    body.classList.remove("GoldenProfileDebutTheme");
    body.classList.remove("WinterProfile2020Theme");
}
function goldentheme(){
    var body = document.querySelector("body");
    body.classList.remove("MidnightTheme");
    body.classList.remove("DefaultTheme");
    body.classList.remove("CosmicTheme");
    body.classList.remove("SummerTheme");
    body.classList.remove("DarkModeTheme");
    body.classList.remove("SteelTheme");
    body.classList.add("GoldenProfileDebutTheme");
    body.classList.remove("WinterProfile2020Theme");
}

function wintertheme(){
    var body = document.querySelector("body");
    body.classList.remove("MidnightTheme");
    body.classList.remove("DefaultTheme");
    body.classList.remove("CosmicTheme");
    body.classList.remove("SummerTheme");
    body.classList.remove("DarkModeTheme");
    body.classList.remove("SteelTheme");
    body.classList.remove("GoldenProfileDebutTheme");
    body.classList.add("WinterProfile2020Theme");
}






