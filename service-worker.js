/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/about/index.html","c0145a546eca6f06e955f103508f08e9"],["/album/2/index.html","d7acc2f9c971982d3230f88d13ad9225"],["/album/3/index.html","207d30d1ed1f5fd486e9e8ec206e3be6"],["/album/4/index.html","40824163f38b82034dbfcf4bb4d20117"],["/album/5/index.html","3c81028a5e89d7f369411fb41f4754a7"],["/album/6/index.html","abf132e3e635e0bbad3eef80b72e53da"],["/album/aikatsu/2/index.html","dd6b4bee1f5db16b7f0b0673470ca55c"],["/album/aikatsu/3/index.html","d34dabc406e8e331e6a6bc22722b7f99"],["/album/aikatsu/index.html","0c8f192312fc11e7f8e228c5c82afed3"],["/album/akame-ga-kill/2/index.html","95788f7dd654915ff2dcfa4168e2a304"],["/album/akame-ga-kill/index.html","1f905cbfe29f378b17e1f2083f2317f6"],["/album/angel/2/index.html","85ee303a568953c7ffa76a3f9ff859a6"],["/album/angel/index.html","9fd9e196ec2406bdd9ffc2fb5dba2381"],["/album/anonym/index.html","0b0f5ce11ade8e114eac59d673dd8696"],["/album/aquarian-age/index.html","42e2b713e48d44137152d6b2a1e1ad34"],["/album/arknights/2/index.html","39eed0185017c5e6c3b66e6cfe4a7695"],["/album/arknights/index.html","cc175147eadcd1c3edbe1064fb0e1779"],["/album/attack-on-titan/2/index.html","b54431b6be6d3d00304815789c147ffd"],["/album/attack-on-titan/3/index.html","d2ed99ea51cbfc213b9e114d5aa72974"],["/album/attack-on-titan/4/index.html","567f4a7f01e1fcbcce2ee5ed6cf97c49"],["/album/attack-on-titan/index.html","273d05560ee0345345f6953a3b1b074f"],["/album/binary/index.html","c3caa429ba7de2f9f913b05ae1d661cf"],["/album/black-and-white-2/index.html","82af98cd598bfbb738c2e2eae038ee60"],["/album/black-rock-shooter/2/index.html","e80d6455af3009e6d2ab7c2ba306702e"],["/album/black-rock-shooter/3/index.html","970d70e82e43b4e070a3975dbcb8f14d"],["/album/black-rock-shooter/4/index.html","38924da638baa32788c618aeaea2cca6"],["/album/black-rock-shooter/5/index.html","80518c098ab7b0e48f4500bfe8ea0b0f"],["/album/black-rock-shooter/index.html","6deaf57670821e6408127da98aa4c254"],["/album/bleach/2/index.html","28cb212395c0f9f92ac2a11622a7674c"],["/album/bleach/3/index.html","a75b4c783275b1c3ac44d98777af3ba1"],["/album/bleach/index.html","0f27f2abb9b3f401816e0bdc80d87a79"],["/album/boruto/2/index.html","8c6fb4010103dd82765d4c9041d3b9e0"],["/album/boruto/3/index.html","abe77b7a64ee19a60e5d01d665f760ce"],["/album/boruto/4/index.html","0a5a15deea757f329b9619df0ed349e1"],["/album/boruto/5/index.html","f89b8cc641aff314ecf95a0a36afa45b"],["/album/boruto/6/index.html","a9b211dd88fc220cf2a88d34274f605e"],["/album/boruto/7/index.html","5d4fcaaf168aa2b257133883d9a1c996"],["/album/boruto/8/index.html","50fd834be588ee56f37e77e190721cd3"],["/album/boruto/index.html","d2bbe90ca4614bdc6fef1eeaacb2e70f"],["/album/circuit/2/index.html","7260a6c3188bc9feee300e725bea83ae"],["/album/circuit/index.html","7ec8a59303d48d7b4d2017d0eda325b2"],["/album/crossover/2/index.html","a165d698766ae5ca58f49a4f093c4447"],["/album/crossover/3/index.html","3dce3137367030095fee3c759540ba6d"],["/album/crossover/4/index.html","e46ec8e1e6f34a53b03c84eea2c962c7"],["/album/crossover/5/index.html","a7d8c3460724c2e57d229c4986e18918"],["/album/crossover/index.html","bfd377012b68de347214fc2cedf6677a"],["/album/darling-in-the-franXX/2/index.html","d8343f95a2a6ed14b224ae1deff2fd38"],["/album/darling-in-the-franXX/3/index.html","93f6242520014d0253827abdc505ae01"],["/album/darling-in-the-franXX/4/index.html","8e152cdb25dcfe126a8dad8dffb88112"],["/album/darling-in-the-franXX/5/index.html","de145ada0cccd3210b1163d96cffc4df"],["/album/darling-in-the-franXX/6/index.html","471cffa0af76a65f946120fb40c0babc"],["/album/darling-in-the-franXX/7/index.html","df3feb613d12f3b9ab76ca58d3200f3c"],["/album/darling-in-the-franXX/8/index.html","6dceeb55cb4b6ea0d58f76b797073a52"],["/album/darling-in-the-franXX/index.html","41a6e48b1eab03cb60a91a9714fc1331"],["/album/date-a-live/10/index.html","57afa6bf1eb7792f6b5f357d107be91c"],["/album/date-a-live/11/index.html","ae5a8b45b2645afe9f1764846f24bf2d"],["/album/date-a-live/12/index.html","1112851b64d4807ae332686830fcacb2"],["/album/date-a-live/2/index.html","a4f4473042e79ebeb168335e0433f089"],["/album/date-a-live/3/index.html","454cd37b68f29509d7ee5de75ef429a9"],["/album/date-a-live/4/index.html","d14711aa7e2e8ee6527cc24037a8ff32"],["/album/date-a-live/5/index.html","6762d7786b686121157719afdd7655d6"],["/album/date-a-live/6/index.html","34f6ccc0ed26b7867825ccad24a44b38"],["/album/date-a-live/7/index.html","57a7d86e893e234668c2d801e68e3d31"],["/album/date-a-live/8/index.html","03ab579fe0e5c7149dac3efb31102dae"],["/album/date-a-live/9/index.html","97fdad42accfff896b86a957de3b4f94"],["/album/date-a-live/index.html","8280a5b1303ce85e5cf8fd892697a35a"],["/album/demon-slayer-kimetsu-no-yaiba/2/index.html","ffb0a49702380fe3d0e9d58d7f1989b0"],["/album/demon-slayer-kimetsu-no-yaiba/3/index.html","3b0315a9bb5142ce03ee5ec8aabc6eb0"],["/album/demon-slayer-kimetsu-no-yaiba/4/index.html","f35e6bff6fedf90408fcfe8b7926388d"],["/album/demon-slayer-kimetsu-no-yaiba/5/index.html","75a7133a1e6aeb588c14c9d799807426"],["/album/demon-slayer-kimetsu-no-yaiba/index.html","d0628270dd32992bf62c325762030aa9"],["/album/dragon-ball-gif/2/index.html","13e8f3dc5bcdeb0f737632c5e4f759f4"],["/album/dragon-ball-gif/3/index.html","a7a5ea4f468addb2c8f883b5a8391a18"],["/album/dragon-ball-gif/index.html","3c2149f8045389b7d3a062e3886aac53"],["/album/dragon-ball/2/index.html","4ec1639be6bb945d27da8b80bf71dfa5"],["/album/dragon-ball/index.html","482b0185aff7e12abcc349fc589e4d52"],["/album/dungeon-fighter-online/index.html","b69505ca29e3d206bdf9874a7e09ec06"],["/album/edens-zero/2/index.html","de43ac89aa3c1eecf5f1ea2bc43c764d"],["/album/edens-zero/index.html","dea7bd050d8040d630472c96d0f46235"],["/album/fate-grand-order/10/index.html","9a1633bf09226d5dd1a65b3230fc1880"],["/album/fate-grand-order/11/index.html","e0f58979143f44b81263b76347f55780"],["/album/fate-grand-order/12/index.html","836c6ff6776610e24d762f1329ee8fad"],["/album/fate-grand-order/13/index.html","b04ff041fd73cb7cae35979359309521"],["/album/fate-grand-order/14/index.html","e799f600687cee5ae809f99df8e995db"],["/album/fate-grand-order/15/index.html","445f2e0ead7534a3543830167737ee94"],["/album/fate-grand-order/16/index.html","0a788d268d143cb8604757a29efa5b8e"],["/album/fate-grand-order/2/index.html","198654c00e62c68a1b8f7db98eac90f6"],["/album/fate-grand-order/3/index.html","1728dbf014b9efa79841b3d9c50744e3"],["/album/fate-grand-order/4/index.html","74192be5b3d05bef5e0c365362f44d83"],["/album/fate-grand-order/5/index.html","5eb145a696271d35f904777c0f626b11"],["/album/fate-grand-order/6/index.html","3f1350eb6a1685dfca7b3ad485f388a5"],["/album/fate-grand-order/7/index.html","14a9bb128734cf1582edc74593350c7e"],["/album/fate-grand-order/8/index.html","42207a49577579e2a040c0522d56e437"],["/album/fate-grand-order/9/index.html","ec7180740e556a495613e1219502321f"],["/album/fate-grand-order/index.html","6f7c2766774d2acf8eabc13bad79c61f"],["/album/fire-emblem-heroes/2/index.html","848e910ead44c8de36ba8601f9e48e18"],["/album/fire-emblem-heroes/index.html","48f152c0ab664700a46b32ad8488f422"],["/album/gintama/2/index.html","405700842f381028eb019263fb023615"],["/album/gintama/3/index.html","2ba819615683ca1fd6ab3b27e2132711"],["/album/gintama/4/index.html","025d42100a7bf49c42e2a6c1b378dcda"],["/album/gintama/index.html","bdc5579fa86f7555c9eada9aeb8ee9f4"],["/album/girl/10/index.html","e152ce2b1d2360e2207cb2390fd6a241"],["/album/girl/11/index.html","14ed6c08f5262a4db0dcf0982a1e7b21"],["/album/girl/2/index.html","83c765eed606e2ff8c4fc66208d89645"],["/album/girl/3/index.html","120fa4294bfc698ba7f44ef12d7c26bb"],["/album/girl/4/index.html","787c42fce54daabe126036cfbf7e384e"],["/album/girl/5/index.html","8090903b4a26c3c1450c34e694587e55"],["/album/girl/6/index.html","ea55a7f761d7c0d041b703a331008df3"],["/album/girl/7/index.html","65e2a837378b3f390b325c193c636cf9"],["/album/girl/8/index.html","e3dcb194747767376e9fc1713b530027"],["/album/girl/9/index.html","9dd7db5a9112929bbc45bc5998c6281f"],["/album/girl/index.html","672f24f889179dae3ece798209718fdd"],["/album/granblue-fantasy/2/index.html","e987c0f89550d68223c6a9e47c269b4a"],["/album/granblue-fantasy/3/index.html","715152ca2f7b9570e33357a4a7612296"],["/album/granblue-fantasy/4/index.html","a848e0a75f9f5389c7aa637b00d715cf"],["/album/granblue-fantasy/index.html","5cb5cb9add61b071879badcd3b6e03a6"],["/album/hacker/index.html","063ea396caa7f1e9b1eb15433c1c6007"],["/album/hunter-x-hunter/2/index.html","90c220c6e0734e926dfc1f5a26a4b111"],["/album/hunter-x-hunter/index.html","27d0f0d259e80e390015a431cfd46e79"],["/album/index.html","26be4c1c93f78c4cd431809dfb24cc60"],["/album/jojo-de-bizarre-adventure/2/index.html","5d85a81cba3cf0bc09148db38d3becfe"],["/album/jojo-de-bizarre-adventure/3/index.html","e2084e9cb86da275fbcaecad8610c0e8"],["/album/jojo-de-bizarre-adventure/index.html","ed7d59dddbe3165716a1e98b324fdd75"],["/album/kagerou-project/2/index.html","199980f922f54abfdbafbc5923975ed3"],["/album/kagerou-project/3/index.html","eadb2caab6fae718f547833bdbb14d37"],["/album/kagerou-project/index.html","56c4160282331551d7a94512e3567e48"],["/album/kill-la-kill/2/index.html","d913e6b6714096a4d769b3cc251b0189"],["/album/kill-la-kill/3/index.html","a141da06d3738b9ecda886723cef3443"],["/album/kill-la-kill/4/index.html","ad16687fab4ca3974e15cd7d280194de"],["/album/kill-la-kill/5/index.html","278c96062143dee0de4bfc28fda415d3"],["/album/kill-la-kill/6/index.html","a6bf912e79860fd57aa1eed1a3019c65"],["/album/kill-la-kill/index.html","36c07a3aebe09ef7213413427e3d8a21"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/2/index.html","f909d3ab724191d070ede85d29088e56"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/3/index.html","55986c2a5a86ccf683b849a0d6106f92"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/4/index.html","b2055821b240633b352d100f9fa8c3d3"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/5/index.html","03e967cc8b5374dad268b6d79058a071"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/6/index.html","eee0db6d8f0ff5b36d7f2d0c512a6219"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/7/index.html","babeae9b26da35225b6c7e0cda71c5ac"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/8/index.html","e4a6ce4a90aa084c526230dae0bb3c7b"],["/album/konoSuba–god-de-blessing-on-this-wonderful-world/index.html","46e74298c4cceda14149498077147147"],["/album/league-of-legends/2/index.html","dc08203369dbb6ca98632da50bfbe147"],["/album/league-of-legends/3/index.html","a799fef6f33b5ba6b0b0c5430f849c0b"],["/album/league-of-legends/4/index.html","8b997a5ba0abc4c487119464ca0f0a43"],["/album/league-of-legends/index.html","3bab3b81db1018e6efc056d8c10b2ca8"],["/album/linux/2/index.html","c34c9c483634bf980b4ee5374ce1454c"],["/album/linux/index.html","6dc15406f016bb9fcac2b8ed20871e4f"],["/album/loading/index.html","276b8ff7d8eb9da3be9dd7f637ad6dd3"],["/album/mac/2/index.html","901350de78cc1fc6247aad87d5206d17"],["/album/mac/3/index.html","48b7e56edd464bacc6aa0bb9181c9a82"],["/album/mac/index.html","9ecfeb68e47b90405aa5b774b9c5e976"],["/album/mirai-nikki/2/index.html","9905258abf35f2345dca6f162e2d8e9d"],["/album/mirai-nikki/index.html","63f1cbd5d36b5322c55fedcab674c5d6"],["/album/my-hero-academia/2/index.html","1b6ddcda408b80c8fb9f6f590daa94ec"],["/album/my-hero-academia/3/index.html","82e396412f603303920954200df27658"],["/album/my-hero-academia/4/index.html","a7d44bda0b0adf311c434fc72ff317fc"],["/album/my-hero-academia/5/index.html","f2d2b565b3e322c9d0a28da97483430a"],["/album/my-hero-academia/6/index.html","8b8035b64f779d5eae5d9031f00aa98b"],["/album/my-hero-academia/7/index.html","ea65c37e754a2d60bb7a9925ceea9bc8"],["/album/my-hero-academia/index.html","ec2e9262d1818921caf78f4d725273b6"],["/album/my-youth-romantic-comedy-is-wrong/2/index.html","2fe8142592a6f00d6f201f0adcfac67a"],["/album/my-youth-romantic-comedy-is-wrong/index.html","5ef20fbac414c4fc36d59279a62e9cb5"],["/album/naruto/2/index.html","aa459998b6adca6f5d0a48626aef556f"],["/album/naruto/3/index.html","10c7c0315fc93b0e54097ce19dc9f810"],["/album/naruto/4/index.html","ede9fd21cb38391b65e8be853bfbd703"],["/album/naruto/5/index.html","113a5bc82ef40221ec07fc1260ee88aa"],["/album/naruto/6/index.html","83e278ce746e78b9b72ad0713f2b28ae"],["/album/naruto/index.html","2a88ef944fda82af1f4ed82d8a0dd83c"],["/album/neon-genesis-evangelion/2/index.html","57a123be3ebb26fdb2345a22cec0d433"],["/album/neon-genesis-evangelion/3/index.html","efac0ce01b79f0ec6c5c0c9f60ac5f38"],["/album/neon-genesis-evangelion/index.html","1c645ea1b87f4bab4b5f3a8e2f7e34a1"],["/album/no-game-no-life/2/index.html","fa377c9bed450aafc4a7c7fef7466023"],["/album/no-game-no-life/3/index.html","d32f24b27eeb97c9e6df0f6b7959f923"],["/album/no-game-no-life/4/index.html","c60193e6c3e3a220d5eed6552c776170"],["/album/no-game-no-life/index.html","33d9aa92a3c29a0eb0654c117f7da6bf"],["/album/noragami/2/index.html","3210b7ed5ee8c74de2172fee3852bd70"],["/album/noragami/index.html","8e1275985c77663de41d4c60b7ceeee7"],["/album/one-piece/2/index.html","fb9c1955071fee7b5926eb0d6f33597e"],["/album/one-piece/3/index.html","ca8df0ae76c3c9a4f0d67537dd41ec8f"],["/album/one-piece/index.html","a24dce024d329bbb1b747b2fd07c02ed"],["/album/original-anime/2/index.html","47d899381b6a1821ff0345b7195a10c4"],["/album/original-anime/3/index.html","06ef1f036b760c5254fb61f75557f9ab"],["/album/original-anime/4/index.html","66df637a05cc24bf908dd1cb56f2bb93"],["/album/original-anime/5/index.html","cb7df7fb40b51577712f4b2b7c4bf32d"],["/album/original-anime/6/index.html","8c292ef4d2808c33a44b388c16f2a2e4"],["/album/original-anime/7/index.html","5423bec17b2d87c037f3fc7552700a3d"],["/album/original-anime/index.html","c7e9517310e91e20797f4a2c9566e477"],["/album/overlord/2/index.html","837518dd766dc142a59d2c2011a6c36c"],["/album/overlord/index.html","86cc8019adb2e952f736cea04b0e97cf"],["/album/overwatch/2/index.html","3031060867afbfd09bb53c3353e51bcc"],["/album/overwatch/3/index.html","28e8ed1b364646391009adcdc6f8b7a5"],["/album/overwatch/4/index.html","45def0da20e6815c3f55fdb9f09fce4e"],["/album/overwatch/index.html","816e7f5b43aa4524d72fa7747356c714"],["/album/panty-stocking-with-garterbelt/index.html","07575d04bb76c2a9f4a6691dbc007ef1"],["/album/persona-5/2/index.html","1188dbcd10bf4ebe09b8db52d78d94cd"],["/album/persona-5/3/index.html","56d5545520261a9d2857249446fb2812"],["/album/persona-5/index.html","b7deeee3bbb7418aea9bda9156b3a37e"],["/album/physics-chemistry/index.html","2644c00d8543f12ddb8f68080e172adf"],["/album/programme/2/index.html","3bdb782a095d28c822bd9c17c03aedba"],["/album/programme/index.html","5a04dadaf8c2f8904cc542d8a4b4768f"],["/album/rascal-does-not-dream-of-bunny-girl-senpai/2/index.html","cd90e0f57d8a5e8a4ecc1e22aa05fadf"],["/album/rascal-does-not-dream-of-bunny-girl-senpai/3/index.html","1b6b93d5383052ae57e4f212157bbc9e"],["/album/rascal-does-not-dream-of-bunny-girl-senpai/index.html","2acbb4237f9f8df18fa093061bea2e8b"],["/album/rosario+vampire/2/index.html","9de24d627aef4c1a65534ff889836d02"],["/album/rosario+vampire/index.html","005d9c5ebcca7e229cd540fc3f747aff"],["/album/shakugan-no-shana/2/index.html","0d5d22e440a363efbec4560b1f600137"],["/album/shakugan-no-shana/3/index.html","4e84964cd64ec03f646480425dd8d8d2"],["/album/shakugan-no-shana/4/index.html","88e2fea3c0ca0d385c9b824f1fb70cf1"],["/album/shakugan-no-shana/index.html","be9179d076c587b20a1b335581088e95"],["/album/solo-leveling/index.html","83f749ecd9a209e51f207c3dcba28521"],["/album/sun-and-moon-wallpapers/index.html","f8e593c0eb130d52e33b1c9abf0529b1"],["/album/sword-and-shield/index.html","31ddc8ccefc509eb62e4feea93977c5d"],["/album/sword-art-online/2/index.html","68c6469598bbf6c99b182537acd72c34"],["/album/sword-art-online/3/index.html","6e85a5e3b555896ad3f3df1e98b31696"],["/album/sword-art-online/4/index.html","6537d0f592c2d1011d35d13b59537e0d"],["/album/sword-art-online/index.html","10b837481b3076ce9e1370c4fb402242"],["/album/that-time-i-got-reincarnated-as-a-slime/2/index.html","e36459b99ff2fc52744990b4da2da215"],["/album/that-time-i-got-reincarnated-as-a-slime/3/index.html","a2aec60600347358d91c2718bc879a6d"],["/album/that-time-i-got-reincarnated-as-a-slime/index.html","9b1daed7d35c94a0acdfc8ef223f402e"],["/album/the-seven-deadly-sins/2/index.html","f15f74247b8a73f096b4e7f6de75cee9"],["/album/the-seven-deadly-sins/3/index.html","a8bd69761404de0a6dc418e0d39029d3"],["/album/the-seven-deadly-sins/4/index.html","f63a8e2991b58c09dbc3591e125d9c13"],["/album/the-seven-deadly-sins/5/index.html","57bd6bf51c36d104e5494c03a2584ac9"],["/album/the-seven-deadly-sins/index.html","a711a329ad3e4e9f4fa3b4b6fb1a2ed6"],["/album/tokyo-ghoul/2/index.html","427ea734595f70cff87ad7fdb8c52545"],["/album/tokyo-ghoul/3/index.html","128087584bab68c779fad405db244b93"],["/album/tokyo-ghoul/4/index.html","d95e72ad50e58e6612bea46a05e3f688"],["/album/tokyo-ghoul/5/index.html","9d5f76b1cc0f5cc670693369fcea87fe"],["/album/tokyo-ghoul/6/index.html","a9958a0331acec3f2ed315ba6c16219a"],["/album/tokyo-ghoul/7/index.html","750b654ff96fffe1b1dc17adb7a59032"],["/album/tokyo-ghoul/index.html","b9f2ee2397c078204a9068789ada4785"],["/album/vocaloid/2/index.html","494e9ef0942e17749eb3f718d90c5cf7"],["/album/vocaloid/3/index.html","4c8d25761c8c65b8c8c4efe3d2e781df"],["/album/vocaloid/4/index.html","97b6a0fd9394bc9dfdbee4f4fd658f8c"],["/album/vocaloid/5/index.html","66cf3d243aef44c850ef6e55b6266853"],["/album/vocaloid/index.html","cde5e82d3f4e0b3e64a9431b683cef59"],["/album/your-lie-in-april/2/index.html","cd4a9a878a7db7edcbbb55c4bbc8e33c"],["/album/your-lie-in-april/3/index.html","0d422c3686351dc43edbc7f9b3c47304"],["/album/your-lie-in-april/index.html","aebee61e2f5d0e4a904e9a34443e0b4d"],["/album/your-name/10/index.html","2555ec967ce144bdb40e921f34f1ced3"],["/album/your-name/2/index.html","e31322d441caf6beec9d6d1515a0cff6"],["/album/your-name/3/index.html","a9b1d6e53039578ab8dae8ff7059baeb"],["/album/your-name/4/index.html","66b5a9562a52df4ae3642c9af9aa95e1"],["/album/your-name/5/index.html","d9608637101b96db49e1079277b39bdd"],["/album/your-name/6/index.html","e1686bf3309b8e2d022c0d3fda0bb999"],["/album/your-name/7/index.html","48b3d983bde70f4aec124d5d7a9759de"],["/album/your-name/8/index.html","179e854390b38b73eb1d0726b60f5f0d"],["/album/your-name/9/index.html","4f513f960d7f1ac7c71f6f7d5cc4b051"],["/album/your-name/index.html","38f2eb2821d12c898c06b1940fdd8b41"],["/album/yuuki-yuuna-wa-yuusha-de-aru/2/index.html","cbad4716e99a8c552bca35e2a5efcf09"],["/album/yuuki-yuuna-wa-yuusha-de-aru/3/index.html","edcc6d91463878244d154bed65272731"],["/album/yuuki-yuuna-wa-yuusha-de-aru/index.html","3787a1b2571bf58296c736a939e4ed91"],["/album/zero-kara-hajimeru-isekai-seikatsu/2/index.html","8cb0aba00992b25a0b5dd723e666a4a5"],["/album/zero-kara-hajimeru-isekai-seikatsu/3/index.html","9b71188f3119d80551ff08901654ecb7"],["/album/zero-kara-hajimeru-isekai-seikatsu/index.html","1088947e6a30f068d503c1b782a91a2b"],["/archives/2019/06/index.html","87e92c705acdd720ce7d269b9ceae94e"],["/archives/2019/09/index.html","3cb40175ee1ee5ac7ba9524ac742ff93"],["/archives/2019/10/index.html","4e3785f148fe3188d179281145dad502"],["/archives/2019/12/index.html","debf96f77105e97f57529d8834bc09da"],["/archives/2019/12/page/2/index.html","2d362c390f84ea865befe520f1c2d174"],["/archives/2019/index.html","bb06637152703e7005a849fa3cf9b920"],["/archives/2019/page/2/index.html","05e1daa8807c45ded0e093ef1b408a17"],["/archives/2019/page/3/index.html","94a4e2e253f2b6683089db223068928c"],["/archives/index.html","ed9e20464f7255a67b9df26711fa9500"],["/archives/page/2/index.html","3619ffcb9beefdef3ae705dfc07a56a7"],["/archives/page/3/index.html","0b31bb52362d3afc58098be83b4aa84a"],["/books/index.html","fa43c6297a5bf82377ac2c36e5905042"],["/categories/docker/index.html","84d7fb832e5ab302e8359d556a4489be"],["/categories/github/index.html","01e2a051c224a68433c874ef4585abb1"],["/categories/hexo/index.html","76f4c24fed8068fe1b04c109eb89442e"],["/categories/index.html","be44479fe8f59d1a01e598edde41d3fa"],["/categories/java/index.html","3d4bc438f9f8c8f1f711d35a8bdfb294"],["/categories/javascript/index.html","7a46f7382353dc8a9426ba004a992020"],["/categories/linux/index.html","10d42a73d0d304eb91cd186daad08971"],["/categories/mac/index.html","aae2ae597a00d3f797e2f7264f9394dc"],["/categories/nginx/index.html","297269abfde9b083bea1ce48227946e4"],["/categories/other/index.html","0f50a61efa518d09f902392e83cc3ec4"],["/categories/python/index.html","cc761835acef837eda403aa2790e02cc"],["/css/index.css","445cd12d64b5296983f34c95fca8cb71"],["/css/var.css","96a0b927209c0412eb113ddae9b46e3c"],["/friends/index.html","7c335b257b93b9e73c4cb3eb77bac95a"],["/games/index.html","0078d84f57b4f50101ed5717c509a807"],["/go.html","4bd8d315c2bc41d0ce799fd4df4eca02"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","7bf5321c556d684b51806ca182e1af92"],["/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["/js/tw_cn.js","65260c77451028965f33b24dc9a8d4c0"],["/js/utils.js","5287bee9913bcdb465198570d518d252"],["/movies/index.html","09514b78df640e478e87d7ecad8b5c26"],["/page/2/index.html","3139f8c97ad5da1b081ac803dc12e1cf"],["/page/3/index.html","e3d09dd4bea643469bd8f15788a73a93"],["/post/12306-open-source.html","69fc4e2709a96a2bfceea255112a3714"],["/post/about-document-encrypt.html","8d48dc42f131f65ea17e90f10ccc3bc4"],["/post/awesome-java-github-project.html","89e2e24c465a17f115853d2a50077600"],["/post/awesome-java-github-tool.html","02859e454829b7f179d43f7c5b79a142"],["/post/docker-remote-access.html","a6dddff91778d7c605fc2dcbeabf8ffa"],["/post/es6-array.html","95a107fda450bfa5f7cd6b154676e7ab"],["/post/es6-promise.html","4991c88e521c4d3d13b1a7933c7c516b"],["/post/github-accelerate.html","ed93bd89b63898c58b97b473dfea337a"],["/post/github-learning.html","40add19aad7fb09efa5c4a52825fdd0b"],["/post/hexo-free.html","004b9dd2d49a4d38a61f16a8d924b0eb"],["/post/hexo-loading-page.html","a0574060234190a57507913e2b36af75"],["/post/hexo-no-referrer.html","e6e28fc4a1dcffdcec499cb030b65e44"],["/post/hexo-optimize.html","d3cd959f2bf4c181330c7765fca0806d"],["/post/how-interesting-project-thefuck.html","3ac53debdaf6b1665dc9527509d64e69"],["/post/java-reflect-type.html","9e9210229822a5333d0ec64bda23e008"],["/post/mac-terminal-iterm2.html","6facd8b85576b7ad1b8039a510ca9df1"],["/post/nginx-variable.html","c7f206c7aee903455f3715ca80cf5640"],["/post/opencv-opensource.html","7c6ca91dc101aca2bd9b2d6d692bf263"],["/post/spring-boot-email.html","a24feb76ac0b42450b20479c82a2574c"],["/post/spring-boot-jpa-multiple-datasource.html","fdff96912bec7e1fd4cd32a1c38e32be"],["/post/spring-boot-quartz.html","741c2cb818a3efdad434f09fa69b0b0c"],["/post/spring-boot-springapplication.html","26eed1e7a4a2337d86f92ad722c8abb7"],["/post/spring-security-redirect.html","b3405ccb340e1d5371e2d4a4a2352555"],["/post/ubuntu-nginx-certbot.html","3f77a33bbc2387c0704a29a589f28f49"],["/pwa/16.png","39dc06014f6226ef8fe0de4c2730c66b"],["/pwa/32.png","6c2412cdc9f38d6a87d1c99f447b1209"],["/pwa/apple-touch-icon.png","1a603ff1663748a6998fbe5a5f1e1857"],["/pwa/safari-pinned-tab.svg","b4b41ccbe051f547d85bfcddaeb30120"],["/tags/docker/index.html","e4edf67823a0017ba2cb1a186fae45bd"],["/tags/druid/index.html","0968f693b0dec4170b7c4e6b57226325"],["/tags/encrypt/index.html","732524e6db606296a7d6e84e3bad2453"],["/tags/es6/index.html","cfacd8cf4421bc1f8541cf28885857d8"],["/tags/github/index.html","0d533a1ab0ec8f1d97da23908b603aa0"],["/tags/hexo/index.html","1736627a2a94c7b1c188eb3b3e3a3d76"],["/tags/https/index.html","efa92a7c626fa07da2dc2209e30986be"],["/tags/index.html","bc222ff81d75700d7394fb6f7bf69889"],["/tags/java/index.html","54630ba5017344f9caa66374cf707bd5"],["/tags/javascript/index.html","ecc40562870446bc525d14596e9648b9"],["/tags/js/index.html","82643f2597c6b87e79aaf75e3259a41f"],["/tags/mac/index.html","051753db378bc3ef5df68776ca58a82d"],["/tags/nginx/index.html","def355b92f53a6b26872a298f9998ba2"],["/tags/opencv/index.html","f817a36e4276c7ad1bbb5219b1f73f65"],["/tags/python/index.html","0536151fef56be6a1d132b2cb1d5a0f7"],["/tags/quartz/index.html","d2698f38342c13e205ee8ac03096dc3e"],["/tags/spring-boot/index.html","dd85a008cf72b8b1fcd1dc5c9c5ce6ff"],["/tags/spring-security/index.html","fbba1e0e7d86994eb1b851907b212f0d"],["/tags/ubuntu/index.html","b42fe61630b03dc793adf9d1fb3c4e6e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"blog.hvnobug.com"});




