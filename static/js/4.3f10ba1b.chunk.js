(this.webpackJsonprunner=this.webpackJsonprunner||[]).push([[4],{147:function(t,e,c){t.exports={ProductDetailsWrapper:"ProductDetails_ProductDetailsWrapper__3JOF5",ProductDetails__Content:"ProductDetails_ProductDetails__Content__2cmOU"}},148:function(t,e,c){t.exports={ProductDetails__Content__imgs_block:"ImgsBlock_ProductDetails__Content__imgs_block__1Qn6r",ProductDetails__Content__img:"ImgsBlock_ProductDetails__Content__img__DijF2"}},149:function(t,e,c){t.exports={ProductDetails__Content__PropsWrapper:"ProductInfo_ProductDetails__Content__PropsWrapper__Md93C",ProductDetails__Content__Product_Name:"ProductInfo_ProductDetails__Content__Product_Name__2Vg0Q",ProductDetails__Content__Product_Price:"ProductInfo_ProductDetails__Content__Product_Price__2FJfe",ProductDetails__Content__Product__Stars:"ProductInfo_ProductDetails__Content__Product__Stars__1w4bY"}},150:function(t,e,c){},166:function(t,e,c){t.exports={ProductDetails__Content__ProductProps__ButtonsWrapper:"FormBtns_ProductDetails__Content__ProductProps__ButtonsWrapper__14QrN",ProductDetails__Content__ProductProps__Heart_Btn:"FormBtns_ProductDetails__Content__ProductProps__Heart_Btn__3fTkd"}},167:function(t,e,c){t.exports={ProductDetails__Content__ProductSize:"ProductSizes_ProductDetails__Content__ProductSize___OMkH",ProductDetails__Content__Product_Status:"ProductSizes_ProductDetails__Content__Product_Status__3Mvqc",ProductDetails__Content__ProductSizesGrid:"ProductSizes_ProductDetails__Content__ProductSizesGrid__y_s36",ProductDetails__Content__ProductSizesGrid__Label:"ProductSizes_ProductDetails__Content__ProductSizesGrid__Label__2fZ-y",ProductDetails__Content__ProductSizesGrid__LabelChecked:"ProductSizes_ProductDetails__Content__ProductSizesGrid__LabelChecked__17CvG"}},168:function(t,e,c){t.exports={ProductDetails__Content__Reviews:"Reviews_ProductDetails__Content__Reviews__1CM26",ProductDetails__Content__Reviews__TextBlock:"Reviews_ProductDetails__Content__Reviews__TextBlock__p7MZo"}},169:function(t,e,c){t.exports={Product__grid__item:"ProductsListItem_Product__grid__item__2vwv5",Product__grid__item__like_btn:"ProductsListItem_Product__grid__item__like_btn__2C7F4",Product__grid__item__img:"ProductsListItem_Product__grid__item__img__3BsRh",Product__grid__item__name:"ProductsListItem_Product__grid__item__name__1yPf3",Product__grid__item__price:"ProductsListItem_Product__grid__item__price__3Xpra"}},170:function(t,e,c){t.exports={Products__List:"ProductsList_Products__List__zZ9zS"}},171:function(t,e,c){t.exports={Products__Section:"ProductsSection_Products__Section__1tY-D",Products__Content__heading:"ProductsSection_Products__Content__heading__7Lsxy"}},172:function(t,e,c){t.exports={Products__Top_Img:"ProductsPage_Products__Top_Img__hKb9u",Products__Top_Img__Text:"ProductsPage_Products__Top_Img__Text__9ZPvo",Products__Content:"ProductsPage_Products__Content__3ARpa",Products__Categories:"ProductsPage_Products__Categories__2ir_U"}},182:function(t,e,c){"use strict";c.r(e);var r=c(13),_=c(0),s=c(1),o=c(12),a=c(14),n=c(21),i=c(146),d=c(11),u=c(5),l=c(147),j=c.n(l),P=c(48),b=c(148),p=c.n(b),m=function(t){return Object(_.jsxs)("div",{className:p.a.ProductDetails__Content__imgs_block,children:[Object(_.jsx)("div",{className:p.a.ProductDetails__Content__img,children:Object(_.jsx)("img",{src:"../../images/ProductsPage/img/".concat(t.category,"/").concat(t.imgUrl.split(" ")[0]),alt:"Product"})}),Object(_.jsx)("div",{className:p.a.ProductDetails__Content__img,children:Object(_.jsx)("img",{src:"../../images/ProductsPage/img/".concat(t.category,"/").concat(t.imgUrl.split(" ")[1]),alt:"Product"})})]})},O=c(149),h=c.n(O),g=c(35),x=c(25),C=(c(150),c(151)),f=function(t){var e=Object(s.useState)(!1),c=Object(x.a)(e,2),r=c[0],o=c[1];return Object(_.jsxs)("div",{className:"Accodrion-Container",children:[Object(_.jsx)("input",{id:"ac-1",name:"accordion-1",type:"checkbox",onClick:function(){return o(!r)}}),Object(_.jsxs)("label",{htmlFor:"ac-1",children:["DETAILS",Object(_.jsx)("span",{children:r?"-":"+"})]}),Object(C.a)(t.detailsContent)]})},D=c(180),v=c(23),S=c(166),N=c.n(S),k=c(50),y=c(51),I=function(t){var e=t.productData,c=Object(d.c)((function(t){return t.like.likes}));return Object(_.jsxs)("div",{className:N.a.ProductDetails__Content__ProductProps__ButtonsWrapper,children:[Object(_.jsx)(v.a,{disabled:!t.productSize,addClass:"Button--Black",children:"ADD TO CART"}),Object(_.jsx)("div",{className:N.a.ProductDetails__Content__ProductProps__Heart_Btn,onClick:function(){return r={id:t.productId,category:e.category,imgUrl:e.imgUrl.split(" ")[0],name:e.name,price:e.price,title:e.title},!!c[t.productId]?t.dispatch(u.K(r.id)):t.dispatch(u.d(r));var r},children:c[t.productId]?Object(_.jsx)(y.a,{}):Object(_.jsx)(k.a,{})})]})},L=c(167),z=c.n(L),B=function(t){for(var e=function(e){var c=e.target.parentNode.classList,r=z.a.ProductDetails__Content__ProductSizesGrid__LabelChecked,_=document.querySelector(".".concat(r));c.contains(r)||(c.add(r),t.setProductSize(e.target.value)),_&&_!==e.target.parentNode&&(_.classList.remove("".concat(r)),_.firstChild.checked=!1)},c=[],r=34;r<49;r++)c.push(Object(_.jsxs)("label",{className:z.a.ProductDetails__Content__ProductSizesGrid__Label,children:[Object(_.jsx)("input",{type:"checkbox",value:r,onChange:function(t){return e(t)}}),r]},r));return Object(_.jsxs)("div",{className:z.a.ProductDetails__Content__ProductSize,children:[Object(_.jsx)("span",{className:z.a.ProductDetails__Content__Product_Status,children:"SELECT A SIZE"}),Object(_.jsx)("div",{className:z.a.ProductDetails__Content__ProductSizesGrid,children:c})]})},T=Object(o.i)((function(t){var e=Object(d.b)(),c=Object(d.c)((function(t){return t.auth.userId})),r=Object(d.c)((function(t){return t.auth.token})),o=Object(d.c)((function(t){return t.cart.itemAdded})),a=Object(s.useState)(""),i=Object(x.a)(a,2),l=i[0],j=i[1];return Object(s.useEffect)((function(){o&&e(u.j())}),[o,e]),Object(_.jsx)(n.a,{children:Object(_.jsxs)("form",{onSubmit:function(_){return function(_,s){if(_.preventDefault(),r&&c){var o=t.productData,a=(o.details,Object(D.a)(o,["details"]));a.size=l,a.id=s,e(u.a(a,r,c))}else e(u.L("/products/".concat(t.match.params.id,"?category=").concat(t.productData.category))),t.history.push("/auth")}(_,t.match.params.id)},children:[Object(_.jsx)(B,{setProductSize:j}),Object(_.jsx)(I,{productId:t.match.params.id,dispatch:e,productSize:l,productData:t.productData})]})})})),w=function(t){return Object(_.jsxs)("div",{className:h.a.ProductDetails__Content__PropsWrapper,children:[Object(_.jsx)("div",{className:h.a.ProductDetails__Content__Product_Title,children:t.productData.title}),Object(_.jsx)("div",{className:h.a.ProductDetails__Content__Product_Name,children:t.productData.name}),Object(_.jsxs)("div",{className:h.a.ProductDetails__Content__Product_Price,children:[t.productData.price," Rub"]}),Object(_.jsxs)("div",{className:h.a.ProductDetails__Content__Product__Stars,children:[Object(_.jsx)(g.a,{amount:"5"}),"\xa0",Object(_.jsx)("span",{children:"4.9"})]}),Object(_.jsx)(T,{productData:t.productData}),Object(_.jsx)(f,{detailsContent:t.productData.details})]})},R=c(168),E=c.n(R),W=function(t){return Object(_.jsxs)("div",{className:E.a.ProductDetails__Content__Reviews,children:[Object(_.jsxs)("div",{className:E.a.ProductDetails__Content__Reviews__TextBlock,children:[Object(_.jsx)("span",{children:"BASED ON 5843 REVIEWS"}),Object(_.jsxs)("div",{children:[Object(_.jsx)(g.a,{amount:"5"})," ",Object(_.jsx)("span",{children:"4.8"})]})]}),Object(_.jsx)(v.a,{addClass:"Button--Black",children:"WRITE A COMMENT"})]})},U=Object(o.i)((function(t){var e=Object(d.b)(),c=Object(d.c)((function(t){return t.product.product})),r=Object(d.c)((function(t){return t.cart.loading}));Object(s.useEffect)((function(){var c,r=new URLSearchParams(t.location.search),_="",s=Object(i.a)(r.entries());try{for(s.s();!(c=s.n()).done;){_=c.value[1]}}catch(o){s.e(o)}finally{s.f()}e(u.y(t.match.params.id,_))}),[t.match.params.id,e,t.location.search]);var o="";return c&&(o=Object(_.jsxs)("div",{className:j.a.ProductDetailsWrapper+" ProductDetailsWrapper",children:[Object(_.jsxs)("div",{className:j.a.ProductDetails__Content,children:[Object(_.jsx)(m,{category:c.category,imgUrl:c.imgUrl}),Object(_.jsx)(w,{productData:c})]}),Object(_.jsx)(W,{})]})),(r||null===c)&&(o=Object(_.jsx)("div",{className:j.a.Loader,children:Object(_.jsx)(P.a,{})})),Object(_.jsx)(n.a,{children:o})})),A=c(169),G=c.n(A),F=function(t){return Object(_.jsxs)("li",{className:G.a.Product__grid__item,children:[Object(_.jsx)("button",{className:G.a.Product__grid__item__like_btn,onClick:function(){return t.likeBtnClicked({id:t.productId,category:t.product.category,imgUrl:t.product.imgUrl.split(" ")[0],name:t.product.name,price:t.product.price,title:t.product.title},t.Liked)},children:t.Liked?Object(_.jsx)(y.a,{}):Object(_.jsx)(k.a,{})}),Object(_.jsx)("div",{className:G.a.Product__grid__item__img,children:Object(_.jsx)(a.b,{to:{pathname:"/products/".concat(t.productId),search:"?category=".concat(t.product.category)},children:Object(_.jsx)("img",{src:"../images/ProductsPage/img/".concat(t.product.category,"/").concat(t.product.imgUrl.split(" ")[0]),alt:"Product Img"})})}),Object(_.jsx)("h6",{className:G.a.Product__grid__item__name,children:t.product.name}),Object(_.jsxs)("span",{className:G.a.Product__grid__item__price,children:[t.product.price,"rub"]})]},t.productId)},M=c(170),H=c.n(M),Z=function(t){var e=Object(d.b)(),c=Object(d.c)((function(t){return t.like.likes})),r=Object(d.c)((function(t){return t.product.bestsellersLoading})),a=Object(d.c)((function(t){return t.product.sectionLoading})),n=Object(d.c)((function(e){switch(t.sectionCategory){case"bestsellers":return e.product.bestsellers;default:return e.product.productsObject}})),i=function(t,c){return e(c?u.K(t.id):u.d(t))},l=t.sectionCategory,j=Object(s.useCallback)((function(){switch(l){case"bestsellers":return e(u.z());default:return e(u.C(l))}}),[e,l]);Object(s.useEffect)((function(){e(u.n()),j()}),[j,e]);var b="";return b=n?Object.keys(n).map((function(t){return Object(_.jsx)(F,{likeBtnClicked:i,product:n[t],productId:t,Liked:!!c[t]},t)})).reduce((function(t,e){return t.concat(e)}),[]):Object(_.jsx)(o.a,{to:"/products"}),(r&&"bestsellers"===t.sectionCategory||a&&"bestsellers"!==t.sectionCategory)&&(b=Object(_.jsx)(P.a,{local:!0})),Object(_.jsx)("ul",{className:H.a.Products__List,children:b})},J=c(171),K=c.n(J),Q=function(t){return Object(_.jsxs)("section",{className:K.a.Products__Section,children:[Object(_.jsx)("h2",{className:K.a.Products__Content__heading,children:t.heading?t.heading:t.match.params.category}),Object(_.jsx)(Z,{sectionCategory:t.sectionCategory?t.sectionCategory:t.match.params.category})]})},q=c(172),V=c.n(q);e.default=Object(o.i)((function(t){var e=Object(_.jsxs)("div",{className:"Products_Wrapper",children:[Object(_.jsxs)("div",{className:V.a.Products__Top_Img,children:[Object(_.jsx)("div",{className:V.a.Products__Top_Img__Text,children:"Training\xa0Essentials"}),Object(_.jsx)("img",{src:"/images/ProductsPage/Products-img-top.jpg",alt:"Head Img"})]}),Object(_.jsxs)("div",{className:V.a.Products__Content,children:[Object(_.jsxs)("ul",{className:V.a.Products__Categories,children:[Object(_.jsx)("li",{children:Object(_.jsx)(a.c,{to:t.match.url+"/footwear",children:"Footwear"})}),Object(_.jsx)("li",{children:Object(_.jsx)(a.c,{to:t.match.url+"/apparel",children:"Apparel"})}),Object(_.jsx)("li",{children:Object(_.jsx)(a.c,{to:t.match.url+"/accessories",children:"Accessories"})})]}),Object(_.jsx)(o.b,{path:t.match.path+"/:category",exact:!0,render:function(t){return Object(_.jsx)(Q,Object(r.a)({},t))}}),Object(_.jsx)(Q,Object(r.a)(Object(r.a)({},t),{},{heading:"Our BestSellers",sectionCategory:"bestsellers"}))]})]});return t.location.pathname!==t.match.url&&""!==t.location.search&&(e=Object(_.jsx)(o.b,{path:t.match.path+"/:id",exact:!0,render:function(){return Object(_.jsx)(U,{})}})),Object(_.jsx)(n.a,{children:e})}))}}]);
//# sourceMappingURL=4.3f10ba1b.chunk.js.map