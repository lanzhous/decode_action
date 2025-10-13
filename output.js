//Mon Oct 13 2025 11:59:04 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var Base64Hex = function () {
  var llilii1i = function (llilliil) {
    var II1lIlI1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var iiii11I, i1lilll, lI111I1l;
    var iIllliil, IiilIl11, II1il11;
    lI111I1l = llilliil.length;
    i1lilll = 0;
    iiii11I = "";
    while (i1lilll < lI111I1l) {
      {
        iIllliil = llilliil.charCodeAt(i1lilll++) & 255;
        if (i1lilll == lI111I1l) {
          {
            iiii11I += II1lIlI1.charAt(iIllliil >> 2);
            iiii11I += II1lIlI1.charAt((iIllliil & 3) << 4);
            iiii11I += "==";
            break;
          }
        }
        IiilIl11 = llilliil.charCodeAt(i1lilll++);
        if (i1lilll == lI111I1l) {
          {
            iiii11I += II1lIlI1.charAt(iIllliil >> 2);
            iiii11I += II1lIlI1.charAt((iIllliil & 3) << 4 | (IiilIl11 & 240) >> 4);
            iiii11I += II1lIlI1.charAt((IiilIl11 & 15) << 2);
            iiii11I += "=";
            break;
          }
        }
        II1il11 = llilliil.charCodeAt(i1lilll++);
        iiii11I += II1lIlI1.charAt(iIllliil >> 2);
        iiii11I += II1lIlI1.charAt((iIllliil & 3) << 4 | (IiilIl11 & 240) >> 4);
        iiii11I += II1lIlI1.charAt((IiilIl11 & 15) << 2 | (II1il11 & 192) >> 6);
        iiii11I += II1lIlI1.charAt(II1il11 & 63);
      }
    }
    return iiii11I;
  };
  var I1lIlI1 = function (llIl1Ii1) {
    {
      var liIillI1 = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
      var llIilII1, lI11li1, IiiIiI1l, Ilii1II1;
      var lI1iI1l, Iili1I1i, llI11I1i;
      Iili1I1i = llIl1Ii1.length;
      lI1iI1l = 0;
      llI11I1i = "";
      while (lI1iI1l < Iili1I1i) {
        do {
          llIilII1 = liIillI1[llIl1Ii1.charCodeAt(lI1iI1l++) & 255];
        } while (lI1iI1l < Iili1I1i && llIilII1 == -1);
        if (llIilII1 == -1) break;
        do {
          lI11li1 = liIillI1[llIl1Ii1.charCodeAt(lI1iI1l++) & 255];
        } while (lI1iI1l < Iili1I1i && lI11li1 == -1);
        if (lI11li1 == -1) break;
        llI11I1i += String.fromCharCode(llIilII1 << 2 | (lI11li1 & 48) >> 4);
        do {
          {
            IiiIiI1l = llIl1Ii1.charCodeAt(lI1iI1l++) & 255;
            if (IiiIiI1l == 61) return llI11I1i;
            IiiIiI1l = liIillI1[IiiIiI1l];
          }
        } while (lI1iI1l < Iili1I1i && IiiIiI1l == -1);
        if (IiiIiI1l == -1) break;
        llI11I1i += String.fromCharCode((lI11li1 & 15) << 4 | (IiiIiI1l & 60) >> 2);
        do {
          Ilii1II1 = llIl1Ii1.charCodeAt(lI1iI1l++) & 255;
          if (Ilii1II1 == 61) return llI11I1i;
          Ilii1II1 = liIillI1[Ilii1II1];
        } while (lI1iI1l < Iili1I1i && Ilii1II1 == -1);
        if (Ilii1II1 == -1) break;
        llI11I1i += String.fromCharCode((IiiIiI1l & 3) << 6 | Ilii1II1);
      }
      return llI11I1i;
    }
  };
  return {
    "encode": llilii1i,
    "decode": I1lIlI1
  };
}();
var authCrypt = function () {
  var llli1l1I = Base64Hex.encode;
  var i11ll1l1 = Base64Hex.decode;
  var lI11I1ll = function () {
    {
      var IllIiii = new Date().getTime();
      return parseInt(IllIiii / 1000);
    }
  };
  var i1ll1i1i = function (l1i1lliI) {
    {
      var Il1lIIII = new Date().getTime();
      var l1iIl11i = parseInt(Il1lIIII / 1000);
      return l1i1lliI ? Il1lIIII / 1000 : (Il1lIIII - l1iIl11i * 1000) / 1000 + " " + l1iIl11i;
    }
  };
  var Ii1iII11 = function (llll1i1) {
    return String.fromCharCode(llll1i1);
  };
  var iliililI = function (Iiiiiii) {
    return Iiiiiii.charCodeAt();
  };
  var Iiiii1Il = function (iIII1liI, iIIi1II1, llIlIIll, i1Iii11) {
    var iIIi1II1 = iIIi1II1 ? iIIi1II1 : "DECODE";
    var llIlIIll = llIlIIll ? llIlIIll : "";
    var i1Iii11 = i1Iii11 ? i1Iii11 : 0;
    var I11iIII = 4;
    llIlIIll = md5(llIlIIll);
    var lIllI1Il = md5(llIlIIll.substr(0, 16));
    var iIIll1l1 = md5(llIlIIll.substr(16, 16));
    if (I11iIII) {
      {
        if (iIIi1II1 == "DECODE") {
          var liI1lil = iIII1liI.substr(0, I11iIII);
        } else {
          var liI1l = md5(i1ll1i1i());
          var Ill1Ili = liI1l.length - I11iIII;
          var liI1lil = liI1l.substr(Ill1Ili, I11iIII);
        }
      }
    } else {
      var liI1lil = "";
    }
    var ii1liIli = lIllI1Il + md5(lIllI1Il + liI1lil);
    var lliII1il;
    if (iIIi1II1 == "DECODE") {
      iIII1liI = iIII1liI.substr(I11iIII);
      lliII1il = i11ll1l1(iIII1liI);
    } else {
      {
        i1Iii11 = i1Iii11 ? i1Iii11 + lI11I1ll() : 0;
        tmpstr = i1Iii11.toString();
        if (tmpstr.length >= 10) {
          iIII1liI = tmpstr.substr(0, 10) + md5(iIII1liI + iIIll1l1).substr(0, 16) + iIII1liI;
        } else {
          var ilIlllii = 10 - tmpstr.length;
          for (var IIiiIiI1 = 0; IIiiIiI1 < ilIlllii; IIiiIiI1++) {
            tmpstr = "0" + tmpstr;
          }
          iIII1liI = tmpstr + md5(iIII1liI + iIIll1l1).substr(0, 16) + iIII1liI;
        }
        lliII1il = iIII1liI;
      }
    }
    var liIli11l = new Array(256);
    for (var IIiiIiI1 = 0; IIiiIiI1 < 256; IIiiIiI1++) {
      {
        liIli11l[IIiiIiI1] = IIiiIiI1;
      }
    }
    var lIiIiiI = new Array();
    for (var IIiiIiI1 = 0; IIiiIiI1 < 256; IIiiIiI1++) {
      {
        lIiIiiI[IIiiIiI1] = ii1liIli.charCodeAt(IIiiIiI1 % ii1liIli.length);
      }
    }
    for (var lI1liliI = IIiiIiI1 = 0; IIiiIiI1 < 256; IIiiIiI1++) {
      lI1liliI = (lI1liliI + liIli11l[IIiiIiI1] + lIiIiiI[IIiiIiI1]) % 256;
      tmp = liIli11l[IIiiIiI1];
      liIli11l[IIiiIiI1] = liIli11l[lI1liliI];
      liIli11l[lI1liliI] = tmp;
    }
    var ll11iI1i = "";
    lliII1il = lliII1il.split("");
    for (var lili1l1I = lI1liliI = IIiiIiI1 = 0; IIiiIiI1 < lliII1il.length; IIiiIiI1++) {
      lili1l1I = (lili1l1I + 1) % 256;
      lI1liliI = (lI1liliI + liIli11l[lili1l1I]) % 256;
      tmp = liIli11l[lili1l1I];
      liIli11l[lili1l1I] = liIli11l[lI1liliI];
      liIli11l[lI1liliI] = tmp;
      ll11iI1i += Ii1iII11(iliililI(lliII1il[IIiiIiI1]) ^ liIli11l[(liIli11l[lili1l1I] + liIli11l[lI1liliI]) % 256]);
    }
    if (iIIi1II1 == "DECODE") {
      if ((ll11iI1i.substr(0, 10) == 0 || ll11iI1i.substr(0, 10) - lI11I1ll() > 0) && ll11iI1i.substr(10, 16) == md5(ll11iI1i.substr(26) + iIIll1l1).substr(0, 16)) {
        {
          ll11iI1i = ll11iI1i.substr(26);
        }
      } else {
        ll11iI1i = "";
      }
    } else {
      {
        ll11iI1i = llli1l1I(ll11iI1i);
        var ii111i = new RegExp("=", "g");
        ll11iI1i = ll11iI1i.replace(ii111i, "");
        ll11iI1i = liI1lil + ll11iI1i;
      }
    }
    return ll11iI1i;
  };
  return {
    "authcode": Iiiii1Il,
    "encode": function (iII1iIli, iliII1II, iil1liil) {
      var l11I1ii = Iiiii1Il(iII1iIli, "ENCODE", iliII1II, iil1liil);
      l11I1ii = l11I1ii.replace(/\+/g, "-");
      l11I1ii = l11I1ii.replace(/\//g, "_");
      l11I1ii = l11I1ii.replace(/=/g, ".");
      return l11I1ii;
    },
    "decode": function (II1li1ll, l1II1Ii) {
      II1li1ll = II1li1ll.replace(/-/g, "+");
      II1li1ll = II1li1ll.replace(/_/g, "/");
      II1li1ll = II1li1ll.replace(/\./g, "=");
      var li1IllIi = Iiiii1Il(II1li1ll, "DECODE", l1II1Ii);
      return li1IllIi;
    }
  };
}();
iｉl = "jsjiami.com.v6";