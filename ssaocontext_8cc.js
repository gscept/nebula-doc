var ssaocontext_8cc =
[
    [ "BLUR_RADIUS", "ssaocontext_8cc.html#afe271d97a97c5861cadfdde8e24562c0", null ],
    [ "BLUR_SHARPNESS", "ssaocontext_8cc.html#a52efc6a76ddea598747f4f70243906ee", null ],
    [ "INV_LN2", "ssaocontext_8cc.html#a50507e4765774b478d72c5777bad8b23", null ],
    [ "MAX_RADIUS_PIXELS", "ssaocontext_8cc.html#ab7a95011059ae0368dbeee4dec8f9a88", null ],
    [ "SQRT_LN2", "ssaocontext_8cc.html#ada03cc261d3709c384786bfcc370020c", null ],
    [ "__ImplementPluginContext", "ssaocontext_8cc.html#a2b89ea5be690ace1c69eeff61a7b9025", null ],
    [ "aoResolution", "ssaocontext_8cc.html#a7d60e1e883ff6a079640b3a0e89ba8dd", null ],
    [ "aoResolutionVar", "ssaocontext_8cc.html#ac1a9802328ee5d66e57cff87d3fa73fe", null ],
    [ "blurC", "ssaocontext_8cc.html#a669c7b4ac767915f1f21533251a7f192", null ],
    [ "blurConstants", "ssaocontext_8cc.html#a88db384b6dbe486fb15eaf0a452b86fb", null ],
    [ "blurDepthThreshold", "ssaocontext_8cc.html#a13859421d7000484514d0f1c40f4b1f1", null ],
    [ "blurFalloff", "ssaocontext_8cc.html#a89a3c74978a38f5317402c4d2bf86099", null ],
    [ "blurTableX", "ssaocontext_8cc.html#a8fc939587f86afb27b2e838048dc7ae4", null ],
    [ "blurTableY", "ssaocontext_8cc.html#a0e423613d31141b36ca4955d588a04b5", null ],
    [ "blurThreshold", "ssaocontext_8cc.html#a04a8715407810d0d6639d640c0ec758a", null ],
    [ "downsample", "ssaocontext_8cc.html#ac3c769605aa5ebafe7c5bc5120c8c843", null ],
    [ "farZ", "ssaocontext_8cc.html#a5da165c09e73dbcb006075aad617f3b8", null ],
    [ "focalLength", "ssaocontext_8cc.html#a2bad494a181ecea57f8359ff09404d15", null ],
    [ "fullHeight", "ssaocontext_8cc.html#a398f7faf87384c5c2ccb94d7d30610c9", null ],
    [ "fullWidth", "ssaocontext_8cc.html#a148368afb94cdb3f58ed962e9d746181", null ],
    [ "hbao0", "ssaocontext_8cc.html#a3b974229ef5199509b9bea71eab61328", null ],
    [ "hbao1", "ssaocontext_8cc.html#ae0c9496c61baa98d04c28248cc9817af", null ],
    [ "hbaoBlurR", "ssaocontext_8cc.html#ac24bf076591afe249af6eb0d2926faab", null ],
    [ "hbaoBlurRG", "ssaocontext_8cc.html#a95ee46af34b2cad5a5aa77d71150c151", null ],
    [ "hbaoC", "ssaocontext_8cc.html#ae17cf9ce0f6287b34b295cb71692bcbb", null ],
    [ "hbaoConstants", "ssaocontext_8cc.html#a1ccf2a147ed11ab5f720463ba3f1f524", null ],
    [ "hbaoShader", "ssaocontext_8cc.html#ac2ba0711272cd4e7911965b6c3e01a79", null ],
    [ "hbaoTable", "ssaocontext_8cc.html#ab17f5f549ba5855dc341069a27c61dc2", null ],
    [ "hbaoX", "ssaocontext_8cc.html#a8121fa5fca5f9c618bb238e89d9fca57", null ],
    [ "hbaoY", "ssaocontext_8cc.html#a096ac2615c3e1604c1b75f65955e8d9b", null ],
    [ "height", "ssaocontext_8cc.html#acdd6236edb9638125677a1874b6998f5", null ],
    [ "invAOResolution", "ssaocontext_8cc.html#a8c90f6ddea6c96f0528aa668641150c5", null ],
    [ "invAOResolutionVar", "ssaocontext_8cc.html#a94874221abd32bda7c930b4352fb130d", null ],
    [ "maxRadiusPixels", "ssaocontext_8cc.html#a79d6f493e8bd2ebc1127280cbc506d99", null ],
    [ "nearZ", "ssaocontext_8cc.html#af0b1e7f5c9e760b66f1cd15a5f2fd191", null ],
    [ "negInvR2", "ssaocontext_8cc.html#a9d71e37dfb594aa3801da498bbfb8ed7", null ],
    [ "powerExponentVar", "ssaocontext_8cc.html#ae63f7ca3dba59b11fc97b23e77878ef0", null ],
    [ "r", "ssaocontext_8cc.html#ae9d825ad30acede95c25039245e1467b", null ],
    [ "r2", "ssaocontext_8cc.html#abbbba5a7c9d5b8db357cd4c5e8bf7d87", null ],
    [ "r2Var", "ssaocontext_8cc.html#a3e88500e3c0e8a24a611d4dda7f54f50", null ],
    [ "radius", "ssaocontext_8cc.html#ab4cd699ff05e5e8631afeee1d4ad240c", null ],
    [ "sceneScale", "ssaocontext_8cc.html#a1025c4984557ab982071034abc9c3389", null ],
    [ "ssaoOutput", "ssaocontext_8cc.html#ac37852bc5185089da79a9e0da11d592a", null ],
    [ "ssaoState", "ssaocontext_8cc.html#adc96000f4b8e82c407dab62df12d6e64", null ],
    [ "strength", "ssaocontext_8cc.html#aaf8de416423d8139caaf997c5c5b90e3", null ],
    [ "strengthVar", "ssaocontext_8cc.html#a23a5980f0ec058f989ea1a8f19f5a5ea", null ],
    [ "tanAngleBias", "ssaocontext_8cc.html#a70dd4e8d5bb50179a8c385f129c75e12", null ],
    [ "tanAngleBiasVar", "ssaocontext_8cc.html#a9b8a43956e4900007e0b91b4d974ed1f", null ],
    [ "uvToViewA", "ssaocontext_8cc.html#ab4ba2ef55482f915b0844abed95d53bc", null ],
    [ "uvToViewAVar", "ssaocontext_8cc.html#af053d3fea1191bf1ce3eb5dc16b34f12", null ],
    [ "uvToViewB", "ssaocontext_8cc.html#aec19a7a7684ac8d32d2ffaee5a8d360e", null ],
    [ "uvToViewBVar", "ssaocontext_8cc.html#a9d43557e3dbbff37c03acbb249ed2ed6", null ],
    [ "vars", "ssaocontext_8cc.html#a6b4c893305d05223ac76b1ece8c923d0", null ],
    [ "width", "ssaocontext_8cc.html#a0519448bec51881f4fe30d816287693f", null ],
    [ "xDirectionBlur", "ssaocontext_8cc.html#a38cdd709c1bf375ae3243638e7792c68", null ],
    [ "xDirectionHBAO", "ssaocontext_8cc.html#a77e119e31d8039e41c7685cb9042c2f1", null ],
    [ "yDirectionBlur", "ssaocontext_8cc.html#a4743ad202db04265c7ba4f99d2802b4b", null ],
    [ "yDirectionHBAO", "ssaocontext_8cc.html#ab7973248e778277a756be7f2dee66d7b", null ],
    [ "zBuffer", "ssaocontext_8cc.html#ae4ee51618c4b17dac4a2203a8304c6d7", null ]
];