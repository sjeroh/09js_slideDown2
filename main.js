// let preScrollpos = window.pageYOffset;
// // window.addEventListener('scroll',function(){})
// window.onscroll=function(){
//   let currentScrollPos=window.pageYOffset;
//   console.log('현재값',currentScrollPos)
//   if(currentScrollPos==0){
//     document.getElementById('navbar').style.top='-54px'
//   }else{
//     document.getElementById('navbar').style.top='0'
//   }
//   preScrollpos=currentScrollPos;
// console.log('이전값',preScrollpos)

// }
window.onscroll=()=>{
  // let currentScrollPos=window.pageYOffset;
  // console.log(currentScrollPos)
  // if(currentScrollPos>20){
  //   document.getElementById('navbar').style.top='0'
  // }else{
  //   document.getElementById('navbar').style.top='-54px'

  // }
  // if(document.body.scrollTop)
  console.log('body',document.body.scrollTop)
  console.log(document.documentElement.scrollTop)
  if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
    document.getElementById('navbar').style.top='0'
  }else{
    document.getElementById('navbar').style.top='-54px'
  }

}
