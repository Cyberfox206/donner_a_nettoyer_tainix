let informations = ['b3828e9a7tr;4ic6978e1.k=3le414i252n6013@8t7ai186n2122ix891.2189co604', 'r861o527s!5e9.l3893ec516l5985er230q%9@h!e700y!1.c762o=', 'r6181o4se,.188m125u,1ll2285e9r@*y3193o9p5ma:i530l7275.2fr%', 'a5974nn!e432.752m979o4248re412a953u553@198h;e243y422.8556es225', 'b9405e6at546r557i722c385e166.%p,r907e261v715e2495r4t@1821g9o7og760l3583e8.d;e661', 'e899d:e5209n7.m383a4485rt500i6324n@912h,6ot246m*5a4il699.892f832r476', '6al,6ic746e969.585v8345as?5se878u?r855@758g411m9428ai685l%7.n5112et;', '4ke,n3353dj565i538.2538f4o7ur221n7214ie*r378@173o2566vh696.;e886s779', 'p7999au428l687.976f178a275u326r569e*@1851h4e2y.352f316r815', '4ju*1li4667a.726m=7o6r1in*@,g1024m2a1il7042.8e9u', 't!o162m;.=l574a!2cr354o869i7451x@7543ou5449t3lo583o4665k2.o1554r4g', 'l841o166u?2i8s9e5.2l4uc;a806s4748@4ho533t9909ma966i;l1022.7n6e6t'];
let choices = [0, 5, 6];



function CleanDataEmail (email,select) {
    let tableofcaracter = ["!","#","$","%","&","(",")","*","+",",","-","/",":",";","<","=",">","?","[","]","^","_","`","{","|","}","~"];
    for (let i = 0; i < select.length; i++) {
        for (let j = 0; j < email[select[i]].length; j++) {
           if(!isNaN(email[select[i]][j])){
                email[select[i]] = email[select[i]].replaceAll(email[select[i]][j], "");
            }else {
               for (let k = 0; k < tableofcaracter.length; k++) {
                if(email[select[i]][j] === tableofcaracter[k]){
                    email[select[i]] = email[select[i]].replaceAll(email[select[i]][j], "")
                }
               }
            }
        }
    console.log(email[select[i]])
    }
}CleanDataEmail(informations,choices);


